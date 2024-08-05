import AD1 from "../assets/weekly_contest_ad.svg";
import AD2 from "../assets/Ad2.svg";
import AD3 from "../assets/AD3.svg";
import AD4 from "../assets/AD4.svg";
const Advertisement = () => {
  return (
      <div style={{display:'flex',flexDirection:'row',height :'10vh',width:'100%',justifyContent:'space-evenly'}}>
        <div>
          <img style={{ backgroundColor: "rgb(241 233 233)  " ,height :'10vh'}} className='ad-img' src={AD1} />
      </div><div>
              <img style={{ backgroundColor: "rgb(241 233 233)",height :'10vh' }} className='ad-img' src={AD2} />
          </div><div>
              <img style={{ backgroundColor: "rgb(241 233 233)",height :'10vh' }} className='ad-img' src={AD3} />
          </div>
          <div>
              <img style={{ backgroundColor: "rgb(241 233 233)",height :'10vh' }} className='ad-img' src={AD4} />
          </div>
          </div>
  );
};
export default Advertisement