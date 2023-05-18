import React, { useState } from 'react';
import { Box, Card, CardHeader, Typography, Grid, Stack,Button } from '@mui/material';
import ButtongroupSubject2 from './ButtongroupSubject2.jsx';
import ButtongroupSemester2 from './ButtongroupeSemester.jsx';
import MistakesTable from './MistakesTable.jsx';
import { useAcheivement } from '../../context/AcheivementContext.jsx';
import { useParams } from 'react-router-dom';
export default function MistakeTable() {
  let { studentId } = useParams();
  const { getMistakesbySubjects ,getMistakesbySubjectsANDChapiter} = useAcheivement();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedChapterId, setselectedchapterid] = useState(1);

  const [scoreType, setScoreType] = useState('semester');
  const handleScoreTypeChange = newScoreType => {
    setScoreType(newScoreType);
  };

  const handleSubjectButtonClick = index => {
    setIsButtonDisabled(false);
    setSelectedSubjectId(index);
  };
 
  const handleChapterButtonClick=(index)=>{
    setselectedchapterid(index);
  }



  const handlegetMistakesbySubject = SubjectId => {
    setSelectedSubjectId(SubjectId);
    getMistakesbySubjects(studentId, SubjectId);
  };

  const handleChangeChapterId = ChapterId => {
    setselectedchapterid(ChapterId);
    getMistakesbySubjectsANDChapiter(
      studentId,
      selectedSubjectId,
      selectedChapterId
    );
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
            <ButtongroupSemester2 
            buttonProps={{ disabled: isButtonDisabled }}
            onChapterButtonClick={handleChapterButtonClick}
            handleChangeChapterId={handleChangeChapterId}
            handleScoreTypeChange={handleScoreTypeChange}
            />
            <ButtongroupSubject2
              onSubjectButtonClick={handleSubjectButtonClick}
              handlegetMistakesbySubject={handlegetMistakesbySubject}
              handleScoreTypeChange={handleScoreTypeChange}
           
            />
          </Grid>


          <Grid>
            <MistakesTable
            scoreType={scoreType}
            />
          </Grid>
        </Stack>
      </Box>
    </Card>
  );
}
