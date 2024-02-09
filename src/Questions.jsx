import React from "react";
import { useState } from 'react';

import plus from "../src/assets/images/icon-plus.svg"
import minus from "../src/assets/images/icon-minus.svg"

import './Questions.css'

function Questions(props) {

const [info, setInfo] = useState (props.inicialOpen || false)
const infoClicked = () => {
    setInfo(!info)
}

    return (
        <div className="container--Questions">
            <div className="question" onClick={infoClicked}>
                <h4>{props.question}</h4>
                <img src={info ? minus : plus} alt="img" />
                
            </div>{  info && (
                    <div className="answer">
                        <p>{props.answer}</p>
                    </div>
                    )
                }
            
        </div>
    )
}

export default Questions;