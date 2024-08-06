import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar1 from '../src/components/navbar1';
import Courses from './pages/Courses';
import Landing from './pages/landing';
function App() {
	return (
		<Router>
      <Navbar1 />
      <Routes>
        <Route path="/home" element={<Landing/>}/>
        <Route path="/courses" element={<Courses />} />
       
      </Routes>
    </Router>
  );

}

export default App;
