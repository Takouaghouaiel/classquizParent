import React from 'react';
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
        label: '    ترتيب التمارين العالية التحصيل',
        data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
        borderColor: '#B0F2B6',
        backgroundColor: '#B0F2B6',
      },
      {
        label: '    ترتيب التمارين متوسطة التحصيل',
        data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
        borderColor: '#FAC881',
        backgroundColor: '#FAC881',
      },
    {
      label: '  ترتيب التمارين ضعيفة التحصيل',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: '#FF6961',
      backgroundColor: '#FF6961',
    },

 
    
  ],
};

export default function App(scoreType) {
  return (
  <Box sx={{  border: '2px solid #3BC5CA', borderRadius: 2, width: '60%', margin: 'auto' }}>
  <Line  options={options} data={data} />;
  </Box>
  )
}
