import { Typography, Box, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
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

const SmartQuiz = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="h5"
          component="div"
          fontSize="24px"
          fontWeight="bold"
        >
          نتيجة اختبار ميولات الطفل
        </Typography>
        <ResultBox>
          <InterestChart />
        </ResultBox>
      </Box>

      <Box>
        <Typography
          variant="h5"
          component="div"
          fontSize="24px"
          fontWeight="bold"
        >
          نتيجة اختبار الذكاء
        </Typography>
        <ResultBox>
          <SmartChart />
        </ResultBox>
      </Box>

      <Box>
        <Typography
          variant="h5"
          component="div"
          fontSize="24px"
          fontWeight="bold"
        >
          نتيجة اختبار صعوبات التعلم
        </Typography>
        <ResultBox>
          <DifChart />
        </ResultBox>
      </Box>
    </Stack>
  );
};
export default SmartQuiz;
