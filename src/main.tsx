import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Web3ModalProvider } from './providers/WagmiProvider.tsx';
import AnonProvider from './providers/AnonProvider.tsx';
import Courses from "./pages/Courses.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Courses/>
	</React.StrictMode>
);
