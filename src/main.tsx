import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import Landing from "./pages/landing"
import App from './App.tsx';
import './index.css';
import { Web3ModalProvider } from './providers/WagmiProvider.tsx';
import AnonProvider from './providers/AnonProvider.tsx';
import Courses from "./pages/Courses.tsx";
import LoginPage from './pages/loginPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LoginPage/>
	</React.StrictMode>
);
