import { Card, CardContent, Typography } from '@mui/material';
import { useAcheivement } from '../../context/AcheivementContext';
import Session from '../../images/Session.png';
import Exercice from '../../images/Exercice.png';
import Mistake from '../../images/Mistake.png';
import Progressicon from '../../images/Progressicon.png';

const SecondCardContent = ({ icon, score }) => {
    return (
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          textAlign: 'center',
          color: 'white',
        }}
      > 
        {icon}
        <Typography sx={{ color: '#3BC5CA' }}>{score}</Typography>
      </CardContent>
    );
  };

function chunk(array, size) {
    return array.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  }
  
export default function SubjectCards() {
    const { AcheivementData,States } = useAcheivement();
   
  const cards = [
    {
        id:1,
        title: '  الأسئلة المنجزة',
        score:States?.nbCompletedQuestions,
        icon:<img src={Session} alt="Session" width={40}/>,
     
      },
      {
        id:2,
        title: '  التمارين المنجزة',
        score:AcheivementData?.totalExercises,
        icon:<img src={Exercice} alt="Session" width={45}/>,
        
      },
    {
      id:3,
      title: '    الأخطاء المرتكبة',
      score:States?.nbMistakes,
      icon:<img src={Mistake} alt="Session" width={50}/>,
    },
    {
      id:4,
      title:'  الإجابات الممتازة',
      score:States?.excellentResponses,
      icon:<img src={Progressicon} alt="Session" width={50}/>,
    
    },
  
  ];
    const pairs = chunk(cards, 2); // utility function to group cards into pairs
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2%',width: '25%',height:'20%' }}>
        {pairs.map((pair, index) => (
          <div key={index} style={{ display: 'flex', gap: '2%', marginBottom: '2%' }}>
            {pair.map((card, i) => (
              <Card key={i} sx={{ maxWidth: 180,maxHeight: 180 }}>
               
                <CardContent
                 sx={{
                    display: 'flex',
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div"  sx={{ color: 'white' }}>
                    {card.title}
                  </Typography>
                 
                </CardContent>
                <SecondCardContent icon={card.icon} score={card.score} />
              </Card>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
