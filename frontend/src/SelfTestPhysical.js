import React, { useState } from 'react';
import './SelfTest.css';


function SelfTestPhysical() {
    const questions = [
		{
			questionText: 'Do you feel tired, fatigued or weak in doing daily routine work?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you have frequent headaches?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you experience persistent body aches?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel uneasiness?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel irritation or have redness in the eyes?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel your appetite is poor as compared to before?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel hungry in spite of having proper meals?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel you are not drinking adequate water, or your thirst has reduced?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Has your urine or bowel pattern changed?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'is there any pain or discomfort in the abdomen?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you experiencing tremors in hands and legs?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you missing doses of your regular medicine?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel feverish?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you experience imitation in the nose?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you experience irritation in the throat?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you have diarrhea or watery stool?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
	];

	const result = () => {
		if(score <= 1){
			return (<div>
				<h5 className="text-center">Report of Physical health check assessment</h5>
				<p>You have successfully completed your Physical health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your Physical health is good</h4>	
				<p>Your immunity level is good but to continue staying healthy, we suggest you should follow the general recommendations. It will ensure your immunity level always remains good.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and maintaining immunity. There cannot be any shortcuts or mitacles</p>
			</div>)
		}else if(score < 5){
			return (<div>
				<h5 className="text-center">Report of Physical health check assessment</h5>
				<p>You have successfully completed your Physical health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your Physical health is modrate</h4>	
				<p>Now that you know your immunity report, don't worry read all recommendations and implement these recommendations in your day to day life. It will help you to bring changes in your lifestyle help in making a huge difference in your immunity level.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and strengthening immunity. There cannot be any shortcuts or minacies to improve immunity</p>
			</div>)
		}else if(score < 10){
			return (<div>
				<h5 className="text-center">Report of Physical health check assessment</h5>
				<p>You have successfully completed your Physical health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your Physical health is average</h4>	
				<p>Now that you know your immunity report, don't worry read all recommendations and implement these recommendations in your day to day life. It will help you to bring changes in your lifestyle help in making a huge difference in your immunity level.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and strengthening immunity. There cannot be any shortcuts or minacies to improve immunity</p>
			</div>)
		}else if(score < 15){
			return(<div>
				<h5 className="text-center">Report of Physical health check assessment</h5>
				<p>You have successfully completed your Physical health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your Physical health is weak</h4>	
				<p>Now that you know your immunity report, don't worry read all recommendations and implement these recommendations in your day to day life. It will help you to bring changes in your lifestyle help in making a huge difference in your immunity level.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and strengthening immunity. There cannot be any shortcuts or minacies to improve immunity</p>
			</div>)
		}else{
			return(<div>
				<h5 className="text-center">Report of Physical health check assessment</h5>
				<p>You have successfully completed your Physical health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your Physical health is poor</h4>	
				<p>Now that you know your immunity report, don't worry read all recommendations and implement these recommendations in your day to day life. It will help you to bring changes in your lifestyle help in making a huge difference in your immunity level.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and strengthening immunity. There cannot be any shortcuts or minacies to improve immunity</p>
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
		 <h1 className="text-center">Check your Physical health!</h1>
		 {/* <h5>Think you know about coronavirus(COVID-19)?</h5>
		 <p>Take our quiz to see if you have got all the right information about COVID-19 and how to look after your health. </p> */}
		 <p className="container lg-mt-5 lg-mb-5 sm-mt-3 sm-mb-3 text-center"><b>Note:</b>The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease, including COVID-19.</p>
		 <center>
		 <div className='quiz-page'>
			{showResult ? (
			<div>
				<div className="text-left">{result()}</div>
				<a className="read_now" href="/physical-health-recommendations"><button className="mt-3">View reccomendations on Physical health</button></a>
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
                <div className="precutions sm-text-center">
                    <a href="/precutions"><button className="mt-4">Check Precutions</button></a>
			   </div>

			   <div className="mental-health sm-text-center">
				   <a href="/mental-assessment"><button className="mt-4">Check Mental health</button></a>
			   </div>

			   <div className="symptoms text-center">
				   <a href="/self-test"><button className="mb-4 mt-4">Check Symptoms</button></a>
			   </div>
		   </div>
	   </div>
    )
}

export default SelfTestPhysical
