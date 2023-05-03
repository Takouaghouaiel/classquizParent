import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Buttongroup from './ButtongroupSubject.jsx';
import LineChart from '../LineChart.jsx';
import SubjectChart from './SubjectChart.jsx';
export default function TrackingCharts() {
  return (
    <Card sx={{ maxWidth: "85%" ,
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
        textAlign: 'center',
        border: '2px solid #3BC5CA',
       
      }}>
      <CardActionArea>
        <CardContent>
        
          <Buttongroup/>
          
         <LineChart/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}