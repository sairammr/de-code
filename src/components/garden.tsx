/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import {  useGarden, useSignStore, useGardenSetup } from "../components/store";
import { Assets } from "@gardenfi/orderbook";
import { useParams } from "react-router-dom";
import create from 'zustand';
type EvmWalletState = {
  metaMaskIsConnected: boolean;
  metaMaskAddress: string | null;
  // other state properties
};

type EvmWalletAction = {
  connectMetaMask: () => void;
  setMetaMaskAddress: (address: string) => void;
  // other actions
};

 const useMetaMaskStore = create<EvmWalletState & EvmWalletAction>((set) => ({
  metaMaskIsConnected: false,
  metaMaskAddress: null,
  // other state initializations

  connectMetaMask: async () => {
    // logic to connect MetaMask and set the address
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const address = accounts[0];
    set({ metaMaskIsConnected: true, metaMaskAddress: address });
  },

  setMetaMaskAddress: (address: string) => set({ metaMaskAddress: address }),
  // other actions
}));

type AmountState = {
  btcAmount: string | null;
  wbtcAmount: string | null;
};

type SwapComponentProps = {
  address?: string | string[];
};

const SwapComponent: React.FC<SwapComponentProps> = ({ address }) => {
  const { network, token, amountwith } = useParams();
  const amountwit = amountwith ? parseInt(amountwith.toString(), 10) : 0;

  console.log("heoi", network, token, amountwit);
  useGardenSetup();

  const [amount, setAmount] = useState<AmountState>({
    btcAmount: null,
    wbtcAmount: null,
  });

  const changeAmount = (of: "WBTC" | "BTC", value: string) => {
    if (of === "WBTC") {
      handleWBTCChange(value);
    }
  };

  const handleWBTCChange = (value: string) => {
    const newAmount: AmountState = { wbtcAmount: value, btcAmount: null };
    if (Number(value) > 0) {
      const btcAmount = (1 - 0.3 / 100) * Number(value);
      newAmount.btcAmount = btcAmount.toFixed(8).toString();
    }
    setAmount(newAmount);
  };

  const { metaMaskAddress } = useMetaMaskStore();

  return (
    <div className="swap-component">
      <WalletConnect />
      <SwapAmount amount={amount} changeAmount={changeAmount} amountwit={amountwit} />
      <Swap amount={amount} changeAmount={changeAmount} address={metaMaskAddress || address} />
    </div>
  );
};

const WalletConnect: React.FC = () => {
  const { connectMetaMask, metaMaskIsConnected } = useMetaMaskStore();

  return (
    <div className="swap-component-top-section">
      <MetaMaskButton
        isConnected={metaMaskIsConnected}
        onClick={connectMetaMask}
      />
    </div>
  );
};

type MetaMaskButtonProps = {
  isConnected: boolean;
  onClick: () => void;
};

const MetaMaskButton: React.FC<MetaMaskButtonProps> = ({
  isConnected,
  onClick,
}) => {
  const buttonClass = `connect-metamask button-${
    isConnected ? "black" : "white"
  }`;
  const buttonText = isConnected ? "Connected" : "Connect Metamask";

  return (
    <button className={buttonClass} onClick={onClick}>
      <img src="/assets/MetaMask_Fox.svg" className="fox-logo" alt="" />{buttonText}
    </button>
  );
};

type TransactionAmountComponentProps = {
  amount: AmountState;
  changeAmount: (of: "WBTC" | "BTC", value: string) => void;
  amountwit: number;
};

const SwapAmount: React.FC<TransactionAmountComponentProps> = ({
  changeAmount,
  amountwit,
}) => {
  const withdraw=amountwit.toString();

  return (
    <div className="swap-component-middle-section" style={{display:'none'}}>
      <InputField
        id="wbtc"
        label="Contribute WBTC"
        value={withdraw}
        onChange={(value) => changeAmount("WBTC", value)}
      />
      <div>Amountwit: {amountwit}</div>
    </div>
  );
};

type InputFieldProps = {
  id: string;
  label: string;
  value: string | null;
  readOnly?: boolean;
  onChange?: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  readOnly,
  onChange,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <div className="input-component" style={{display:'none'}}>
      <input
        id={id}
        placeholder="0"
        value={value ? value : ""}
        type="number"
        readOnly={readOnly}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <button>{id.toUpperCase()}</button>
    </div>
  </div>
);

type SwapAndAddressComponentProps = {
  amount: AmountState;
  changeAmount: (of: "WBTC" | "BTC", value: string) => void;
  address?: string | string[];
};

const Swap: React.FC<SwapAndAddressComponentProps> = ({
  amount,
  changeAmount,
  address,
}) => {
  const { garden } = useGarden();
  const { metaMaskIsConnected } = useMetaMaskStore();
  const { wbtcAmount, btcAmount } = amount;

  useSignStore();

  const handleSwap = async () => {
    if (
      !garden ||
      typeof Number(wbtcAmount) !== "number" ||
      typeof Number(btcAmount) !== "number"
    )
      return;

    console.log(Assets.bitcoin_regtest.BTC);
    const sendAmount = Number(wbtcAmount) * 1e8;
    const recieveAmount = Number(btcAmount) * 1e8;

    console.log(Assets.bitcoin_regtest.BTC);
    changeAmount("WBTC", "");
    try {
      await garden.swap(
        Assets.ethereum_localnet.WBTC,
        Assets.bitcoin_regtest.BTC,
        sendAmount,
        recieveAmount,
      );
    } catch (error) {
      window.alert('Enter valid WBTC value!');
    }
  };

  return (
    <div className="swap-component-bottom-section" >
      <div className="none-block" style={{display:'none'}}>
        <label htmlFor="receive-address">Receive address</label>
        <div className="input-component">
          <input
            id="receive-address"
            placeholder="Enter BTC Address"
            value={address ? address.toString() : ""}
            readOnly
          />
        </div>
      </div>
      <button
        className={`button-${metaMaskIsConnected ? "white" : "black"}`}
        onClick={handleSwap}
        disabled={!metaMaskIsConnected}
      >
        Contribute
      </button>
    </div>
  );
};

export default SwapComponent;
