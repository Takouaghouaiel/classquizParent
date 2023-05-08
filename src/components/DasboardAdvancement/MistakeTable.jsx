import React, { useState } from 'react';
import { Box, Card ,CardHeader,Typography,Grid,Stack} from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';
import ButtongroupSemester from './ButtongroupeSemester.jsx';
import MistakesTable from './MistakesTable.jsx';

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
              قائمة التمارين حسب عدد الأخطاء 
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
        <Stack container spacing={2} justifyContent="center"
       
        >
          
          <Grid item
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
                marginLeft: '20%',
           
                
              }}
          >
            <ButtongroupSemester disabled={isButtonDisabled} />
            <ButtongroupSubject
              onSubjectButtonClick={handleSubjectButtonClick}
              setSelectedSubjectId={setSelectedSubjectId}
            />
          </Grid>
       
          <Box>
            <MistakesTable/>
          </Box>
        </Stack>
      </Box>
    
    </Box>
</Card>
  
  
  
  
  
  
  
  );
}
