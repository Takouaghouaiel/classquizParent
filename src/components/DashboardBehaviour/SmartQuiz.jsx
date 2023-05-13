// import React, { useState } from 'react';

// const SmartQuiz = () => {
//   const questions = [
//     {
//       question: 'What is the capital of France?',
//       options: ['Paris', 'London', 'Berlin', 'Madrid'],
//       answer: 'Paris'
//     },
//     {
//       question: 'Which animal is known as the "king of the jungle"?',
//       options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
//       answer: 'Lion'
//     },
//     {
//       question: 'How many planets are there in our solar system?',
//       options: ['7', '8', '9', '10'],
//       answer: '8'
//     }
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);

//   const handleAnswerOptionClick = (selectedAnswer) => {
//     if (selectedAnswer === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className="quiz">
//       {showScore ? (
//         <div className="score-section">
//           You scored {score} out of {questions.length}
//         </div>
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-text">{questions[currentQuestion].question}</div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestion].options.map((option) => (
//               <button key={option} onClick={() => handleAnswerOptionClick(option)}>{option}</button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SmartQuiz;
import * as React from 'react';

export default function SmartQuiz() {
  return (
    <div>this is quiz</div>
  );}