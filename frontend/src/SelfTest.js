import React, { useState } from 'react';
import './SelfTest.css';

export default function App() {
	const questions = [
		{
			questionText: 'Are you feeling sick?',
			answerOptions: [
				{ answerText: 'Yes', isSerious: false },
				{ answerText: 'No', isSerious: false },
				
			],
		},
		{
			questionText: 'In the two weeks before you felt sick, have you been in close contact with someone who has COVID-19? —excluding people who have had COVID-19 within the past 3 months.',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				
			],
		},
		{
			questionText: 'Do you have fever?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				
			],
		},
		{
			questionText: 'Do you have dry cough and sore throat',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				
			],
		},
		{
			questionText: 'Do you feel chest pain or pressure',
			answerOptions: [
				{ answerText: 'Yes', isSerious: true },
				{ answerText: 'No', isSerious: false },
				
			],
		},
		{
			questionText: 'Do you feel tiredness,headache or body pain?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				
			],
		},
		{
			questionText: 'Do you have a rash on skin, or discolouration of fingers or toes?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				
			],
		},
		{
			questionText: 'Do you faced any difficulty in breathing?',
			answerOptions: [
				{ answerText: 'Yes', isSerious: true },
				{ answerText: 'No', isSerious: false },
				
			],
		},
		{
			questionText: 'Do you feel loss of speech and movement?',
			answerOptions: [
				{ answerText: 'Yes', isSerious: true },
				{ answerText: 'No', isSerious: false },
				
			],

		},
		{
			questionText: 'Do you feel diarrhoea or vometing?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				
			],
			
		},	
	];

	const result = () => {
		if(score === 0){
			return (<div>
				<h5 className="text-center">Report of your COVID-19 Symptoms</h5>
				<p>You have successfully completed your COVID-19 Symptoms assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">You don't have any Sympotms of COVID-19</h4>	
				<p>Your answers indicate that you don't have any COVID-19 symptoms. To stay safe form COVID-19, read our recommendations page to prevent yourself form COVID-19</p>
				<p>In case you suffer from Corona virus or you feel ill then read reccomendations of link given below.</p>
			</div>)
		}else if(seriousScore >= 1){
			return (<div>
				<h5 className="text-center">Report of your COVID-19 Symptoms</h5>
				<p>You have successfully completed your COVID-19 Symptoms assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">You have Serious Sympotms of COVID-19</h4>	
				<p>Your answers indicate that you should call your health care provider and describe your symptoms and/or your contact with someone who’s been diagnosed.</p>
				<p>Be sure to indicate if you are 65 or older and if you suffer from any chronic health problem, such as diabetes, heart disease, cancer or lung disease.</p>
				<p>Most COVID-19 cases can be managed at home. Severe symptoms may require hospital treatment, so read reccomendations given below.</p>
			</div>)
		}else if(score <= 4){
			return (<div>
				<h5 className="text-center">Report of your COVID-19 Symptoms</h5>
				<p>You have successfully completed your COVID-19 Symptoms assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">You have Mild Sympotms of COVID-19</h4>	
				<p>Your answers indicate that you should call your health care provider and describe your symptoms and/or your contact with someone who’s been diagnosed.</p>
				<p>Be sure to indicate if you are 65 or older and if you suffer from any chronic health problem, such as diabetes, heart disease, cancer or lung disease.</p>
				<p>Most COVID-19 cases can be managed at home. Severe symptoms may require hospital treatment, so read reccomendations given below.</p>
			</div>)
		}else{
			return (<div>
				<h5 className="text-center">Report of your COVID-19 Symptoms</h5>
				<p>You have successfully completed your COVID-19 Symptoms assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">You have Common Sympotms of COVID-19</h4>	
				<p>Your answers indicate that you should call your health care provider and describe your symptoms and/or your contact with someone who’s been diagnosed.</p>
				<p>Be sure to indicate if you are 65 or older and if you suffer from any chronic health problem, such as diabetes, heart disease, cancer or lung disease.</p>
				<p>Most COVID-19 cases can be managed at home. Severe symptoms may require hospital treatment, so read reccomendations given below.</p>
			</div>)
		}
	}

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);
	const [seriousScore, setSeriousScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect, isSerious) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		if (isSerious) {
			setSeriousScore(seriousScore + 1);
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
		 <h1 className="text-center">Check yourself for COVID-19 Symptoms</h1>
		 {/* <h5>Think you know about coronavirus(COVID-19)?</h5>
		 <p>Take our quiz to see if you have got all the right information about COVID-19 and how to look after your health. </p> */}
		 <p className="container lg-mt-5 lg-mb-5 sm-mt-3 sm-mb-3 text-center"><b>Note:</b>The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease, including COVID-19.</p>
		 <center>
		 <div className='quiz-page'>
			{showResult ? (
			<div>
				<div className="text-left">{result()}</div>
				<div className="rec_btns">
					<a href="/symptoms-recommendations"><button className="mt-3">Recommendations If You feel seek</button></a>
					<a href="/about-covid-19-prevention"><button className="mt-3">Prevention from COVID-19</button></a>
				</div>
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
					   <button className="options" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.isSerious)}>{answerOption.answerText}</button>
				   ))}
			   </div>
		   </div>
			)}
		</div></center>
		   <div className="other_btns container">
			   <div className="mental-health sm-text-center">
				   <a href="/mental-assessment"><button className="mt-4">Check mental health</button></a>
			   </div>

			   <div className="precutions text-center">
				   <a href="/precutions"><button className="mt-4">Check Precutions</button></a>
			   </div>

			   <div className="physical-health sm-text-center">
				   <a href="/physical-assessment"><button className="mb-4 mt-4">Check physical health</button></a>
			   </div>
		   </div>
	   </div>
	);
}