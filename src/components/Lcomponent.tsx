import React from 'react';
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";

const Lcomp = () => {
    return (
        <div>
            <div className="flex content-container">
                <div className="text-content" style={{marginLeft:"10%"}}>
                    <div >
                        <span className="highlight-text">Earn </span>
                        <span className="white-text">while you </span>
                    </div>
                    <span className="highlight-text">learn. </span>
                    <div>
                        <span className="subtext">Turn coding into rewards.</span>
                    </div>
                    <br /><br />
                    <div className="join-button">Join for free</div>
                </div>
                <div className="image-container">
                    <img src={c1} alt="" className="image-style" />
                </div>
            </div>
            <br />
            <div className="section-center">
                <div className="section-title">What is DeCode?</div>
                <br />
                <div className="section-description">
                    <span> DeCode is where coding meets opportunity. Earn tokens by learning code, and </span>
                    <span> participating in hackathons. Build your portfolio and stand out in the tech world. Join</span>
                    <span> x DeCode and turn your coding passion into success!</span>
                    <br /><br />
                </div>
            </div>
            <div className="section-center">
                <div className="section-title">Our Features</div>
                <br />
                <div className="section-description">
                    <span>Explore a diverse range of programming languages with DeCode. Whether you're looking to practice, learn, </span>
                    <span>or master new skills, our platform offers comprehensive resources and challenges in various languages.  </span>
                    <span> Dive into hands-on coding exercises, access expert tutorials, and elevate your expertise across multiple  </span>
                    <span>  languages. Start your journey to becoming a versatile coder with DeCode today.</span>
                    <br /><br />
                </div>
                <div className="feature-image">
                    <img src={c2} alt="" className="image-small" />
                </div>
            </div>
        </div>
    );
}

export default Lcomp;
