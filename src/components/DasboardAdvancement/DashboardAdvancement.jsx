import * as React from 'react';
import IdentityCards from './IdentityCards';
import { Box, Stack } from '@mui/material';
import Subjectadvancement from './Subjectadvancement';
import TrackingCharts from './TrackingCharts';
import MistakeTable from './MistakeTable.jsx';
import Lastachievement from './Lastachievement';
import Avatar from '@mui/material/Avatar';
import Star from '../../images/star.png';
import Progressicon from '../../images/Progressicon.png';
import { useAcheivement } from '../../context/AcheivementContext';
import { useParams } from 'react-router-dom';
function DashboardAdvancement() {
  const { student, QuizoData, AcheivementData } = useAcheivement();

  const items = [
    {
      id: 1,
      title: student?.fullName,
      UserId: student?.id,
      level: student?.level?.name,
      subscription: student?.subscription?.ActivePack?.name,
    },
    {
      id: 2,
      title: ' Avatar : ' + (student?.id ?? ''),

      icon: (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
          <img
             alt="User Avatar"
            width='30%'
            src={student?.avatar?.urlPath}
          />
        </div>
      ),

    },
    {
      id: 3,
      title: ' Quizo : ' + (student?.quizoId ?? ''),
      icon: (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
          <img
            alt="User Quizo"
            width='30%'
            src={QuizoData?.imgUrl}
          />
        </div>
      ),
    },
  ];
  const scoreitems = [
    {
      id: 1,
      titlle: 'نسبة التميّز',
      iconn: <img src={Star} alt="star" width={50} />,
      progressvalue:
        ((AcheivementData?.stars) % (AcheivementData?.totalExercises * 3))%100,
    },
    {
      id: 2,
      titlle: 'نسبة التّقدّم',
      iconn: <img src={Progressicon} alt="Success" width={50} />,
      progressvalue: (
        (AcheivementData?.totalExercises /
          AcheivementData?.totalLevelExercises) *
          100 || 0
      ).toFixed(2),
    },
  ];

  return (
      <Box>
      <IdentityCards items={items} scoreitems={scoreitems} />
      <Stack
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%',
    '& > *': {
      marginBottom: '2rem' // Add margin bottom to all direct children
    }
  }}
>
  <Lastachievement />
  <Subjectadvancement />
  <TrackingCharts />
  <MistakeTable />
</Stack>

      </Box>
    
  );
}
export default DashboardAdvancement;
