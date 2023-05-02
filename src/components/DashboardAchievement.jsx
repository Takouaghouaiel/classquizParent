import * as React from 'react';
import CardList from './CardList';
import {Sweets,TimeIcon} from '.././components/icons/sidebaricons';
import cookies from '../images/cookies.png'
import Money from '../images/money.png'
import Star from '../images/star.png'
import Session from '../images/Session.png';
import Exercice from '../images/Exercice.png';
import { useAcheivement } from '../context/AcheivementContext';



function DashboardAchievement() {
 
  const { AcheivementData } = useAcheivement();
  const { stars, totalExercises, coins, donuts, totalTime, cakes } = AcheivementData || {};



 
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
  
      title: ' مجموع النجوم ',
      score: stars,
      icon:<img src={Star} alt="Star" width={50}/>,
    },
    {
      id: 5,
      title: ' مجموع التمارين المنجزة ',
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
      title:'المحاور المنجزة',
      score:AcheivementData?.finishedChapters,
      icon:<img src={Exercice} alt="Session" width={50}/>,
    },
  ];
  return (
    <div>
      <CardList items={items} />
    </div>
  );
}
export default DashboardAchievement;
