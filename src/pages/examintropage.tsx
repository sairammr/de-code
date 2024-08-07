import ExamIntro from "../components/examintro";
import PaymentWithdrawal from "../components/paymentWithdrawal";
const exams = [{
    title:"Introduction to C++",
    company:"Philo Infotech",
    mcqQuestions:20,
    programmingQuestions:20
}]
const ExamIntroPage = () =>{
    return(<>
        <ExamIntro course={exams}/>
        <PaymentWithdrawal /></>
    )
}
export default ExamIntroPage;