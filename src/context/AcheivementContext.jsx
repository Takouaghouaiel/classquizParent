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
  const [lastUnlockedRewardData, setlastUnlockedRewardData] = useState([]);
  const [QuizoData, setQuizoData] = useState(null);
  const [States, setStates] = useState(null);
  const [Subjects, setSubjects] = useState(null);
  const [Chapter, setChapter] = useState(null);
  const [StatesbySubjects, setStatesbySubjects] = useState(null);
  const [StatesbySubjectsANDChapiter, setStatesbySubjectsANDChapiter] =
    useState(null);
  const [ProgressbySubjects, setProgressbySubjects] = useState(null);
  const [ProgressbySubjectsANDChapiter, setProgressbySubjectsANDChapiter] =
    useState(null);
  const [CurrentMistakes,setMistakes]=useState(null);
  const [MistakesbySubject, setMistakesbySubject] = useState(null);
  const [MistakesbySubjectsANDChapiter, setStatesbyMistakesANDChapiter] =
    useState(null);
  const[Progress,setProgress]=useState(null)

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
        localStorage.setItem('child', JSON.stringify(data));
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

  const getLastAchievement = async studentId => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' +
          studentId +
          '/reward-categories/last',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setlastUnlockedRewardData(data);

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
  const getQuizo = async studentId => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `https://api.omega.classquiz.tn/v2/students/${studentId}/quizo`,
        {},
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setQuizoData(data);

        return 'success quizo';
      } else if (response.status === 401) {
        throw new Error('Failure quizo');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getStates = async studentId => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' + studentId + '/stats',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setStates(data);

        return 'success states';
      } else if (response.status === 401) {
        throw new Error('Failure states');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getSubjects = async studentId => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' + studentId + '/subjects',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setSubjects(data);

        return 'success statesbysubject';
      } else if (response.status === 401) {
        throw new Error('Failure states');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getChapter = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/chapter-types',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setChapter(data);

        return 'success getChapter';
      } else if (response.status === 401) {
        throw new Error('Failure getChapter');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };


  
  const getStatesbySubjects = async (studentId, selectedSubjectId) => {
    // console.log("Executing getStatesbySubjects function");
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' +
          studentId +
          '/subjects/' +
          selectedSubjectId +
          '/stats',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setStatesbySubjects(data);

        return 'success statesbysubject';
      } else if (response.status === 401) {
        throw new Error('Failure states');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getStatesbySubjectsANDChapiter = async (
    studentId,
    selectedSubjectId,
    selectedChapterId
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' +
          studentId +
          '/subjects/' +
          selectedSubjectId +
          '/chapter-types/' +
          selectedChapterId +
          '/stats',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setStatesbySubjectsANDChapiter(data);

        return 'success statesbysubject and chapter';
      } else if (response.status === 401) {
        throw new Error('Failure states');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const getMistakes = async (studentId) => {


    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' +
          studentId +
          '/mistakes',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data.data;
        setMistakes(data);
   
        return 'success mistakes';
      } else if (response.status === 401) {
        throw new Error('Failure mistakes');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMistakesbySubjects = async (studentId, selectedSubjectId) => {
    console.log(
      'Executing getMistakesbySubjects function with studentId:',
      studentId,
      'selectedSubjectId',
      selectedSubjectId
    );

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' +
          studentId +
          '/subjects/' +
          selectedSubjectId +
          '/mistakes',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data.data;
        setMistakesbySubject(data);

        return 'success mistakesbysubject';
      } else if (response.status === 401) {
        throw new Error('Failure mistakes');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMistakesbySubjectsANDChapiter = async (
    studentId,
    selectedSubjectId,
    selectedChapterId
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://api.omega.classquiz.tn/v2/students/' +
          studentId +
          '/subjects/' +
          selectedSubjectId +
          '/chapter-types/' +
          selectedChapterId +
          '/mistakes',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data.data;
        setStatesbyMistakesANDChapiter(data);

        return 'success statesbysubject and chapter';
      } else if (response.status === 401) {
        throw new Error('Failure states');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getProgressbySubjectsANDChapiter = async (
    studentId,
    selectedSubjectId,
    selectedChapterId,
    startDate,
    endDate
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://api.omega.classquiz.tn/v2/students/${studentId}/subjects/${selectedSubjectId}/chapter-types/${selectedChapterId}/progress?start_date=${startDate}&end_date=${endDate}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setProgressbySubjectsANDChapiter(data);
        return 'success progressbysubject and chapter';
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProgressbySubjects = async (
    studentId,
    selectedSubjectId,
    startDate,
    endDate
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://api.omega.classquiz.tn/v2/students/${studentId}/subjects/${selectedSubjectId}/progress?start_date=${startDate}&end_date=${endDate}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setProgressbySubjects(data);
        return 'success progressbysubject and chapter';
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const getProgress = async (studentId, startDate, endDate) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://api.omega.classquiz.tn/v2/students/${studentId}/progress?start_date=${startDate}&end_date=${endDate}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setProgress(data);
        return 'success progress and chapter';
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteChild = async (studentId,password) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `https://api.omega.classquiz.tn/v2/students/${studentId}/delete`,{
          method: 'DELETE',
        
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            password: 3113,
          }),
        }
      );
      if (response.status === 200) {
        const data = response.data;

    
      } else if (response.status === 401) {
        throw new Error('Failure DeleteChild');
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
        QuizoData,
        getQuizo,
        achievements,
        AcheivementData,
        setAcheivementData,
        student,
        getStudentDetails,
        lastUnlockedRewardData,
        getLastAchievement,
        getStates,
        getSubjects,
        States,
        getSubjects,
        Subjects,
        getStatesbySubjects,
        StatesbySubjects,
        getStatesbySubjectsANDChapiter,
        StatesbySubjectsANDChapiter,
        Chapter,
        getChapter,
        getMistakesbySubjects,
        MistakesbySubject,
        getProgressbySubjectsANDChapiter,
        ProgressbySubjectsANDChapiter,
        ProgressbySubjects,
        getProgressbySubjects,
        getMistakesbySubjectsANDChapiter,
        CurrentMistakes,
        getMistakes,
        MistakesbySubjectsANDChapiter,
        Progress,
        getProgress,
        DeleteChild,
      }}
    >
      {children}
    </AcheivementContext.Provider>
  );
}

export const useAcheivement = () => useContext(AcheivementContext);
