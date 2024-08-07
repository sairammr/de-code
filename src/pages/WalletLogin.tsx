import { useWalletInfo } from '@web3modal/wagmi/react';
import { FC, useEffect } from 'react';
import { useAccount } from 'wagmi';
import Home from './AadhaarLogin';
import "../index.css";
const WalletLogin: FC = () => {
	const { address, isConnected } = useAccount();
	const { walletInfo } = useWalletInfo();
	
	localStorage.setItem('walletInfo', JSON.stringify(walletInfo));
	localStorage.setItem('address', address || '');

	useEffect(() => {
		if (isConnected) {
		  const elements = document.getElementsByClassName('Aadhaar');
		  
		  Array.from(elements).forEach((element) => {
			const htmlElement = element as HTMLElement; 
			htmlElement.style.display = 'block'; 
		  });
		}
	  }, [isConnected]);
	
	
	return (
			<>
			<span className='flex gap-2 items-center  rounded-full border-[0.1px]  py-1 px-3' style={{ color: "#579BB1", borderColor: "#579BB1",width:'14.4rem' }}>
			<w3m-button
				label='connect'
			/>
			</span>
			<span className='flex gap-2 items-center  rounded-full border-[0.1px]  py-1 px-3' style={{ color: "#579BB1", borderColor: "#579BB1" }}>
				Network : <w3m-network-button />
			</span>
			<div className='Aadhaar' style={{display:'none'}}>
				<Home/>
			</div>
			</>
	);
};

export default WalletLogin;
