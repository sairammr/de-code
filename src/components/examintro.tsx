import React from 'react';

interface Course {
  title: string;
  company: string;
  mcqQuestions: number;
  programmingQuestions: number;
}

interface CourseCardProps {
  course: Course[];
}

const ExamIntro: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div>
      {course.map((course, index) => (
        <div className="course-card" key={index} style={{width:"50vw"}}>
          <div className="course-header"style={{color:"#565656"}} >
           
            <h2 style={{color:"#565656"}}>{course.title}</h2>
            
            <p>{course.company}</p>
            
            <button className="start-test" style={{color:"#FFF",marginTop:"2%",marginBottom:"2%"}}>Start Test</button>
            
          </div>
          <div className="course-certification" style={{color:"#34A853"}}>
            <span>Certification</span>
            <p>Your Tokens Will Be Credited To Your Wallet If You Score Over 60%.</p>
          </div>
          <div className="course-details" style={{color:"#565656",marginTop:"2%"}}>
            <div className="course-questions">
              <h3>Questions Type</h3>
              <p>MCQ Questions: {course.mcqQuestions} (Medium)</p>
              <p>Programming Questions: {course.programmingQuestions} (Medium)</p>
            </div>
            <div className="course-recommendations" style={{border:"1px solid #565656",borderRadius:"10px",padding:"3%",fontSize:"13px"}}>
              <p>We Recommend Having An Environment Ready, So You Can Solve Problems Outside Of The Browser.</p>
              <p>You Can Use Any Documentation, Files, Or Other Helpful Resources.</p>
              <p>40 Minutes (No Breaks Allowed)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamIntro;
