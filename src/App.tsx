import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar1 from '../src/components/navbar1';
import Courses from './pages/Courses';
import Landing from './pages/landing';
import LoginPage from './pages/loginPage';
import CourseDetailsPage from './pages/coursedetailspage';
import EventPage from './pages/event';
import Footer from './components/footer';
import Program from './components/Program';
import ExamIntro from './components/examintro'; // Assuming you have this component
import PaymentWithdrawal from './components/paymentWithdrawal';
import SwapComponent from './components/garden';
import Profile from './pages/profilepage'; 
import LeaderBoardPage from './pages/leaderboard';// Assuming you have this component
import LoadingComponent from './components/Lastd';

const AppContent = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' && <Navbar1 />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/course-details/:index" element={<CourseDetailsPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventPage />} />
		<Route path='/program' element={<Program/>}/>
		<Route path='/withdraw' element={<PaymentWithdrawal/>}/>
  <Route path='/withdrawprocess' element={<LoadingComponent/>}/>
		<Route path='/profile' element={<Profile/>}/>
        <Route path="/exam/courses/:id" element={<ExamIntro />} />
		<Route path='/withdrawtowallet/:network/:token/:amountwith' element={<SwapComponent address={""}/>}/>
        <Route path="/leaderboard" element={<LeaderBoardPage/>} />

      </Routes>
      <br />
      <Footer/>
      </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
