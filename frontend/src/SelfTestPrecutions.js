import React, { useState } from 'react';
import './SelfTest.css';


function SelfTestPrecutions() {
    const questions = [
		{
			questionText: 'Are you cleaning your hands using alcohol based soap or sanitizer?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you maintaining safe distance from anyone who is sneezing or coughing?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false }
			],
		},
		{
			questionText: 'Are you wearing mask at public places?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you avoiding touching your nose or mouth ?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you Covering your nose and mouth with your bent elbow or a tissue when you cough or sneeze?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you staying at home as much as possible?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you staying at home when you feel unwell?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you clening or disinfecting objects and surfaces that people frequently touch?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
	];

	const result = () => {
		if(score === 8){
			return (<div>
				<h5 className="text-center">Report of your precutions assessment </h5>
				<p>You have successfully completed precutions assessment. The report is generated based on your answers.</p>
				<h5 className="text-center mb-2">Based on your answers, you are follwing right precutions to protect yourself. </h5>	
				<p>Read our how to prevent yourself from COVID-19 page, and follow them to stay safe and healthy.</p>
			</div>)
		}else if(score > 6){
			return(<div>
			<h5 className="text-center">Report of your precutions assessment </h5>
			<p>You have successfully completed precutions assessment. The report is generated based on your answers.</p>
			<h6 className="text-center">Based on your answers, there are some precutions you can do to protect yourself and others from the new coronavirus and COVID-19.</h6>	
			<p>Read our how to prevent yourself from COVID-19 page, and follow them to stay safe and healthy.</p>
		</div>)
		}else{
			return (<div>
				<h5 className="text-center">Report of your precutions assessment </h5>
				<p>You have successfully completed precutions assessment. The report is generated based on your answers.</p>
				<h6 className="text-center">Based on your answers, there is more you can do to protect yourself and others from the new coronavirus and COVID-19.</h6>	
				<p>Read our how to prevent yourself from COVID-19 page, and follow them to stay safe and healthy.</p>
			</div>)
		}
	}

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};
    return (
        <div className="container-fluid">
		 <h1 className="text-center">Check you are taking right precutions or not?</h1>
		 {/* <h5>Think you know about coronavirus(COVID-19)?</h5>
		 <p>Take our quiz to see if you have got all the right information about COVID-19 and how to look after your health. </p> */}
		 <p className="container lg-mt-5 lg-mb-5 sm-mt-3 sm-mb-3 text-center"><b>Note:</b>The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease, including COVID-19.</p>
		 <center>
		 <div className='quiz-page'>
			{showResult ? (
			<div>
				<div>{result()}</div>
				<a className="read_now" href="/about-covid-19-prevention"><button className="mt-3">Prevention from COVID-19</button></a>
			</div>
			) : (
		   <div className="quiz">
			   <div className='question-section'>
				   <div className='question-count'>
					   <span>Question {currentQuestion + 1}</span>/{questions.length}
				   </div>
				   <div className='question-text'>{questions[currentQuestion].questionText}</div>
			   </div>
			   <div className='answer-section'>
				   {questions[currentQuestion].answerOptions.map((answerOption) => (
					   <button className="options" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
				   ))}
			   </div>
		   </div>
			)}
		</div></center>
		   <div className="other_btns container">
                <div className="symptoms text-center">
				   <a href="/self-test"><button className="mt-4">Check Symptoms</button></a>
		    	</div>

                <div className="physical-health sm-text-center">
                    <a href="/physical-assessment"><button className="mt-4">Check physical health</button></a>
                </div>

			    <div className="mental-health sm-text-center">
				   <a href="/mental-assessment"><button className="mb-4 mt-4">Check Mental health</button></a>
			    </div>

			   
		   </div>
	   </div>
    )
}

export default SelfTestPrecutions
