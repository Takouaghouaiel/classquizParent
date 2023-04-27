import * as React from 'react';
import IdentityCards from './IdentityCards';
import Avatar from '@mui/material/Avatar';
import quizo from '../images/quizo.png';
import  Success from '../images/Success.png'
import { useAcheivement } from '../context/AcheivementContext';
function DashboardAdvancement() {

 
  const {  student } = useAcheivement();
  const items = [
    {
      id: 1,
      title: student?.fullName,
      UserId: "المعرف الوحيد : " + (student?.id ?? ""),
      level: "السنة الدراسية : " + (student?.level?.name ?? ""),

    },
    {
      id: 2,
      title: ' Avatar ',
      icon: <Avatar alt="User Avatar" sx={{ width: 100, height:100}} src={student?.avatar?.urlPath} />,
    },
    {
      id: 3,
      title: '  Quizo',
      icon: <Avatar alt="User Avatar" sx={{ width: 100, height:100}} src={quizo} />,
    },

  ];
  const scoreitems = [
    {
     titlle: "Success",
     iconn:<img src={Success} alt="Success" width={40}/>,
     progressvalue:'x',

    },
    {
      titlle: "Success",
      iconn:<img src={Success} alt="Success" width={40}/>,
      progressvalue:'x',
 
     },
   
     {
      titlle: "Success",
      iconn:<img src={Success} alt="Success" width={40}/>,
      progressvalue:'x',
 
     },
   
     {
      titlle: "Success",
      iconn:<img src={Success} alt="Success" width={40}/>,
      progressvalue:'x',
 
     },
   
     {
      titlle: "Success",
      iconn:<img src={Success} alt="Success" width={40}/>,
      progressvalue:'x',
 
     },
   
     {
      titlle: "Success",
      iconn:<img src={Success} alt="Success" width={40}/>,
      progressvalue:'x',
 
     },
    
   

  ];

  return (
    <div>
      <IdentityCards items={items} scoreitems={scoreitems}/>
    </div>
  );
}
export default DashboardAdvancement;
