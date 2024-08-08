import Test from "../assets/test.svg";
import Done from "../assets/done.svg";
import notDone from "../assets/notdone.svg";
import Star from "../assets/star.svg";
import "../css/courses.css";

export default function AccessStatus() {
  const statusData = [
    { img: Test, count: 54, label: "No. of Tests" },
    { img: Done, count: 38, label: "Passed" },
    { img: notDone, count: 16, label: "Failed" },
    { img: Star, count: 0, label: "Waiting for Result" },
  ];

  return (
    <div className="courses-access">
      {statusData.map((status, index) => (
        <div className="status" key={index}>
          <img src={status.img} alt="" className="status-img" />
          <div className="ease-text">
            <h2>{status.count}</h2>
            <h5>{status.label}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
