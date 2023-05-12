import React, { useState, useEffect } from 'react';
import { Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://api.example.com/quiz/questions');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChoiceChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctChoice) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice('');
    } else {
      // Quiz finished, display score or redirect to a new page
      console.log('Quiz finished! Score: ', score);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Typography variant="h5">{currentQuestion.question}</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose an option:</FormLabel>
        <RadioGroup name="choices" value={selectedChoice} onChange={handleChoiceChange}>
          {currentQuestion.choices.map((choice, index) => (
            <FormControlLabel key={index} value={choice} control={<Radio />} label={choice} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button variant="contained" onClick={handleNextQuestion}>Next Question</Button>
    </div>
  );
};

export default Quiz;
