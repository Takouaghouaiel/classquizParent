import * as React from 'react';
import CardList from './CardList';
import {Sweets,TimeIcon} from '.././components/icons/sidebaricons';
import cookies from '../images/cookies.png'
import Money from '../images/money.png'
import Star from '../images/star.png'
import Session from '../images/Session.png'
const items = [
  {
    id: 1,
    title: ' مجموع الكعك',
    score:'x',
   icon:<img src={cookies} alt="Cookies" width={50}/>,
    
  },
  {
    id: 2,
    title: 'مجموع الحلوى ',
    score:'x',
    icon:<Sweets />,
  },
  {
    id: 3,
    title: ' مجموع العملات',
    score:'x',
    icon:<img src={Money} alt="Money" width={50}/>,
  },
  {
    id: 4,

    title: ' مجموع االنجوم ',
    score:'x',
    icon:<img src={Star} alt="Star" width={50}/>,
  },
  {
    id: 5,
    title: ' مجموع االتمارين المنجزة ',
    score:'x',
    icon:<img src={Session} alt="Session" width={50}/>,
  },
  {
    id: 6,
    title: '  الوقت الاجمالي ',
    score:'x',
    icon:<TimeIcon/>,
  },
  {
    id: 7,
    title: '  أطول حصة مقضّات',
    score:'x',
    icon:<img src={Session} alt="Session" width={50}/>,
  },
];

function DashboardAchievement() {
  return (
    <div>
      <CardList items={items} />
    </div>
  );
}
export default DashboardAchievement;
