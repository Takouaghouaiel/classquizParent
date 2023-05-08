import React, { useState } from 'react';
import { Box, Card,CardHeader,Typography } from '@mui/material';
import ButtongroupSubject from './ButtongroupSubject.jsx';
import ButtongroupSemester from './ButtongroupeSemester.jsx';
import SubjectChart from './SubjectChart.jsx';
import SubjectCards from './SubjectCards.jsx';
import { useParams } from 'react-router-dom';
import { useAcheivement } from '../../context/AcheivementContext.jsx';
export default function Subjectadvancement() {

  let {studentId}  =  useParams()
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedSubjectId , setSelectedSubjectId] = useState(null);
  const [selectedChapterId , setselectedchapterid] = useState(null);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);
  let {getStatesbySubjects,getStatesbySubjectsANDChapiter} = useAcheivement()

  
  const handleSubjectButtonClick=(index)=>{
    setIsButtonDisabled(false);
    setSelectedSubjectIndex(index);
  }

  const handleChangeSubjectId = (subjectId)=>{
    // console.log(subjectId);
    // console.log(studentId);

    getStatesbySubjects(studentId , subjectId)
  
  }

  const handleChangeChapterId = (SubjectId,ChapterId)=>{
    console.log('chapterId:',ChapterId);
    console.log('subjectId:',SubjectId);
    getStatesbySubjectsANDChapiter(studentId , SubjectId,ChapterId)
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
          <ButtongroupSemester buttonProps={{ disabled: isButtonDisabled }} handleChangeChapterId={handleChangeChapterId}/>
          <ButtongroupSubject onSubjectButtonClick={handleSubjectButtonClick}   handleChangeSubjectId={handleChangeSubjectId}/>
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

          <SubjectChart  onSubjectButtonClick={handleSubjectButtonClick} />
        </Box>
      </Box>
    </Card>
  );
}
