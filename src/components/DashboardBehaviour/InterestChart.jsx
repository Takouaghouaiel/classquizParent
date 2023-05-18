import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const InterestChart = (props) => {
  const { QuizResult } = props;
  const InterestResultQuiz = QuizResult?.[2]?.result;
//  console.log(InterestResultQuiz)

const labels = Object.keys(InterestResultQuiz);

console.log(labels);
  const data = {
     labels : [

      InterestResultQuiz['Free spirit'],

     'السخي',
     'ذو روح حرة',
     'المشاغب',
      'صاحب انجازات',
      'لاعب جيّد',
    
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [
          InterestResultQuiz?.Socializer,
          InterestResultQuiz?.Philanthropist,
          InterestResultQuiz?.Disruptor,
          InterestResultQuiz?.Player,
          InterestResultQuiz?.Achiever,
          InterestResultQuiz?.Disruptor,
          InterestResultQuiz?.['Free spirit'],
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          '#B1907F',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          '#B1907F',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default InterestChart;
