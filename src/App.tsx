import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar1 from '../src/components/navbar1';
import Courses from './pages/Courses';
import Landing from './pages/landing';
import LoginPage from './pages/loginPage';
const AppContent=()=> {
	const location = useLocation();
	return (
		<div>
      {location.pathname !== '/login' &&  <Navbar1 /> }
		
      
      <Routes>
        <Route path="/" element={<Landing/>}/>	
		
        <Route path="/courses" element={<Courses />} />
       <Route path="/login" element={<LoginPage/>}/>
      </Routes>
   
	</div>
  );

}
function App() {
	return (
	  <Router>
		<AppContent />
	  </Router>
	);
  }

export default App;
