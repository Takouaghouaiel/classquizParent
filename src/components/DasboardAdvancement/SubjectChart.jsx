import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useAcheivement } from '../../context/AcheivementContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ButtongroupSubject from './ButtongroupSubject.jsx';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, 
  aspectRatio: 1.5, 
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'تقدم الطفل حسب كل مادة',
    },
  },
};


export default function SubjectChart({handleSubjectClick}) {
  const { StatesbySubjects, Subjects } = useAcheivement();
  const excellentResponses = [StatesbySubjects?.excellentResponses];
  const goodResponses = [StatesbySubjects?.goodResponses];
  const badResponses = [StatesbySubjects?.badResponses];

  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);
  const selectedSubject = Subjects?.[selectedSubjectIndex];
  const label = selectedSubject?.title || '';

  const data = {
    labels: ['الإجابات المتميّزة', ' الإجابات المتوسطة', ' الإجابات الضعيفة'],
    datasets: [
      {
        label: label,
        data: [excellentResponses, goodResponses, badResponses],
        backgroundColor: ['#B0F2B6', '#FAC881', '#FF6961'],
      },
    ],
  };

  // const handleSubjectClick = (index) => {
  //   setSelectedSubjectIndex(index);
  // };

  return (
    <Box
      sx={{
        border: '2px solid #3BC5CA',
        borderRadius: 2,
        width: '60%',
        height: '40vh',
        margin: 'auto',
      }}
    >
      <Bar options={options} data={data} />
    
    </Box>
  );
}

