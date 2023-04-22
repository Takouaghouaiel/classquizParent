import * as React from 'react';
import IdentityCards from './IdentityCards';
import Avatar from '@mui/material/Avatar';
function DashboardAdvancement() {
  const items = [
    {
      id: 1,
      title: '  foulen fouleni',
      UserId: 'x',
      LevelofStudy: 'x',

    },
    {
      id: 2,
      title: ' Avatar ',
      // icon: <Avatar alt="User Avatar" src={student?.avatar?.urlPath} />,
    },
    {
      id: 3,
      title: '  Quizo',
      // icon: <Avatar alt="User Avatar" src={student?.quizo?.urlPath} />,
    },
  ];

  return (
    <div>
      <IdentityCards items={items} />
    </div>
  );
}
export default DashboardAdvancement;
