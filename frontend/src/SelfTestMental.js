import React, { useState } from 'react';
import './SelfTest.css';


function SelfTestMental() {
    const questions = [
		{
			questionText: 'Are you skipping your daily routines like brushing teeth, bath, mealtimes, etc.?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you find it difficult to enjoy your daily activities as compared to before?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Does it seem difficult for you to make decisions or thinking clearly?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you feeling that a lot of negative / bad things are happening around you?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel like weeping or sad without any specific reason?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you experiencing feeling or nervousness, tension or worried?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you getting angry or upset without any reason on small things which were acceptable earlier?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel sudden panic without any specific cause?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you getting obsessed to konow every smallest information about particular incident or disease which previously you were not concerned?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you findng yourself countinuously thinking and discussing a perticular disease?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you feeling it is your moral responsibility to share every small detail about a perticular incident or disease with everyone around you and on social media?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you afraid of unknown disease or death?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you fear or feel guilty of contracting disease and transmitting disease to family members or others?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you experience having mood swings?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel sleepy the entire day in spite of having a good sleep at night?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you experiencing disturbed sleep, intermittent sleep break, loss of sleep?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Are you experiencing nightmares(fearful dreams)?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
		{
			questionText: 'Do you feel that your regular schedule (Biological clock) is disturbed for sleep, wake up, hunger & stool?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
			],
		},
	];

	const result = () => {
		if(score <= 1){
			return (<div>
				<h5 className="text-center">Report of Mental health check assessment</h5>
				<p>You have successfully completed your mental health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your mental health is Good</h4>	
				<p>Your immunity level is good but to continue staying healthy, we suggest you should follow the general recommendations. It will ensure your immunity level always remains good.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and maintaining immunity. There cannot be any shortcuts or mitacles</p>
			</div>)
		}else if(score < 5){
			return (<div>
				<h5 className="text-center">Report of Mental health check assessment</h5>
				<p>You have successfully completed your mental health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your mental health is Modrate</h4>	
				<p>Now that you know your immunity report it is normal to feel stressed, confused and scared don't worry read, all recommendations and implement these recommendations in your day to day life it will help you to bring changes in your lifestyle and will help in making a huge difference in your immunity level.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and strengthening immunity. There cannot be any shortcuts or minacies to improve immunity</p>
			</div>)
		}else if(score < 10){
			return (<div>
				<h5 className="text-center">Report of Mental health check assessment</h5>
				<p>You have successfully completed your mental health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your mental health is Average</h4>	
				<p>Now that you know your immunity report it is normal to feel stressed, confused and scared don't worry read, all recommendations and implement these recommendations in your day to day life it will help you to bring changes in your lifestyle and will help in making a huge difference in your immunity level.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and strengthening immunity. There cannot be any shortcuts or minacies to improve immunity</p>
			</div>)
		}else if(score < 15){
			return(<div>
				<h5 className="text-center">Report of Mental health check assessment</h5>
				<p>You have successfully completed your mental health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your mental health is Weak</h4>	
				<p>Now that you know your immunity report it is normal to feel stressed, confused and scared don't worry read, all recommendations and implement these recommendations in your day to day life it will help you to bring changes in your lifestyle and will help in making a huge difference in your immunity level.</p>
				<p>Kindly read all recommendations carefully. Remember, it is about your health and strengthening immunity. There cannot be any shortcuts or minacies to improve immunity</p>
			</div>)
		}else{
			return(<div>
				<h5 className="text-center">Report of Mental health check assessment</h5>
				<p>You have successfully completed your mental health assessment. The report is generated based on your answers.</p>
				<h4 className="text-center">Your mental health is Poor</h4>	
				<p>Now that you know your immunity report it is normal to feel stressed, confused and scared don't worry read, all recommendations and implement these recommendations in your day to day life it will help you to bring changes in your lifestyle and will help in making a huge difference in your immunity level.</p>
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
		 <h1 className="text-center">Check your mental health!</h1>
		 {/* <h5>Think you know about coronavirus(COVID-19)?</h5>
		 <p>Take our quiz to see if you have got all the right information about COVID-19 and how to look after your health. </p> */}
		 <p className="container lg-mt-5 lg-mb-5 sm-mt-3 sm-mb-3 text-center"><b>Note:</b>The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease, including COVID-19.</p>
		 <center>
		 <div className='quiz-page'>
			{showResult ? (
				<div>
					<div className="text-left">{result()}</div>
					<a className="read_now" href="/mental-health-recommendations"><button className="mt-3">View reccomendations on mental health</button></a>
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
                <div className="physical-health sm-text-center">
                    <a href="/physical-assessment"><button className="mt-4">Check physical health</button></a>
			   </div>

			   <div className="precutions sm-text-center">
				   <a href="/precutions"><button className="mt-4">Check Precutions</button></a>
			   </div>

			   <div className="symptoms text-center">
				   <a href="/self-test"><button className="mb-4 mt-4">Check Symptoms</button></a>
			   </div>
		   </div>
	   </div>
    )
}

export default SelfTestMental
