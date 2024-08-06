import '../css/courses.css'; 

const studyPlanItems = [
    { text: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
    { text: "React", icon: "https://img.icons8.com/ios-filled/50/000000/react.png" },
    { text: "TypeScript", icon: "https://img.icons8.com/ios-filled/50/000000/typescript.png" },
    { text: "Node.js", icon: "https://img.icons8.com/ios-filled/50/000000/node-js.png" },
    { text: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
    { text: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" }
  ];
  
  // Functional component to render the study plan grid
  export default function StudyPlan() {
    return (
      <>
        <h3 className='study-plan'>Study Plan</h3>
        <div className="study-plan-grid">
          {studyPlanItems.map((item, index) => (
            <div className="study-plan-item" key={index}>
              <img src={item.icon} alt={item.text} className="item-icon" />
              <span className="item-text">{item.text}</span>
            </div>
          ))}
        </div>
        <hr style={{ border: '1px solid #000', margin: '.3rem 0' }} />
      </>
    );
  }