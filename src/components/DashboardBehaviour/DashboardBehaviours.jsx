import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Stack} from '@mui/material';
import smart from '../../images/smart.png';
import observe from '../../images/observe.png';
import communicate from '../../images/communicate.png';
import { useParams } from 'react-router-dom';
import SmartQuiz from './SmartQuiz';
import DifQuiz from './DifQuiz';
// import InterestQuiz from './InterestQuiz';
import axios from 'axios';
import QuizResult from './QuizResult';
export default function DashboardBehaviours() {
  const { studentId } = useParams();
  const [QuizType, setQuizType] = useState(null);
  // const [ResultisVisible, setResultIsVisible] = useState(false);

  useEffect(() => {
    const fetchQuizType = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `https://api.omega.classquiz.tn/v2/student/${studentId}/quiz`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data;
          setQuizType(data);
          // console.log('Quiz Type:', data);
        } else if (response.status === 401) {
          throw new Error('Failure getChapter');
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuizType();
  }, [studentId]);

  const [selectedQuizId, setSelectedQuiz] = useState(null);

  const handleQuizCardClick = quizId => {
    setSelectedQuiz(quizId);
    // setResultIsVisible(true);
  };

  let selectedQuizComponent = null;

  switch (selectedQuizId) {
    case 1:
      selectedQuizComponent = <SmartQuiz />;
      break;
    case 2:
      selectedQuizComponent = <DifQuiz />;
      break;

    case 3:
      // selectedQuizComponent = <InterestQuiz />;
      break;

    default:
      break;
  }

  if (selectedQuizComponent) {
    return selectedQuizComponent;
  }
  return (
    <Stack
      
      spacing={3}
      style={{  textAlign: 'center' }}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      marginTop="10%"
    
     
    >
      <Grid item xs={12} sm={12}>
        <Card sx={{ maxWidth: 400, backgroundColor: '#FFC800' }}>
          <CardActionArea onClick={() => handleQuizCardClick(1)}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h5"
                component="div"
                color="white"
                padding="5%"
                sx={{ ml: 2 }}
              >
                {QuizType?.[0]?.description}
              </Typography>
              <img src={smart} alt="smart" width={190} height={110} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card sx={{ maxWidth: 400, backgroundColor: '#CB55D7' }}>
          <CardActionArea onClick={() => handleQuizCardClick(2)}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                padding="5%"
              >
                {QuizType?.[1]?.description}{' '}
              </Typography>
              <img src={observe} alt="observe" width={140} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card sx={{ maxWidth: 400, backgroundColor: '#67D5D7' }}>
          <CardActionArea onClick={() => handleQuizCardClick(3)}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                padding="5%"
              >
                {QuizType?.[2]?.description}{' '}
              </Typography>
              <img src={communicate} alt="communicate" width={150} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid>
{/* {ResultisVisible && <QuizResult />} */}
<QuizResult/>
</Grid>
    </Stack>

  );
}
