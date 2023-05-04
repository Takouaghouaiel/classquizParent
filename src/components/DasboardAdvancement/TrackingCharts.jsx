import React, { useState } from 'react';
import { Box, Card ,CardHeader,Typography,Grid} from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';
import ButtongroupSemester from './ButtongroupeSemester.jsx';
import LineChart1 from './LineChart1.jsx';
import LineChart2 from './LineChart2.jsx';
import FirstDateButton  from './FirstDateButton.jsx';
import SecondDateButton  from './SecondDateButton.jsx';

export default function TrackingCharts() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedSubjectId , setSelectedSubjectId] = useState(null)
  const handleSubjectButtonClick=()=>{
    setIsButtonDisabled(false);
  }
  return (
    <Card
    sx={{
      maxWidth: '90%',
      display: 'flex',
      textAlign: 'center',
      border: '2px solid #3BC5CA',
      backgroundColor: 'white',
    }}
  >
   
    <Box>
    <CardHeader
        title={
          <Typography variant="h4" color="orange">
              المتابعة اليومية لنتائج تقدّم الطفل
          </Typography>
        }
      />
      <Box
        sx={{
          flexDirection: { md: 'column', xs: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <SecondDateButton />
          </Grid>
          <Grid item>
            <FirstDateButton />
          </Grid>
          <Grid item>
            <ButtongroupSemester disabled={isButtonDisabled} />
          </Grid>
          <Grid item>
            <ButtongroupSubject
              onSubjectButtonClick={handleSubjectButtonClick}
              setSelectedSubjectId={setSelectedSubjectId}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <LineChart1 />
      </Box>
      <Box>
        <LineChart2 />
      </Box>
    </Box>
</Card>
  
  
  
  
  
  
  
  );
}
