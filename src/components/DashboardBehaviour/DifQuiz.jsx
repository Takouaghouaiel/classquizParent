import React, { useState, useEffect } from 'react';
import { Box, Button,  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
   } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';


const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  border: 2px solid #3bc5ca;
`;

const CompteurSection = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const QuestionSection = styled.div`
  margin-bottom: 50px;
`;

const QuestionText = styled.div`
  font-size: 30px;
`;

const AnswerButton = styled.button`
  font-size: 16px;
  margin-top: 10px;
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  background-color: #3bc5ca;
  color: white;
  border: 2px solid #3bc5ca;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #3bc5ca;
  }
`;

const SmartQuiz = () => {
  const { studentId } = useParams();
  const [SmartQuiz, setSmartQuiz] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [Result, setResult] = useState([]);
  const [selectedAnswerId, setselectedAnswerId] = useState(0);
  const [questionId, setquestionId] = useState(0);
  const [responses, setresponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

 
  let navigate = useNavigate();
  // popup
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/dashboard/' + studentId +'/behaviours');
  };

  useEffect(() => {
    const fetchSmartQuiz = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `https://api.omega.classquiz.tn/v2/student/${studentId}/quiz/2/questions`,
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

          const extractedQuestions = data.map(item => ({
            id: item.id,
            question: item.question,
          }));

          console.log('extractedQuestions:', extractedQuestions);
          setQuestions(extractedQuestions);

          const extractedAnswers = data.map(question => question.responses);
          setAnswers(extractedAnswers);
          const questionId = questions[currentQuestion].id;
          const questionText = questions[currentQuestion].question;
          console.log('questionId:', questionId, 'questionText', questionText);
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
  
  useEffect(() => {
    if (questions.length > 0 && currentQuestion < questions.length) {
      const questionId = questions[currentQuestion].id;
      const questionText = questions[currentQuestion].question;
      console.log('questionId:', questionId, 'questionText', questionText);
      setquestionId(questionId);
    }
  }, [questions, currentQuestion]);
  
  const postresponses = async currentQuestion => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `https://api.omega.classquiz.tn/v2/student/${studentId}/quiz/2/responses`,

        {
          responses: responses,
        },

        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(responses);
      if (response.status === 200) {
        const data = response.data;
        setResult(data);
      } else if (response.status === 401) {
        throw new Error('Failure result');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswerOptionClick = selectedAnswer => {
    const updatedResponses = [...answers];
    updatedResponses[currentQuestion] = selectedAnswer.response;
    console.log('selectedAnswer:', selectedAnswer);
    setselectedAnswerId(selectedAnswer.id);
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <= questions.length) {
      setCurrentQuestion(nextQuestion);
    } 
    if (nextQuestion > questions.length) {
      setQuizCompleted(true);
    }
  
    setresponses(prevResponses => [
      ...prevResponses,
      {
        questionId: questions[currentQuestion].id,
        responseId: selectedAnswer.id,
      },
    ]);
    console.log('final responses are:', responses);
  };
  



  const handlegetQuizResult = () => {
    handleOpen();
    // Call postresponses with the updated responses
    postresponses(currentQuestion);
  };
  return (
    <Box sx={{ color: '#3bc5ca' }}>

  <QuizContainer>
    <CompteurSection>
      {currentQuestion}/{questions.length}
    </CompteurSection>
    <>
      <QuestionSection>
        <QuestionText>{questions[currentQuestion]?.question}</QuestionText>
      </QuestionSection>
      <div>
        {answers[currentQuestion] &&
          answers[currentQuestion]?.map(option => (
            <AnswerButton
              key={option}
              onClick={() => handleAnswerOptionClick(option)}
            >
              {option.response}
            </AnswerButton>
          ))}
      </div>
      {currentQuestion === questions.length && (
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{
         
          background:
            'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
          
          borderRadius: '6px',
        }}
        onClick={() => handlegetQuizResult()}
      >
        تسجيل
      </Button>
      )}
    </>
  </QuizContainer>


   
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          '& .MuiDialogContent-root': {
            textAlign: 'center',
          },
          '@media (max-width: 600px)': {
            '& .MuiDialogTitle-root, & .MuiDialogActions-root': {
              textAlign: 'center',
            },
          },
        }}
      >
        <DialogTitle sx={{  display: 'flex',
            justifyContent: 'center',}} >لقد تم إنهاء الإختبار بنجاح</DialogTitle>
        <DialogContent>
          <DialogContentText>يمكنك الرجوع إلى قائمة الإختبارات لتلقي النتيجة </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiDialogContent-root': {
              textAlign: 'center',
            },
            '@media (max-width: 600px)': {
              '& .MuiDialogTitle-root, & .MuiDialogActions-root': {
                textAlign: 'center',
              },
            },
          }}
        >
          <Button
            type="submit"
            sx={{
              alignSelf: 'center',
              background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
              width: '200px',
              height: '35px',
              borderRadius: '10px',
              color: 'white',
            }}
            onClick={handleClose}
          >
            أنا موافق
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SmartQuiz;
