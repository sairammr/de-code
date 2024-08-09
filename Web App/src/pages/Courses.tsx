import "../css/courses.css";
import Ad from "../components/advertisement";
import StudyPlan from "../components/StudyPlan";
import AccessStatus from "../components/courses-access";
import Calendar from "../components/Calender";
import CourseContent from "../components/CourseContent";
export default function Courses() {
  const tutor = [
    {      icon: '💻',

      title: "Alice Johnson", label: 'Beginner',
      details: "Introduction to JavaScript",mcqQuestions: 30,
      programmingQuestions: 15,
      company: 50
    },
    {      icon: '📗',

      title: "Michael Brown",
      details: "Advanced Python Programming",
      label: 'Beginner',
      mcqQuestions: 30,
      programmingQuestions: 15,
      company: 75
    },
    {      icon: '📘',

      title: "Sophia Davis",
      details: "Data Structures and Algorithms",
      company: 65,mcqQuestions: 30,
      programmingQuestions: 15,
      label: 'Advanced',

    },
    {      icon: '🔧',

      title: "James Wilson",
      details: "Web Development with React",
      label: 'Beginner',
      mcqQuestions: 30,
      programmingQuestions: 15,

      company: 80
    },
    {      icon: '🔍',

      title: "Emily Smith",
      details: "Machine Learning Basics",
      label: 'Advanced',
      mcqQuestions: 30,
      programmingQuestions: 15,
      company: 90
    }
  ];
  
  const courses = [
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
      
    return(
        <>
        <div className="courses-main">
            <div className="courses-left">
                <div className="courses-ad">
                    <Ad/>
                    <StudyPlan/>
                    <div style={{fontSize:"30px",fontWeight:"300",color:"#579BB1",paddingLeft:"5%",marginTop:"1%"}}>Tutors</div>
                    <CourseContent courses={tutor}/>
                </div>
                <div style={{fontSize:"30px",fontWeight:"300",color:"#579BB1",paddingLeft:"5%",marginTop:"1%"}}>Problems</div>

                <CourseContent courses={courses}/>
                
            </div>
            <div className="courses-right">
                <div className="courses-ease">
                    
                </div>
                <div className="courses-wallet">
                
                </div>
               
            </div>
        </div>

        </>
    )
}

