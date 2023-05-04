import React, { useState } from 'react';
import { Box, Card,CardHeader,Typography } from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';
import ButtongroupSemester from './ButtongroupeSemester.jsx';
import SubjectChart from './SubjectChart.jsx';
import SubjectCards from './SubjectCards.jsx';

export default function Subjectadvancement() {
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
      <Box
      sx={{ '& > *': {
        marginBottom: '2rem' ,// Add margin bottom to all direct children
        marginLeft:'1rem',
      },
    }}
      >
      <CardHeader
        title={
          <Typography variant="h4" color="orange">
                   تقدّم الطفل حسب كل مادة
          </Typography>
        }
      />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            marginLeft: '20%',
       
            
          }}
        >
          <ButtongroupSemester disabled={isButtonDisabled}  />
          <ButtongroupSubject onSubjectButtonClick={handleSubjectButtonClick} setSelectedSubjectId={setSelectedSubjectId}/>
        </Box>
        <Box
          sx={{
              display: 'flex',
              flexDirection: {md: 'row',sm:'column', xs: 'column'},
              alignItems: 'center',
              justifyContent: 'center',
              Height:'100%',
           
              '@media (max-width: 1050px)': {
                '& > *': {
                  marginBottom: '1rem', // Adjust margin for small screens
                  alignItems:'center',
                  justifyContent:'center',
                }
              }
            
          }}
        >
          <SubjectCards />

          <SubjectChart />
        </Box>
      </Box>
    </Card>
  );
}
