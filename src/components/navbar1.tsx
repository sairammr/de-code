import Logo from "../assets/logo.png";
import c1 from"../assets/c1.svg";
import c2 from"../assets/c2.svg";
const Navbar1 = () => {
    return(
        <div>
        <div className="flex justify-between"
        style={{backgroundColor : "#D7C5A8",padding:"0% 3%" }}>
            <img src={Logo}
            style={{height:"100%",width:"8%"
            }}
            />
            <nav className="flex  gap-8 mt-7 mr-10" style={{
                color : "#fff",
                
            }}>
                
                
                <div style={{fontSize:"15px",fontWeight:"100"}}>Home</div>
                <div style={{fontSize:"15px",fontWeight:"100"}}>Courses</div>
                <div style={{fontSize:"15px",fontWeight:"100"}}>Leaderboard</div>
                <div style={{fontSize:"15px",fontWeight:"100"}}>Events</div>
                <div style={{
                    fontSize:"15px",fontWeight:"100",
                    backgroundColor:"#FFF",
                    maxHeight : "3vh",
                    color:"#5B5B5B",
                    padding:"0% 5% 5% 5%",
                    borderRadius: "80px"
                }}>Login</div>
                
            </nav>
        </div>
            </div>
    )
}
export default Navbar1;