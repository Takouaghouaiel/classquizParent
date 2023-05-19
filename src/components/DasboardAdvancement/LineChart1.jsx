import React from 'react';
import { useAcheivement } from '../../context/AcheivementContext';
import { Box } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'تقدّم الطفل حسب كل مادة',
    },
  },
};



export default function App(scoreType) {

  const { Progress,ProgressbySubjects,ProgressbySubjectsANDChapiter } = useAcheivement();

  const Mistakes = scoreType === 'subject'
  ? ProgressbySubjects ? Object.values(ProgressbySubjects).map(item => item.details?.nbrMistakes) : []
  : scoreType === 'semester'
  ? ProgressbySubjectsANDChapiter ? Object.values(ProgressbySubjectsANDChapiter).map(item => item.details?.nbrMistakes) : []
  : Progress ? Object.values(Progress).map(item => item.details?.nbrMistakes) : [];

const Exercices = scoreType === 'subject'
  ? ProgressbySubjects ? Object.values(ProgressbySubjects).map(item => item.details?.nbrQuestions) : []
  : scoreType === 'semester'
  ? ProgressbySubjectsANDChapiter ? Object.values(ProgressbySubjectsANDChapiter).map(item => item.details?.nbrQuestions) : []
  : Progress ? Object.values(Progress).map(item => item.details?.nbrQuestions) : [];


// console.log(Mistakes);

  const date =
  scoreType === 'subject'
    ? ProgressbySubjects ? Object.values(ProgressbySubjects).map(item => item.date) : []
    : scoreType === 'semester'
    ? ProgressbySubjectsANDChapiter ? Object.values(ProgressbySubjectsANDChapiter).map(item => item.date) : []
    : Progress ? Object.values(Progress).map(item => item.date) : [];
 




   const data = {
    labels: date,
    datasets: [
      {
        label: '  متابعة الأخطاء',
        data: Mistakes,
        borderColor: '#FF6961',
        backgroundColor: '#FF6961',
      },
      {
        label: '  متابعة التمارين',
        data: Exercices,
        borderColor: '#B0F2B6',
        backgroundColor: '#B0F2B6',
      },
      
    ],
  };



  return (
  <Box sx={{  border: '2px solid #3BC5CA', borderRadius: 2, width: '60%', margin: 'auto' }}>
  <Line  options={options} data={data} />;
  </Box>
  )
}
