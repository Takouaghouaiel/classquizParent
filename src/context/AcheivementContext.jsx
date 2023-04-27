import * as React from 'react';
import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AcheivementContext = createContext(null);
export default function AcheivementProvider({ children }) {
  const [AcheivementData, setAcheivementData] = useState(null);
  const [totalExercises, settotalExercises] = useState(0);
  const [donuts, setdonuts] = useState(0);
  const [coins, setcoins] = useState(0);
  const [cakes, setcakes] = useState(0);
  const [stars, setStars] = useState(0);
  const [totalStars, settotalStars] = useState(0);
  const [totalTime, settotalTime] = useState(0);
  const [student, setStudent] = useState(null);

  const getStudentDetails = async studentId => {
    const token = localStorage.getItem('token');

    axios
      .get(`https://api.omega.classquiz.tn/v2/students/${studentId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        setStudent({
          ...res.data,
        });
       
      
      })
      .catch(err => {
        console.log(err);
      });
    achievements(studentId);
  };
  const achievements = async studentId => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' +
          studentId +
          '/achievements',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;

        setAcheivementData(data);
        setStars(data.stars);
        settotalStars(data.totalStars);
        settotalExercises(data.totalExercises);
        setdonuts(data.donuts);
        setcakes(data.cakes);
        setcoins(data.coins);
        settotalTime(data.totalTime);

        // console.log(response.data);
        return 'success Acheivement';
      } else if (response.status === 401) {
        throw new Error('Failure Acheivement');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AcheivementContext.Provider
      value={{
        totalExercises,
        donuts,
        coins,
        cakes,
        stars,
        totalStars,
        totalTime,
        achievements,
        AcheivementData,
        setAcheivementData,
        student,
        getStudentDetails,
      }}
    >
      {children}
    </AcheivementContext.Provider>
  );
}

export const useAcheivement = () => useContext(AcheivementContext);
