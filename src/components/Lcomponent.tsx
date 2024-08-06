import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
const Lcomp = () => {
    return(
        <div>
        <div className="flex " style={{
            backgroundColor:"#D7C5A8",
            height : "90vh",
            width: "100vw",
            borderBottomRightRadius:"25%",
            borderBottomLeftRadius:"25%",
            justifyContent:"space-around"
        }}>
            <div className="flex justify-center"
            style={{
                height:"100%",
                width:"100%"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
                    <div>
                        <span style={{fontSize:"45px",color:"#579BB1",fontWeight:"600"}}>Earn </span>
                        <span style={{fontSize:"45px",color:"#fff",fontWeight:"600"}}>while you </span>
                    </div>
                    <span style={{fontSize:"45px",color:"#579BB1",fontWeight:"600"}}>learn. </span>
                     <div>
                        <span style={{fontSize:"15px",color:"#FFF",fontWeight:"100"}}>Turn coding into rewards.</span>
                    </div>
                    <br></br>
                    <br />
                    <div style={
                        {
                            backgroundColor:"rgba(255,255,255,0.3)",
                            borderRadius:"80px",
                            padding:"1% 5%",color:"#fff"
                        }
                    }>
                        Join for free
                    </div>
                </div>
            </div>
            <div
            style={{
                height:"100%",
                width:"100%"
            }}><img src={c1} alt="" style={{
                height:"90%",
                width:"85%"
            }}/></div>

        </div>
        <br></br>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{fontSize:"24px",color:"#579BB1",fontWeight:"600"}}>
                What is DeCode?
            </div>
            <br />
            <div className="flex justify-center" style={{
                flexDirection:"column"
                ,alignItems:"center",
                fontSize:"14px",
                color:"#696984",
                fontWeight:"200"
            }}>
            <span> DeCode is where coding meets opportunity. Earn tokens by learning code , and </span>
                       <span> participating in hackathons. Build your portfolio and stand out in the tech world. Join</span>
            
            <span> x DeCode and turn your coding passion into success!</span>
            <br></br>
            <br></br>

            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{fontSize:"22px",color:"#579BB1",fontWeight:"600"}}>
                Our Features
            </div>
            <br />
            <div className="flex justify-center" style={{
                flexDirection:"column"
                ,alignItems:"center",
                fontSize:"14px",
                color:"#696984",
                fontWeight:"200"
            }}>
            <span>Explore a diverse range of programming languages with DeCode. Whether you're looking to practice, learn, </span>
             <span>or     master new skills, our platform offers comprehensive resources and challenges in various languages.  </span>
            <span> Dive into hands-on coding exercises, access expert tutorials, and elevate your expertise across multiple  .     </span>
             <span>  languages. Start your journey to becoming a versatile coder with DeCode today.</span>
<br></br>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={c2} alt=""style={{height:"30%",width:"40%"}} />
            </div>
        </div>
        </div>
    )
}
export default Lcomp