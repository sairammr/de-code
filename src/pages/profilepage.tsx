import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const [myValue, setMyValue] = useState("");

useEffect(() => {
    const storedValue = sessionStorage.getItem('username') || ""; 
    setMyValue(storedValue);
}, []);
    const navigate= useNavigate();
    const profileredirect = () => {
        navigate(`/withdraw`);
      };
    return(
        <>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"3%",height:"43vw"}}>
            <div className="profile-content"  style={{width:"80vw",marginTop:"3%",display:"flex",justifyContent:"space-between",height:"25vw"}}>
                <div style={{width:"65%"}}><div style={{backgroundColor:"#F1F3F6",width:"100%",borderRadius:"15px",padding:"2%",height:"50%"}}>
            <h3 style={{color:"#579BB1",textAlign:"center",fontSize:"20px",marginBottom:"1%"}} >User Information</h3>
            <p style={{color:"#555",fontSize:"16px",marginBottom:"2%",paddingLeft:"3%"}}>Username : {myValue}</p>
            <p style={{color:"#555",fontSize:"16px",marginBottom:"2%",paddingLeft:"3%"}}>About : I am a passionate web developer equiped with both frontend and backend skills.</p>

            </div>
            <div style={{width:"100%",backgroundColor:"#F1F3F6",marginTop:"3%",borderRadius:"10px",display:"flex",justifyContent:"space-around",padding:"2%",color:"#555",fontSize:"16px",flexDirection:"column"}}>
            <h3 style={{color:"#579BB1",textAlign:"center",fontSize:"20px",marginBottom:"1%"}} >Skill Insights</h3>

            <div style={{padding:"2%"}}>🧑‍💻  Frontend : 37 tokens</div>
            <div style={{padding:"2%"}}>⌨️  Backend : 27 tokens</div>
            <div style={{padding:"2%"}}>🖥️  DSA : 33 tokens</div></div>
        </div>


            <div style={{width:"30%",backgroundColor:"#F1F3F6",padding:"2%",borderRadius:"15px",height:"125%"}}>
                <div style={{color:"#579BB1",fontSize:"18px",fontWeight:"400"}}> My Wallet</div>
                <div style={{color:"#8C89B4",fontSize:"12px",fontWeight:"100",marginTop:"1%"}}>wallet balance</div>
                <div style={{height:"50%", width:"100%",background: "linear-gradient(135deg, #7F00FF, #E100FF)",borderRadius:"15px",marginTop:"15%",marginBottom:"4%"}}>
                    <div style={{color:"#FFFFFF",fontSize:"13px",padding:"6% 0% 0% 6%",opacity:"0.7"}}>Current balance</div>
                    <div style={{color:"#FFFFFF",fontSize:"26px",fontWeight:"400",padding:"2% 6% 6%",}}>100 Token Points</div>
                </div>
                <button 
                            className="withdraw-button" 
                            style={{ marginLeft:"0%",backgroundColor: "#CCEFD4", color: "#34A853", borderRadius: "5px", padding: "3% 38%", marginTop: "15%", fontSize: "14px", fontWeight: "500" }}
                            onClick={profileredirect}
                        >
                            Withdraw
                        </button>

                 </div>
            

            </div>
          
            {/* Add more user information as needed */}
      

        </div>

      </>
    )
}
export default Profile;