import * as React from 'react';
import { Box ,Card} from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';

import ButtongroupSemester from './ButtongroupeSemester.jsx';
import SubjectChart from './SubjectChart.jsx';
import SubjectCards from './SubjectCards.jsx';
export default function Subjectadvancement() {
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            marginLeft: '20%',
            marginTop:'1%'
          }}
        >
          <ButtongroupSemester />
          <ButtongroupSubject />
        </Box>
        <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'space-evenly' }}>
        
            <SubjectCards/>
       
          <SubjectChart />
        </Box>
      </Box>
    </Card>
  );
}
