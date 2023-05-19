import React from "react";
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom/client';
import createRoot from 'react-dom/client'



class DifChart extends React.Component {
 
    constructor(props) {
      super(props);
    

      const { QuizResult } = props;
      const DifResultQuiz = QuizResult?.[1]?.result;

      this.state = {
      
        series: [{
          data: [DifResultQuiz?.Concentration, DifResultQuiz?.Dyscalculie, DifResultQuiz?.Dysgraphie, DifResultQuiz?.Dyslexie]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
        
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: true
          },
          xaxis: {
            categories: DifResultQuiz ? Object.keys(DifResultQuiz) : [],

          },
          grid: {
            xaxis: {
              lines: {
                show: true
              }
            }
          },
          yaxis: {
            reversed: true,
            axisTicks: {
              show: true
            }
          }
        },
      
      
      };
    }

  

    render() { 
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>
  );
}
}
export default DifChart; 



