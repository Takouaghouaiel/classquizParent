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
        <Avatar
          alt="User Avatar"
          sx={{ width: 100, height: 100 }}
          src={student?.avatar?.urlPath}
        />
      ),
    },
    {
      id: 3,
      title: ' Quizo : ' + (student?.quizoId ?? ''),
      icon: (
        <Avatar
          alt="User Quizo"
          sx={{ width: 100, height: 100 }}
          src={QuizoData?.imgUrl}
        />
      ),
    },
  ];
  const scoreitems = [
    {
      id: 1,
      titlle: 'نسبة التميّز',
      iconn: <img src={Star} alt="star" width={50} />,
      progressvalue:
        AcheivementData?.stars % (AcheivementData?.totalExercises * 3),
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
  {/* <MistakeTable /> */}
</Stack>

      </Box>
    
  );
}
export default DashboardAdvancement;
