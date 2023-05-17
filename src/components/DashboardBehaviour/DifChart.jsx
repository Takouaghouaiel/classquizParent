import React from "react";
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom/client';
import createRoot from 'react-dom/client'
class DifChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          annotations: {
            xaxis: [{
              x: 500,
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#00E396',
                },
                text: 'X annotation',
              }
            }],
            yaxis: [{
              y: 'July',
              y2: 'September',
              label: {
                text: 'Y annotation'
              }
            }]
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
            categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
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

const domContainer = document.querySelector('#app');
ReactDOM.createRoot[React.createElement(DifChart)];

