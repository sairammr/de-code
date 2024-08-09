import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className="flex justify-between navbarmobile" 
                 style={{backgroundColor : "#D7C5A8",padding:"0% 3%" }}>
                <img src={Logo} alt="Logo"
                     style={{height:"100%",width:"8%"}} />

                {/* Toggle Button for Mobile */}
                <button className="toggle-button" onClick={toggleNavbar}>
                    ☰
                </button>

                {/* Navbar Links */}
                <nav className={`flex gap-8 mt-7 mr-10 nav-links ${isOpen ? 'open' : ''}`} 
                     style={{color : "#fff"}}>
                    <Link to="/" onClick={toggleNavbar}>
                        <div style={{fontSize:"15px",fontWeight:"100"}}>Home</div>
                    </Link>
                    <Link to="/courses" onClick={toggleNavbar}>
                        <div style={{fontSize:"15px",fontWeight:"100"}}>Courses</div>
                    </Link>
                    <Link to="/events" onClick={toggleNavbar}>
                        <div style={{fontSize:"15px",fontWeight:"100"}}>Events</div>
                    </Link>
                    <Link to="/leaderboard" onClick={toggleNavbar}>
                        <div style={{fontSize:"15px",fontWeight:"100"}}>Leaderboard</div>
                    </Link>
                    <Link to="/profile" onClick={toggleNavbar}>
                        <div style={{fontSize:"15px",fontWeight:"100"}}>Profile</div>
                    </Link>
                    <Link to="/login" onClick={toggleNavbar}>
                        <div style={{
                            fontSize:"15px",fontWeight:"100",
                            maxHeight : "3vh", color:"#5B5B5B",
                            borderRadius: "80px", backgroundColor:"#fff",
                            paddingLeft:"10px", paddingRight:"10px",
                            paddingTop:"2px",
                        }}>Login</div>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar1;
