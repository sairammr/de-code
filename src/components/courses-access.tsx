import Test from "../assets/test.svg";
import Done from "../assets/done.svg";
import notDone from "../assets/notdone.svg";
import Star from "../assets/star.svg";
import "../css/courses.css"
export default function AccessStatus(){
    return (
        <div
          className="courses-access"
        >
          <>
            <div className="status">
              <img src={Test} alt="" className="status-img" />
              <div className="ease-text">
                <h2>54</h2>
                <h5>No. of Tests</h5>
              </div>
            </div>
            <div className="status">
              <img src={Done} alt="" className="status-img" />
              <div className="ease-text">
                <h2>38</h2>
                <h5>Passed</h5>
              </div>
            </div>
            <div className="status">
              <img src={notDone} alt="" className="status-img" />
              <div className="ease-text">
                <h2>16</h2>
                <h5>Failed</h5>
              </div>
            </div>
            <div className="status">
              <img src={Star} alt="" className="status-img" />
              <div className="ease-text">
                <h2>0</h2>
                <h5>Waiting for Result</h5>
              </div>
            </div>
          </>
        </div>
      );
}