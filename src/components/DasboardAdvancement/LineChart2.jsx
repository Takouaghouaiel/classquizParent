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

  const BadResponses = scoreType === 'subject'
  ? ProgressbySubjects ? Object.values(ProgressbySubjects).map(item => item.details?.nbrBadResponses) : []
  : scoreType === 'semester'
  ? ProgressbySubjectsANDChapiter ? Object.values(ProgressbySubjectsANDChapiter).map(item => item.details?.nbrBadResponses) : []
  : Progress ? Object.values(Progress).map(item => item.details?.nbrBadResponses) : [];

const GoodResponses = scoreType === 'subject'
  ? ProgressbySubjects ? Object.values(ProgressbySubjects).map(item => item.details?.nbrGoodResponses) : []
  : scoreType === 'semester'
  ? ProgressbySubjectsANDChapiter ? Object.values(ProgressbySubjectsANDChapiter).map(item => item.details?.nbrGoodResponses) : []
  : Progress ? Object.values(Progress).map(item => item.details?.nbrGoodResponses) : [];

  const ExcellentResponses = scoreType === 'subject'
  ? ProgressbySubjects ? Object.values(ProgressbySubjects).map(item => item.details?.nbrExcellentResponses) : []
  : scoreType === 'semester'
  ? ProgressbySubjectsANDChapiter ? Object.values(ProgressbySubjectsANDChapiter).map(item => item.details?.nbrExcellentResponses) : []
  : Progress ? Object.values(Progress).map(item => item.details?.nbrExcellentResponses) : [];

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
          label: '    ترتيب التمارين العالية التحصيل',
          data:ExcellentResponses ,
          borderColor: '#B0F2B6',
          backgroundColor: '#B0F2B6',
        },
        {
          label: '    ترتيب التمارين متوسطة التحصيل',
          data: GoodResponses,
          borderColor: '#FAC881',
          backgroundColor: '#FAC881',
        },
      {
        label: '  ترتيب التمارين ضعيفة التحصيل',
        data: BadResponses,
        borderColor: '#FF6961',
        backgroundColor: '#FF6961',
      },
  
   
      
    ],
  };
  return (
  <Box sx={{  border: '2px solid #3BC5CA', borderRadius: 2, width: '60%', margin: 'auto' }}>
  <Line  options={options} data={data} />;
  </Box>
  )
}
