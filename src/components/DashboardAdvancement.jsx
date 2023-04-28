import * as React from 'react';
import IdentityCards from './IdentityCards';
import { Box, Stack } from '@mui/material';
import Subjectadvancement from './Subjectadvancement';
import TrackingCharts from './TrackingCharts'
import Avatar from '@mui/material/Avatar';
import quizo from '../images/quizo.png';
import Star from '../images/star.png'
import Progressicon from '../images/Progressicon.png';
import { useAcheivement } from '../context/AcheivementContext';
function DashboardAdvancement() {
  const { student } = useAcheivement();
  const items = [
    {
      id: 1,
      title: student?.fullName,
      UserId: 'المعرف الوحيد : ' + (student?.id ?? ''),
      level: 'السنة الدراسية : ' + (student?.level?.name ?? ''),
    },
    {
      id: 2,
      title: ' Avatar ',
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
      title: '  Quizo',
      icon: (
        <Avatar
          alt="User Avatar"
          sx={{ width: 100, height: 100 }}
          src={quizo}
        />
      ),
    },
  ];
  const scoreitems = [
    {
      id: 1,
      titlle: 'نسبة التميّز',
      iconn:<img src={Star} alt="star" width={50}/>,
      progressvalue: '60%',
    },
    {
      id: 2,
      titlle: 'نسبة التّقدّم',
      iconn: <img src={Progressicon} alt="Success" width={50} />,
      progressvalue: '60%',
    },

 
  ];

  return (
    <Box>
      <IdentityCards items={items} scoreitems={scoreitems} />
      <Stack
        sx={{ display: 'flex', flexDirection: 'col', alignItems: 'center' ,justifyContent:'space-between' }}
      >
        <Subjectadvancement />
        <TrackingCharts/>
      </Stack>
    </Box>
  );
}
export default DashboardAdvancement;
