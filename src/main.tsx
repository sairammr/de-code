import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing"
import './index.css';
import Courses from "./pages/Courses.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
		<Routes>
			<Route path='/course' element={<Courses/>}/>
		</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
