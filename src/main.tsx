import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import './index.css';
import App from './App';
import { Web3ModalProvider } from './providers/WagmiProvider.tsx';
import AnonProvider from './providers/AnonProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AnonProvider>
			<Web3ModalProvider>
				<App />
			</Web3ModalProvider>
		</AnonProvider>
	</React.StrictMode>
);