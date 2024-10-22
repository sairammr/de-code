/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import {  useGarden, useSignStore, useGardenSetup } from "../components/store";
import { Assets } from "@gardenfi/orderbook";
import { replace, useNavigate, useParams } from "react-router-dom";
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
  wbtcAmount: string | null;
  btcAmount: string | null;
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
    wbtcAmount: null,
    btcAmount: null,
  });

  const changeAmount = (of: "WBTC" | "BTC", value: string) => {
    if (of === "WBTC") {
      handleWBTCChange(value);
    }
  };

  const handleWBTCChange = (value: string) => {
    const newAmount: AmountState = { btcAmount: value, wbtcAmount: null };
    if (Number(value) > 0) {
      const wbtcAmount = (1 - 0.3 / 100) * Number(value);
      newAmount.wbtcAmount = wbtcAmount.toFixed(8).toString();
    }
    setAmount(newAmount);
  };

  const { metaMaskAddress } = useMetaMaskStore();
  console.log(metaMaskAddress)
  return (
    <div className="swap-component" style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",height:"50vh"}}>
      <WalletConnect />
      <SwapAmount amount={amount} changeAmount={changeAmount} amountwit={amountwit} />
      <Swap amount={amount} changeAmount={changeAmount} address={metaMaskAddress || address} />
    </div>
  );
};

const WalletConnect: React.FC = () => {
  const { connectMetaMask, metaMaskIsConnected } = useMetaMaskStore();

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2%",marginBottom:"1%"}}>
    <div className="swap-component-top-section" style={{background:"#D7C5A8",width:"17vw",padding:"6%",
      color:"#FFF",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"
    }}>
      <MetaMaskButton
        isConnected={metaMaskIsConnected}
        onClick={connectMetaMask}
      />
    </div></div>
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
  console.log(address)
  const { garden } = useGarden();
  const { metaMaskIsConnected } = useMetaMaskStore();
  const { btcAmount, wbtcAmount } = amount;

  useSignStore();
  const navigate = useNavigate();

  const handle = () => {
      navigate(`/withdrawprocess`);
      handleSwap()
  };
  const handleSwap = async () => {
    const navigate=useNavigate();
    navigate("/profile",{replace:true});
    if (
      !garden ||
      typeof Number(btcAmount) !== "number" ||
      typeof Number(wbtcAmount) !== "number"
    )
      return;

    console.log(Assets.bitcoin_regtest.BTC);
    const sendAmount = Number(btcAmount) * 1e8;
    const recieveAmount = Number(wbtcAmount) * 1e8;

    console.log(Assets.bitcoin_regtest.BTC);
    changeAmount("BTC", "");
    try {
      await garden.swap(
        Assets.bitcoin_regtest.BTC,
        Assets.ethereum_localnet.WBTC,
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
      <div  style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2%",marginBottom:"15%"}}>
      <button style={{backgroundColor:"#287921", color:"#fff", padding:"1% 60%",borderRadius:"6px"}}
        className={`button-${metaMaskIsConnected ? "white" : "black"}`}
        onClick={handle}
        disabled={!metaMaskIsConnected}
      >
        Confirm Withdraw
      </button></div>
    </div>
  );
};

export default SwapComponent;
