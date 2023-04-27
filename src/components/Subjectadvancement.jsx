import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Buttongroup from './Buttongroup.jsx';
export default function Subjectadvancement() {
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
          
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}