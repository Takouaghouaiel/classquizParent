// import React from "react";
// import ApexCharts from 'apexcharts';
// import ReactApexChart from 'react-apexcharts';
// import ReactDOM from 'react-dom/client';
// import createRoot from 'react-dom/client'



// class DifChart extends React.Component {
 
//     constructor(props) {
//       super(props);
    

//       const { QuizResult } = props;
//       const DifResultQuiz = QuizResult?.[1]?.result;

//       this.state = {
      
//         series: [{
//           data: [DifResultQuiz?.Concentration, DifResultQuiz?.Dyscalculie, DifResultQuiz?.Dysgraphie, DifResultQuiz?.Dyslexie]
//         }],
//         options: {
//           chart: {
//             type: 'bar',
//             height: 350
//           },
        
//           plotOptions: {
//             bar: {
//               horizontal: true,
//             }
//           },
//           dataLabels: {
//             enabled: true
//           },
//           xaxis: {
//             categories: DifResultQuiz ? Object.keys(DifResultQuiz) : [],

//           },
//           grid: {
//             xaxis: {
//               lines: {
//                 show: true
//               }
//             }
//           },
//           yaxis: {
//             reversed: true,
//             axisTicks: {
//               show: true
//             }
//           }
//         },
      
      
//       };
//     }

  

//     render() { 
//       return (
        

//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
// </div>
//   );
// }
// }
// export default DifChart; 



import React, { Component } from "react";
import Chart from "react-apexcharts";

class DifChart extends Component {
  constructor(props) {
    super(props);

      const { QuizResult } = props;
      const DifResultQuiz = QuizResult?.[1]?.result;

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: DifResultQuiz ? Object.keys(DifResultQuiz) : [],
        },
        colors: ["rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "#0000FF", "#FFFF00"]
      },
      series: [
        {
          name: "Pourcentage",
                  data: [DifResultQuiz?.Concentration, DifResultQuiz?.Dyscalculie, DifResultQuiz?.Dysgraphie, DifResultQuiz?.Dyslexie]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DifChart;
