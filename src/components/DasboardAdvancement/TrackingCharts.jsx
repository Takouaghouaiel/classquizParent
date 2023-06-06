import React, { useState, useEffect, useMemo } from 'react';
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

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
    setStartDate(dateFormater(date), handleChangedate);
  };

  const handleChangeEndDate = date => {
    setEndDate(dateFormater(date),handleChangedate);
  };

  function getDateBefore(numOfDays) {
    const today = new Date(); // Get the current date
    const previousDate = new Date(today); // Create a new date object with the current date

    previousDate.setDate(today.getDate() - numOfDays); // Subtract numOfDays from the current date

    return previousDate;
  }
  useEffect(() => {
    const currentDate = new Date();
    const previousWeek = getDateBefore(30);

    const formattedStartDate = dateFormater(previousWeek);

    const formattedEndDate = dateFormater(currentDate);

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);

    getProgress(studentId, formattedStartDate, formattedEndDate);
  }, []);

  useMemo(() =>{
     getProgress(studentId,startDate,endDate)
  }, [startDate,endDate])
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
                endDate={startDate}
                startDate={endDate}
              />
            </Grid>
            <Grid item>
              <FirstDateButton
                handleChangeStartDate={handleChangeStartDate}
                startDate={startDate}
                endDate={endDate}
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
const dateFormater = date => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = formatter.format(date);
  return formattedDate; // Output: '06/04/2023'
};
