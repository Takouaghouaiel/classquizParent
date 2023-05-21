import { Typography, Box, Stack, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import InterestChart from './InterestChart';
import SmartChart from './SmartChart';
import DifChart from './DifChart';
const ResultBox = styled.div`
  width: 100%;
  background-color: white;
  color: #3bc5ca;
  border: 2px solid #3bc5ca;
  border-radius: 5px;
`;

const QuizResult = () => {
  const [QuizResult, setQuizResult] = useState([]);
  const { studentId } = useParams();
  const getResult = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://api.omega.classquiz.tn/v2/student/${studentId}/quiz`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setQuizResult(data);
        // console.log('QuizResult:',QuizResult);
      } else if (response.status === 401) {
        throw new Error('Failure QuizResult');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult();

  }, []);

    return (
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h5" component="div" fontSize="24px" fontWeight="bold">
                  نتيجة اختبار ميولات الطفل
                </Typography>
                <ResultBox>
                  <InterestChart QuizResult={QuizResult} />
                </ResultBox>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h5" component="div" fontSize="24px" fontWeight="bold">
                  نتيجة اختبار الذكاء
                </Typography>
                <ResultBox>
                  <SmartChart QuizResult={QuizResult} />
                </ResultBox>
              </Box>
            </Grid>
          </Grid>
      
          <Box>
            <Typography variant="h5" component="div" fontSize="24px" fontWeight="bold">
              نتيجة اختبار صعوبات التعلم
            </Typography>
            <ResultBox>
              <DifChart QuizResult={QuizResult} />
            </ResultBox>
          </Box>
        </Stack>
      );
      
};
export default QuizResult;
