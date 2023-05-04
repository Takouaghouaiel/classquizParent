import React from 'react';
import {  Box } from '@mui/material';
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
import faker from 'faker';

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
  maintainAspectRatio: false, // Add this line
  aspectRatio: 1.5, // Add this line
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

const labels = ['يناير', ];


export const data = {
  labels,
  datasets: [
    {
      label: ' الإجابات المتميّزة',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#B0F2B6',
    },
    {
      label: ' الإجابات المتوسطة',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#FAC881',
    },
    {
    label: ' الإجابات الضعيفة',
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    backgroundColor: '#FF6961',
    
  },
  ],
};

export default function SubjectChart() {
  return  <Box sx={{  border: '2px solid #3BC5CA', borderRadius: 2, width: '60%',height:'40vh', margin: 'auto' }}>
  <Bar options={options} data={data} />
</Box>
}