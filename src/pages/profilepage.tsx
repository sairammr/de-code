const Profile = () => {
    return(
        <>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"3%"}}>
            <div className="profile-content"  style={{width:"80vw",marginTop:"3%",display:"flex",justifyContent:"space-between",height:"25vw"}}>
                <div style={{width:"65%"}}><div style={{backgroundColor:"#F1F3F6",width:"100%",borderRadius:"15px",padding:"2%",height:"50%"}}>
            <h3 style={{color:"#579BB1",textAlign:"center",fontSize:"20px",marginBottom:"1%"}} >User Information</h3>
            <p style={{color:"#000",fontSize:"16px",marginBottom:"2%",paddingLeft:"5%"}}>Username: Tyler Durden</p>
            </div>
            <div style={{width:"100%",backgroundColor:"#F1F3F6",marginTop:"3%",borderRadius:"10px",display:"flex",justifyContent:"space-around",padding:"2%",color:"#000",fontSize:"16px",flexDirection:"column"}}>
            <div style={{padding:"2%"}}>Frontend : 37 de-coins</div>
            <div style={{padding:"2%"}}>Backend : 27 de-coins</div>
            <div style={{padding:"2%"}}>DSA : 33 de-coins</div></div>
        </div>


            <div style={{width:"30%",backgroundColor:"#F1F3F6",padding:"2%",borderRadius:"15px"}}>
                <div style={{color:"#579BB1",fontSize:"18px",fontWeight:"400"}}> My Wallet</div>
                <div style={{color:"#8C89B4",fontSize:"12px",fontWeight:"100",marginTop:"1%"}}>wallet balance</div>
                <div style={{height:"60%", width:"100%",background: "linear-gradient(135deg, #7F00FF, #E100FF)",borderRadius:"15px",marginTop:"5%",marginBottom:"4%"}}>
                    <div style={{color:"#FFFFFF",fontSize:"13px",padding:"6% 0% 0% 6%",opacity:"0.7"}}>Current balance</div>
                    <div style={{color:"#FFFFFF",fontSize:"26px",fontWeight:"400",padding:"2% 6% 6%",}}>100 de-coins</div>
                </div>
                <button 
                            className="withdraw-button" 
                            style={{ marginLeft:"65%",backgroundColor: "#CCEFD4", color: "#34A853", borderRadius: "5px", padding: "3% 5%", marginTop: "2%", fontSize: "14px", fontWeight: "500" }}
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