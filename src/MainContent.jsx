import React from "react";

import "./MainContent.css"
import Questions from "./Questions";

import iconStar from "../src/assets/images/icon-star.svg"

function Hero() {
    return (
        <div className="container--mainContent">
            <div className="title-mainContent">
                <img src={iconStar} alt="img" />
                <h1>FAQs</h1>
            </div>

            <Questions 
                question="What is Frontend Mentor, and how will it help me?"
                answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building."
                inicialOpen={true} //active the first answer 
            />
            
            <Questions 
                question="Is Frontend Mentor free?"
                answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                option providing access to a range of projects suitable for all skill levels."
            />

            <Questions 
                question="Can I use Frontend Mentor projects in my portfolio?"
                answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                way to showcase your skills to potential employers!"
            />

            <Questions 
                question=" How can I get help if I'm stuck on a challenge?"
                answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                channel where you can ask questions and seek support from other community members."
            />
        </div>
    )
}

export default Hero;