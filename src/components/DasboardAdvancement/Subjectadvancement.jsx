import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Card, CardHeader, Typography } from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';
import ButtongroupSemester from './ButtongroupeSemester.jsx';
import SubjectChart from './SubjectChart.jsx';
import SubjectCards from './SubjectCards.jsx';
import { useParams } from 'react-router-dom';
import { useAcheivement } from '../../context/AcheivementContext.jsx';
export default function Subjectadvancement() {
  let { studentId } = useParams();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedChapterId, setselectedchapterid] = useState(1);

  let { getStatesbySubjects, getStatesbySubjectsANDChapiter } =
    useAcheivement();

  const [scoreType, setScoreType] = useState('');
  const handleScoreTypeChange = newScoreType => {
    setScoreType(newScoreType);
  };

  const handleSubjectButtonClick = index => {
    setIsButtonDisabled(false);
    setSelectedSubjectId(index);
  };

  const handleChapterButtonClick = index => {
    setselectedchapterid(index);
  };

  const handleChangeSubjectId = subjectId => {
    setSelectedSubjectId(subjectId);
    getStatesbySubjects(studentId, subjectId);
  };

  const handleChangeChapterId = ChapterId => {
    setselectedchapterid(ChapterId);
    getStatesbySubjectsANDChapiter(
      studentId,
      selectedSubjectId,
      selectedChapterId
    );
  };

  useEffect(() => {
    // getStatesbySubjects(studentId, selectedSubjectId)
    // getStatesbySubjectsANDChapiter(   studentId,
    //   selectedSubjectId,
    //   selectedChapterId)
  }, []);


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
        sx={{
          '& > *': {
            marginBottom: '2rem', // Add margin bottom to all direct children
            marginLeft: '1rem',
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
          <ButtongroupSemester
            buttonProps={{ disabled: isButtonDisabled }}
            onChapterButtonClick={handleChapterButtonClick}
            handleChangeChapterId={handleChangeChapterId}
            handleScoreTypeChange={handleScoreTypeChange}
          />
          <ButtongroupSubject
            onSubjectButtonClick={handleSubjectButtonClick}
            handleChangeSubjectId={handleChangeSubjectId}
            handleScoreTypeChange={handleScoreTypeChange}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', sm: 'column', xs: 'column' },
            alignItems: 'center',
            justifyContent: 'center',
            Height: '100%',

            '@media (max-width: 1050px)': {
              '& > *': {
                marginBottom: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          }}
        >
          <SubjectCards scoreType={scoreType} />

          <SubjectChart scoreType={scoreType} />
        </Box>
      </Box>
    </Card>
  );
}
