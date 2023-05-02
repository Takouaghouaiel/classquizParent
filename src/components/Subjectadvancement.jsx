import * as React from 'react';
import { Box } from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';
import ButtongroupSemester from './ButtongroupeSemester.jsx';
import SubjectChart from './SubjectChart.jsx';
import SubjectCards from './SubjectCards.jsx';
export default function Subjectadvancement() {
  return (
    <Box
      sx={{
        maxWidth: '90%',
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
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
          }}
        >
          <ButtongroupSemester />
          <ButtongroupSubject />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ margin: '5%' }}>
            <SubjectCards />
          </Box>
          <SubjectChart />
        </Box>
      </Box>
    </Box>
  );
}
