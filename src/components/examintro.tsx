import React from 'react';
import { useParams } from 'react-router-dom';

interface Course {
  icon: string;
  title: string;
  details: string;
  label: string;
  company: string;
  mcqQuestions: number;
  programmingQuestions: number;
}

const courses: Course[] = [
  {
    icon: '💻',
    title: 'Introduction to C++',
    details: 'Learn the basics of C++ programming language, including syntax, data types, and control structures.',
    label: 'Beginner',
    company: 'Philo Infotech',
    mcqQuestions: 20,
    programmingQuestions: 20
  },
  {
    icon: '🔍',
    title: 'Advanced Java Programming',
    details: 'Deep dive into advanced Java concepts, including multithreading, collections, and design patterns.',
    label: 'Advanced',
    company: 'TechMasters Inc.',
    mcqQuestions: 30,
    programmingQuestions: 15
  },
  {
    icon: '📗',
    title: 'Python for Data Science',
    details: 'Learn how to use Python for data analysis, visualization, and machine learning.',
    label: 'Intermediate',
    company: 'DataMinds Academy',
    mcqQuestions: 25,
    programmingQuestions: 10
  },
  {
    icon: '🔧',
    title: 'Full-Stack JavaScript Development',
    details: 'Master both frontend and backend development using JavaScript, Node.js, and popular frameworks.',
    label: 'Comprehensive',
    company: 'WebWizards LLC',
    mcqQuestions: 40,
    programmingQuestions: 25
  },
  {
    icon: '📘',
    title: 'iOS App Development with Swift',
    details: 'Learn to build iOS applications using Swift programming language and Xcode.',
    label: 'Intermediate',
    company: 'Apple Certified Training',
    mcqQuestions: 30,
    programmingQuestions: 20
  },
  {
    icon: '⚛️',
    title: 'React Native for Mobile Development',
    details: 'Create cross-platform mobile apps using React Native framework.',
    label: 'Advanced',
    company: 'MobileApp Gurus',
    mcqQuestions: 35,
    programmingQuestions: 15
  },
  {
    icon: '📙',
    title: 'Database Design and SQL',
    details: 'Master database design principles and SQL for efficient data management.',
    label: 'Beginner',
    company: 'DataBase Pros',
    mcqQuestions: 25,
    programmingQuestions: 15
  },
  {
    icon: '📂',
    title: 'Cloud Computing Fundamentals',
    details: 'Introduction to cloud computing concepts, services, and deployment models.',
    label: 'Beginner',
    company: 'CloudTech Institute',
    mcqQuestions: 30,
    programmingQuestions: 10
  },
  {
    icon: '🌐',
    title: 'RESTful API Design',
    details: 'Learn best practices for designing and implementing RESTful APIs.',
    label: 'Intermediate',
    company: 'API Solutions Ltd.',
    mcqQuestions: 20,
    programmingQuestions: 15
  },
  {
    icon: '🔒',
    title: 'Ethical Hacking and Penetration Testing',
    details: 'Learn techniques and tools used in ethical hacking and cybersecurity.',
    label: 'Advanced',
    company: 'SecureNet Academy',
    mcqQuestions: 35,
    programmingQuestions: 20
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence Fundamentals',
    details: 'Introduction to AI concepts, algorithms, and applications.',
    label: 'Intermediate',
    company: 'AI Innovators',
    mcqQuestions: 30,
    programmingQuestions: 15
  },
  {
    icon: '🔬',
    title: 'Blockchain Technology',
    details: 'Explore the principles of blockchain and its applications in various industries.',
    label: 'Advanced',
    company: 'BlockChain Experts',
    mcqQuestions: 25,
    programmingQuestions: 10
  }
];

const ExamIntro: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid course ID</div>;
  }

  const courseIndex = parseInt(id, 10);
  if (isNaN(courseIndex) || courseIndex < 0 || courseIndex >= courses.length) {
    return <div>Course not found</div>;
  }

  const course = courses[courseIndex];

  return (
    <div className="course-card" style={{ width: "50vw" }}>
      <div className="course-header" style={{ color: "#565656" }}>
        <h2 style={{ color: "#565656" }}>{course.title}</h2>
        <p>{course.company}</p>
        <button className="start-test" style={{ color: "#FFF", marginTop: "2%", marginBottom: "2%" }}>Start Test</button>
      </div>
      <div className="course-certification" style={{ color: "#34A853" }}>
        <span>Certification</span>
        <p>Your Tokens Will Be Credited To Your Wallet If You Score Over 60%.</p>
      </div>
      <div className="course-details" style={{ color: "#565656", marginTop: "2%" }}>
        <div className="course-questions">
          <h3>Questions Type</h3>
          <p>MCQ Questions: {course.mcqQuestions} (Medium)</p>
          <p>Programming Questions: {course.programmingQuestions} (Medium)</p>
        </div>
        <div className="course-recommendations" style={{ border: "1px solid #565656", borderRadius: "10px", padding: "3%", fontSize: "13px" }}>
          <p>We Recommend Having An Environment Ready, So You Can Solve Problems Outside Of The Browser.</p>
          <p>You Can Use Any Documentation, Files, Or Other Helpful Resources.</p>
          <p>40 Minutes (No Breaks Allowed)</p>
        </div>
      </div>
    </div>
  );
};

export default ExamIntro;