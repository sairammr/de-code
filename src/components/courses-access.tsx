import Test from"../assets/test.svg";
import Done from "../assets/done.svg";
import notDone from "../assets/notdone.svg";
import Star from "../assets/star.svg";
import "../css/courses.css"
export default function AccessStatus(){
    return (
        <div
          className="courses-access"
          style={{
            borderRadius: "11s%",
            background: "linear-gradient(315deg, #cacaca, #f0f0f0)",
            boxShadow: "-5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff",
            padding: "7%",
          }}
        >
          <>
            <div className="status">
              <img src={Test} alt="" className="status-img" />
              <div className="ease-text">
                <h2>?</h2>
                <h5>No. of Tests</h5>
              </div>
            </div>
            <div className="status">
              <img src={Done} alt="" className="status-img" />
              <div className="ease-text">
                <h2>?</h2>
                <h5>Passed</h5>
              </div>
            </div>
            <div className="status">
              <img src={notDone} alt="" className="status-img" />
              <div className="ease-text">
                <h2>?</h2>
                <h5>Failed</h5>
              </div>
            </div>
            <div className="status">
              <img src={Star} alt="" className="status-img" />
              <div className="ease-text">
                <h2>?</h2>
                <h5>Waiting for Result</h5>
              </div>
            </div>
          </>
        </div>
      );
}