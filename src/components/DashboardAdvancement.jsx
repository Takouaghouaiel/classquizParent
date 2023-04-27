import * as React from 'react';
import IdentityCards from './IdentityCards';
import { Box, Stack } from '@mui/material';
import Subjectadvancement from './Subjectadvancement';
import Avatar from '@mui/material/Avatar';
import quizo from '../images/quizo.png';
import Success from '../images/Success.png';
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
      titlle: 'Success',
      iconn: <img src={Success} alt="Success" width={40} />,
      progressvalue: 'x',
    },
    {
      id: 2,
      titlle: 'Success',
      iconn: <img src={Success} alt="Success" width={40} />,
      progressvalue: 'x',
    },

    {
      id: 3,
      titlle: 'Success',
      iconn: <img src={Success} alt="Success" width={40} />,
      progressvalue: 'x',
    },

    {
      id: 4,
      titlle: 'Success',
      iconn: <img src={Success} alt="Success" width={40} />,
      progressvalue: 'x',
    },

    {
      id: 5,
      titlle: 'Success',
      iconn: <img src={Success} alt="Success" width={40} />,
      progressvalue: 'x',
    },

    {
      id: 6,
      titlle: 'Success',
      iconn: <img src={Success} alt="Success" width={40} />,
      progressvalue: 'x',
    },
  ];

  return (
    <Box>
      <IdentityCards items={items} scoreitems={scoreitems} />
      <Stack
        sx={{ display: 'flex', flexDirection: 'col', alignItems: 'center' }}
      >
        <Subjectadvancement />
      </Stack>
    </Box>
  );
}
export default DashboardAdvancement;
