import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  border: 2px solid #3BC5CA;

`;

const ScoreSection = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const QuestionSection = styled.div`
  margin-bottom: 50px
  ;
`;

const QuestionText = styled.div`
  font-size: 40px;
`;

const AnswerButton = styled.button`
font-size: 16px;
margin-top: 10px;
display: block;
margin-bottom: 10px;
width: 200px;
padding: 10px;
background-color: #fff;
color: #3BC5CA;
border: 2px solid #3BC5CA;
border-radius: 5px;
cursor: pointer;

&:hover {
  background-color: #3BC5CA;
  color: #fff;
}
`;

const SmartQuiz = () => {

  const { studentId } = useParams();
  const [SmartQuiz, setSmartQuiz] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchSmartQuiz = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `https://api.omega.classquiz.tn/v2/student/${studentId}/quiz/1/questions`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data;
          setSmartQuiz(data);
          
          const extractedQuestions = data.map(item => item.question);
          setQuestions(extractedQuestions);
          console.log('questions:', extractedQuestions);
          const extractedAnswers = data.map(question => question.responses);
          setAnswers(extractedAnswers);
            // console.log('responses:', extractedAnswers);
        } else if (response.status === 401) {
          throw new Error('Failure getQ/A');
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSmartQuiz();
  }, [studentId]);




  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (selectedAnswer) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } 
  };

  return (
    <QuizContainer>
    
        <>
          <QuestionSection>
           
                <QuestionText>{questions[currentQuestion]}</QuestionText>
            
           
          </QuestionSection>
          <div>
            <AnswerButton> {answers} </AnswerButton>
          </div>
          {/* <div>
            {questions[currentQuestion].questions.map((option) => (
              <AnswerButton key={option} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </AnswerButton>
            ))}
          </div> */}
        </>
      
    </QuizContainer>
  );
};

export default SmartQuiz;
