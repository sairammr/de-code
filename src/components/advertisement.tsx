import AD1 from "../assets/weekly_contest_ad.svg";
import AD2 from "../assets/Ad2.svg";
import AD3 from "../assets/AD3.svg";
import AD4 from "../assets/AD4.svg";
import AccessStatus from "./courses-access";
const Advertisement = () => {
  return (
    <>
      <h1 style={{marginLeft:"3%",fontSize:"30px",color : "#579BB1",marginTop:"-2%",marginBottom:"1%",fontWeight:"100"}}>Announcements </h1>
      <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-evenly', paddingBottom:"3%",borderBottom:"1px solid rgb(241 233 233)"}}>
        <div>
          <img style={{ backgroundColor: "rgb(241 233 233)  " ,height :'20vh',borderRadius:"10px"}} className='ad-img' src={AD1} />
      </div><div>
    
              <img style={{ backgroundColor: "#F1F3F6",height :'20vh',borderRadius:"10px" }} className='ad-img' src={AD3} />
          </div>
          <AccessStatus/>
          </div>
          </>
  );
};
export default Advertisement