import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SmartChart=(props)=>{

  const {QuizResult}=props;
  const SmartResultQuiz = QuizResult?.[0]?.result;

  // const Inter_personnelle=SmartResultQuiz?.['Inter-personnelle'];
  // const Intra_personnelle=SmartResultQuiz?.['Intra-personnelle'];
  // const Kinesthésique=SmartResultQuiz?.Kinesthésique;
  // const Linguistique_et_verbale=SmartResultQuiz?.['SmartResultQuiz'];
  // const Logico_mathématique=SmartResultQuiz?.['Logico-mathématique '];
  // const Musicale=SmartResultQuiz?.Musicale;
  // const Naturiste=SmartResultQuiz?.Naturiste;
  // const Visuo_spatiale=SmartResultQuiz?.['Visuo-spatiale'];
  const keys= SmartResultQuiz? Object.keys(SmartResultQuiz) : []
  const values =[] 
  keys.map(key=>{
    values.push(SmartResultQuiz[key])
  } )



  // console.log(SmartResultQuiz);

  const data = {
    labels:keys?? [],

    datasets: [
      {
        label: '# of Votes',
        data:values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235,  0.5)',
          'rgba(255, 206, 86,  0.5)',
          'rgba(75, 192, 192,  0.5)',
          'rgba(153, 102, 255,  0.5)',
          'rgba(255, 159, 64,  0.5)',
          'rgba(153, 102, 100, 0.5)',
          'rgba(255, 159, 60, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 100, 1)',
          'rgba(255, 159, 60, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;

};
export default  SmartChart;
