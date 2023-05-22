import React, { useState } from 'react';
import { Box, Card, CardHeader, Typography, Grid, Stack } from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';
import ButtongroupSemester from './ButtongroupeSemester.jsx';
import LineChart1 from './LineChart1.jsx';
import LineChart2 from './LineChart2.jsx';
import FirstDateButton from './FirstDateButton.jsx';
import SecondDateButton from './SecondDateButton.jsx';
import { useAcheivement } from '../../context/AcheivementContext';
import { useParams } from 'react-router-dom';
export default function TrackingCharts() {
  let { studentId } = useParams();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedChapterId, setselectedchapterid] = useState(1);


const currentDate = new Date();
const previousWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

const formatDate = (date) => {
  const formattedDate = date.toUTCString();
  return formattedDate.substring(0, formattedDate.length - 4) + ' GMT';
};

const formattedStartDate = formatDate(previousWeek);
const formattedEndDate = formatDate(currentDate);

const [startDate, setStartDate] = useState(formattedStartDate);
const [endDate, setEndDate] = useState(formattedEndDate);


  let { getProgress, getProgressbySubjects, getProgressbySubjectsANDChapiter } =
    useAcheivement();

  const [scoreType, setScoreType] = useState('subject');
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
    getProgressbySubjects(studentId, subjectId, startDate, endDate);
  };

  const handleChangeChapterId = ChapterId => {
    setselectedchapterid(ChapterId);
    getProgressbySubjectsANDChapiter(
      studentId,
      selectedSubjectId,
      selectedChapterId,
      startDate,
      endDate
    );
  };

  const handleChangedate = () => {
    getProgress(studentId, startDate, endDate);
  };

  const handleChangeStartDate = date => {
    setStartDate();

    if (startDate && endDate) {
      handleChangedate();
    }
  };

  const handleChangeEndDate = date => {
    setEndDate(date);
    if (startDate && endDate) {
      handleChangedate();
    }
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
              المتابعة اليومية لنتائج تقدّم الطفل
            </Typography>
          }
        />
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent="space-evenly"
            marginRight={'3rem'}
            sx={{
              flexDirection: { md: 'row', xs: 'column' },
              alignItems: 'center',
            }}
          >
            <Grid item>
              <SecondDateButton
                handleChangeEndDate={handleChangeEndDate}
                endDate
                startDate
              />
            </Grid>
            <Grid item>
              <FirstDateButton
                handleChangeStartDate={handleChangeStartDate}
                startDate
                endDate
              />
            </Grid>
            <Grid item>
              <ButtongroupSemester
                buttonProps={{ disabled: isButtonDisabled }}
                onChapterButtonClick={handleChapterButtonClick}
                handleChangeChapterId={handleChangeChapterId}
                handleScoreTypeChange={handleScoreTypeChange}
              />
            </Grid>
            <Grid item>
              <ButtongroupSubject
                onSubjectButtonClick={handleSubjectButtonClick}
                handleChangeSubjectId={handleChangeSubjectId}
                handleScoreTypeChange={handleScoreTypeChange}
              />
            </Grid>
          </Grid>
        </Box>
        <Stack
          container
          spacing={2}
          justifyContent="center"
          marginBottom={'1rem'}
          marginTop={'1rem'}
        >
          <Box>
            <LineChart1 scoreType={scoreType} />
          </Box>
          <Box>
            <LineChart2 scoreType={scoreType} />
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
