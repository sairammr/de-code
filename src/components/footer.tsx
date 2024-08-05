import Logo from "../assets/logo.png"
const Footer = () => {
    return(
       <div style={{backgroundColor:"#D7C5A8",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <img src={Logo} alt="" style={{height:"10%",width:"10%"}}/>
            <div style={{fontSize:"16px",color:"#579BB1",fontWeight:"400"}}>Subscribe to get our Newsletter </div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"1%"}}>
                <input type="text"
                style={{backgroundColor:"#D7C5AB",borderColor:"#83839A",borderRadius:"80px",border:"1.3px solid"}} />
                <button
                style={{
                    backgroundColor:"#4D8FA4",color:"#fff",padding:"0% 4%",borderRadius:"80px",marginLeft:"10%",fontSize:"14px",fontWeight:"200"
                }}>Subscribe</button>
            </div>
            
            <div style={{display:"flex",alignItems:"stretch",
                color:"#4D8FA4",fontSize:"13px",fontWeight:"200",marginTop:"1%"
                }}
            >
               <span>Privacy</span>
               <span>|</span>
               <span>Terms & Conditions</span>
            </div>
            <div style={{
                color:"#4D8FA4",fontSize:"13px",fontWeight:"200",marginTop:"0.2%"}}>© DeCode. </div>
       </div> 
    )
}
export default Footer;