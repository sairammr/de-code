import { replace, useNavigate } from "react-router-dom";
import "../index.css";
import { MouseEventHandler } from "react";
export default function Program(){
    const handleback = (): void => {
        const navigate = useNavigate(); // Initialize the navigate function
        navigate('/', { replace: true }); // Navigate to the home page, replacing the current entry
    };
    return(
        <>
        <span onClick={handleback}>
        <h2 style={{paddingLeft:'5%'}}>&#60;  Go Back</h2>
        </span>
        <div className="program-main">
            <div className="program-left">
                <span className="program-sub">
                    <h3>Section</h3>
                    <h3>MCQ</h3>
                    <h3>Programming</h3>
                </span>
            </div>
            <div className="program-right">
                <div className="program-right-header">

                </div>
                <div className="program-right-question">
                    
                </div>
                <div className="program-right-console">

                </div>
            </div>
        </div>
        </>
    )
}