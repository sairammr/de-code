import back from "../assets/Rectangle.svg"
import logo from "../assets/logo1.svg"
const Logincomp = ()=>{
    return (
        <div className="flex">
            <div style={{backgroundColor:"#FFE6C9",height:"100vh",width:"50vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                
                <img src={logo} alt="" style={{
                    height:"50vh",width:"25vw"
                }}/>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <div style={{color:"#73114B",fontSize:"18px",fontWeight:"500"}}>Log in to start mastering new skills and earn rewards</div>
                    <div style={{color:"#73114B",fontSize:"15px",fontWeight:"100"}}>Join the Community now </div>
                </div>
            </div>
            <div style={{backgroundColor:"#FFF",height:"100vh",width:"50vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <div style={{color:"#73114B",fontSize:"24px",fontWeight:"500"}}>Log-in Securely !!!</div>
            </div>
        </div>
    )
}
export default Logincomp;