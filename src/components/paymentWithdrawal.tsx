import React, { useState } from 'react';
import "../css/paymentWithdrawal.css";
import { useNavigate } from 'react-router-dom';

const PaymentWithdrawal: React.FC = () => {
    const [selectedNetwork, setSelectedNetwork] = useState('');
    const [selectedToken, setSelectedToken] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const balance = 100; 
  
    const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedNetwork(event.target.value);
      console.log(selectedNetwork)
      setSelectedToken(''); 
    };
  
    const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedToken(event.target.value);
    };
  
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const amount = event.target.value;
      if (/^\d*\.?\d*$/.test(amount)) {
        setWithdrawalAmount(amount);
      }
    };
  
    const isAmountValid = () => {
      return parseFloat(withdrawalAmount) <= balance && parseFloat(withdrawalAmount) > 0;
    };
    const navigate=useNavigate();
    
    const moveToTransaction = (selectedNetwork:string,withdrawalAmount:string,selectedToken?:string) => {
      console.log(selectedNetwork,withdrawalAmount,selectedToken)
      const tokenPath = selectedToken ? selectedToken : selectedNetwork;
      navigate(`/withdrawtowallet/${selectedNetwork}/${tokenPath}/${withdrawalAmount}`, { replace: true });
  };
    return (
      <div className="payment-withdrawal" >
        <h2 style={{color:"#565656"}}>Withdraw</h2>
        <div className="wallet-balance" style={{color:"#565656",fontWeight:"300"}}>
          <p>Wallet Balance: {balance} Tokens</p>
        </div>
        <div className="network-selection" >
          <label htmlFor="network"  style={{color:"#565656",fontWeight:"300"}}>Select Network:</label>
          <select id="network" value={selectedNetwork} onChange={handleNetworkChange} style={{backgroundColor:"#fff",color:"#565656",fontWeight:"300",width:"100%",border:"1px solid #ccc",borderRadius:"5px"}}>
            <option value="Diam"  style={{color:"#565656",fontWeight:"300"}}>Diam</option>
            <option value="Garden"  style={{color:"#565656",fontWeight:"300"}}>Garden</option>
          </select>
        </div>
        {selectedNetwork === 'Garden' && (
          <div className="token-selection">
            <label htmlFor="token" style={{color:"#565656",fontWeight:"300"}}>Select Token:</label>
            <select id="token" value={selectedToken} onChange={handleTokenChange} style={{backgroundColor:"#fff",color:"#565656",fontWeight:"300",width:"100%",border:"1px solid #ccc",borderRadius:"5px"}}>
              <option value="">--Select Token--</option>
              <option value="WBTC">WBTC</option>
              <option value="Arbitrum">Arbitrum</option>
            </select>
          </div>
        )}
        <div>
          <label htmlFor="wamount" style={{color:"#565656",fontWeight:"300"}}>Enter Tokens to Withdraw:</label>
          <input style={{backgroundColor:"#fff",color:"#565656",fontWeight:"300",width:"100%", height:"5%",borderRadius:"5px",padding:"2% 3%",border:"1px solid #ccc"}}
            type="text" 
            id="wamount" 
            value={withdrawalAmount} 
            onChange={handleAmountChange} 
          />
          {!isAmountValid() && withdrawalAmount && (
            <p className="error-message">Amount exceeds balance</p>
          )}
          {isAmountValid() && withdrawalAmount && (
            <button className="withdraw-button" onClick={()=>moveToTransaction(selectedNetwork,withdrawalAmount.toString(),selectedToken)} style={{backgroundColor:"#CCEFD4",color:"#34A853",width:"100%",borderRadius:"5px",padding:"2% 0%",marginTop:"7%"}}>Withdraw</button>
          )}
        </div>
      </div>
    );
  };
  
  export default PaymentWithdrawal;