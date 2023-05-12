import React, { useState } from 'react';
import { Box, Card, CardHeader, Typography, Grid, Stack,Button } from '@mui/material';
import ButtongroupSubject2 from './ButtongroupSubject2.jsx';
import ButtongroupSemester2 from './ButtongroupeSemester.jsx';
import MistakesTable from './MistakesTable.jsx';
import { useAcheivement } from '../../context/AcheivementContext.jsx';
import { useParams } from 'react-router-dom';
export default function TrackingCharts() {
  let { studentId } = useParams();
  const { getMistakesbySubjects } = useAcheivement();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedChapterId, setselectedchapterid] = useState(null);

  const [scoreType, setScoreType] = useState('subject');
  const handleScoreTypeChange = newScoreType => {
    setScoreType(newScoreType);
  };

  const handleSubjectButtonClick = index => {
    setIsButtonDisabled(false);
    setSelectedSubjectId(index);
  };


 
  // const handleChapterButtonClick=(index)=>{
  //   setselectedchapterid(index);
  // }



  const handlegetMistakesbySubject = SubjectId => {
    setSelectedSubjectId(SubjectId);
    getMistakesbySubjects(studentId, selectedSubjectId);
  };

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

        <Stack
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'flex-start',

              marginLeft: '10%',
            }}
          >
            <ButtongroupSemester2 disabled={isButtonDisabled} />
            <ButtongroupSubject2
              onSubjectButtonClick={handleSubjectButtonClick}
              handlegetMistakesbySubject={handlegetMistakesbySubject}
              handleScoreTypeChange={handleScoreTypeChange}
              // handleChangeSubjectId={handleChangeSubjectId}
            />
          </Grid>


          <Grid>
            <MistakesTable
            
            />
          </Grid>
        </Stack>
      </Box>
    </Card>
  );
}
