import * as React from 'react';
import CardList from './CardList';
import {Sweets,TimeIcon} from '.././components/icons/sidebaricons';
import cookies from '../images/cookies.png'
import Money from '../images/money.png'
import Star from '../images/star.png'
import Session from '../images/Session.png';
import { useEffect } from 'react';
import { useAcheivement } from '../context/AcheivementContext';



function DashboardAchievement() {
 
  const { AcheivementData } = useAcheivement();
  const stars = AcheivementData?.stars;
  const totalExercises =AcheivementData?.totalExercises;
  const coins =AcheivementData?.coins;
  const donuts =AcheivementData?.donuts;
  const totalTime=AcheivementData?.totalTime;
  const cakes=AcheivementData?.cakes;


 
  const items = [
    {
      id: 1,
      title: ' مجموع الكعك',
      score: donuts,
     icon:<img src={cookies} alt="Cookies" width={50}/>,
      
    },
    {
      id: 2,
      title: 'مجموع الحلوى ',
      score: cakes,
      icon:<Sweets />,
    },
    {
      id: 3,
      title: ' مجموع العملات',
      score: coins,
      icon:<img src={Money} alt="Money" width={50}/>,
    },
    {
      id: 4,
  
      title: ' مجموع االنجوم ',
      score: stars,
      icon:<img src={Star} alt="Star" width={50}/>,
    },
    {
      id: 5,
      title: ' مجموع االتمارين المنجزة ',
      score: totalExercises,
      icon:<img src={Session} alt="Session" width={50}/>,
    },
    {
      id: 6,
      title: 'الوقت الاجمالي',
      score: `${totalTime} دقيقة `,
      icon: <TimeIcon />,
    },
    
    {
      id: 7,
      title: '  أطول حصة مقضّات',
      score: 'x',
      icon:<img src={Session} alt="Session" width={50}/>,
    },
  ];
  return (
    <div>
      <CardList items={items} />
    </div>
  );
}
export default DashboardAchievement;
