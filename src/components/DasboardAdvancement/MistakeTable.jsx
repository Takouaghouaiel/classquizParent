import React, { useState ,useEffect} from 'react';
import { Box, Card, CardHeader, Typography, Grid, Stack,Button } from '@mui/material';
import ButtongroupSubject3 from './ButtongroupSubject3.jsx';
import ButtongroupSemester3 from './ButtongroupeSemester3.jsx';
import ButtonPagination from './ButtonPagination.jsx';
import MistakesTable from './MistakesTable.jsx';
import { useAcheivement } from '../../context/AcheivementContext.jsx';
import { useParams } from 'react-router-dom';



export default function MistakeTable() {
  let { studentId } = useParams();
  const { getMistakesbySubjects ,getMistakesbySubjectsANDChapiter,getMistakes} = useAcheivement();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedChapterId, setselectedchapterid] = useState(1);

  const [scoreType, setScoreType] = useState('');
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

  useEffect(() => {
    getMistakes(studentId)
   
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
      <Box>
        <CardHeader
          title={
            <Typography variant="h4" color="orange">
              قائمة التمارين حسب عدد الأخطاء
            </Typography>
          }
        />

        <Box
          container
          // spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box

            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              marginLeft: '10%',
            }}
          >
            <ButtongroupSemester3
     
            buttonProps={{ disabled: isButtonDisabled }}
            onChapterButtonClick={handleChapterButtonClick}
            handleChangeChapterId={handleChangeChapterId}
            handleScoreTypeChange={handleScoreTypeChange}
            />
            <ButtongroupSubject3
       
              onSubjectButtonClick={handleSubjectButtonClick}
              handlegetMistakesbySubject={handlegetMistakesbySubject}
              handleScoreTypeChange={handleScoreTypeChange}
           
            />
             {/* <ButtonPagination
            
           
            /> */}
        
          </Box>


          <Grid>
            <MistakesTable
            scoreType={scoreType}
            />
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
