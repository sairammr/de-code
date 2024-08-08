import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [myValue, setMyValue] = useState("");

  useEffect(() => {
    const storedValue = sessionStorage.getItem('username') || "";
    setMyValue(storedValue);
  }, []);

  const navigate = useNavigate();

  const profileredirect = () => {
    navigate(`/withdraw`);
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div style={{ width: "65%" }}>
          <div className="user-info">
            <h3 style={{ color: "#579BB1", textAlign: "center", fontSize: "20px", marginBottom: "1%" }}>User Information</h3>
            <p style={{ color: "#555", fontSize: "16px", marginBottom: "2%", paddingLeft: "3%" }}>Username : {myValue}</p>
            <p style={{ color: "#555", fontSize: "16px", marginBottom: "2%", paddingLeft: "3%" }}>About : I am a passionate web developer equipped with both frontend and backend skills.</p>
          </div>
          <div className="skill-insights">
            <h3 style={{ color: "#579BB1", textAlign: "center", fontSize: "20px", marginBottom: "1%" }}>Skill Insights</h3>
            <div style={{ padding: "2%" }}>🧑‍💻 Frontend : 37 tokens</div>
            <div style={{ padding: "2%" }}>⌨️ Backend : 27 tokens</div>
            <div style={{ padding: "2%" }}>🖥️ DSA : 33 tokens</div>
          </div>
        </div>
        <div className="wallet-container">
          <div className="wallet-header">My Wallet</div>
          <div className="wallet-balance">wallet balance</div>
          <div className="wallet-info">
            <div className="wallet-current-balance">Current balance</div>
            <div className="wallet-amount">100 Token Points</div>
          </div>
          <button 
            className="withdraw-button"
            onClick={profileredirect}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
