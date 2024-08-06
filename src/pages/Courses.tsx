import "../css/courses.css";
import Ad from "../components/advertisement";
import StudyPlan from "../components/StudyPlan";
import AccessStatus from "../components/courses-access";
import Calendar from "../components/Calender";
import CourseContent from "../components/CourseContent";
export default function Courses() {
    const courses = [
        {
          icon: '💻',
          title: 'JavaScript Basics',
          details: 'Learn the fundamentals of JavaScript, the programming language of the web.',
          label: 'Beginner'
        },
        {
          icon: '🔍',
          title: 'Advanced JavaScript',
          details: 'Deep dive into advanced concepts and features of JavaScript, including ES6+.',
          label: 'Advanced'
        },
        {
          icon: '📗',
          title: 'Introduction to Python',
          details: 'Start coding in Python, a versatile and popular programming language.',
          label: 'Beginner'
        },
        {
          icon: '🔬',
          title: 'Data Science with Python',
          details: 'Learn how to use Python for data analysis and visualization.',
          label: 'Intermediate'
        },
        {
          icon: '🔧',
          title: 'Full-Stack Web Development',
          details: 'Become a full-stack web developer by learning both frontend and backend technologies.',
          label: 'Comprehensive'
        },
        {
          icon: '📘',
          title: 'React for Beginners',
          details: 'Get started with React, a popular library for building user interfaces.',
          label: 'Beginner'
        },
        {
          icon: '⚛️',
          title: 'React Advanced Concepts',
          details: 'Master advanced React concepts and patterns for building scalable applications.',
          label: 'Advanced'
        },
        {
          icon: '📙',
          title: 'Introduction to TypeScript',
          details: 'Learn TypeScript, a typed superset of JavaScript that scales.',
          label: 'Intermediate'
        },
        {
          icon: '📂',
          title: 'Node.js Essentials',
          details: 'Learn the basics of Node.js, a JavaScript runtime for building server-side applications.',
          label: 'Beginner'
        },
        {
          icon: '🌐',
          title: 'APIs with Node.js and Express',
          details: 'Learn how to build RESTful APIs using Node.js and Express.',
          label: 'Intermediate'
        },
        {
          icon: '🔒',
          title: 'Cybersecurity Fundamentals',
          details: 'Understand the basics of cybersecurity and how to protect applications.',
          label: 'Comprehensive'
        },
        {
          icon: '🤖',
          title: 'Introduction to Machine Learning',
          details: 'Get started with machine learning concepts and techniques using Python.',
          label: 'Intermediate'
        }
      ];
      
    return(
        <>
        <div className="courses-main">
            <div className="courses-left">
                <div className="courses-ad">
                    <Ad/>
                    <StudyPlan/>
                </div>
                <CourseContent courses={courses}/>
            </div>
            <div className="courses-right">
                <div className="courses-ease">
                    <AccessStatus/>
                    <Calendar/>
                </div>
                <div className="courses-wallet">

                </div>
            </div>
        </div>
        </>
    )
}

