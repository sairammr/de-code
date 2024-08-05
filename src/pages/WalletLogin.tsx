import { useWalletInfo, useWeb3Modal } from '@web3modal/wagmi/react';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

const WalletLogin: FC = () => {
	const { address, isConnected } = useAccount();
	const { walletInfo } = useWalletInfo();
	const navigate = useNavigate();
	
	localStorage.setItem('walletInfo', JSON.stringify(walletInfo));
	localStorage.setItem('address', address || '');

	useEffect(() => {
		if (isConnected) navigate('/verify-aadhaar');
	}, [isConnected]);
	
	
	return (
		<div  className='bg flex items-center justify-center h-screen' style={{ backgroundColor: '#F8F4EA' }}>
			<div className='bg-transparent max-md:w-[92%] backdrop-blur-md  rounded-2xl border p-9 flex flex-col gap-y-4' style={{backgroundColor : "#E1D7C6"}}>
				<h2
					draggable='false'
					className='mb-10  text-4xl flex items-center gap-2 max-md:text-2xl justify-center 'style={{color:"#579BB1"}}
				>
					Login 
				</h2>
				
				<w3m-button
					label='connect'
					balance='show'
					loadingLabel='<h3>Loading Wallet Options...</h3>'
				/>
				<span className='flex gap-2 items-center  rounded-full border-[0.1px]  py-1 px-3' style={{color : "#579BB1",borderColor : "#579BB1"}}>
					Network : <w3m-network-button />
				</span>
			</div>
		</div>
	);
};

export default WalletLogin;
