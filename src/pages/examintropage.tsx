import ExamIntro from "../components/examintro";
const exams = [{
    title:"Introduction to C++",
    company:"Philo Infotech",
    mcqQuestions:20,
    programmingQuestions:20
}]
const ExamIntroPage = () =>{
    return(
        <ExamIntro course={exams}/>
    )
}
export default ExamIntroPage;