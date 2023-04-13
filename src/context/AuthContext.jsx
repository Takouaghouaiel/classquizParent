import * as React from 'react';
import { createContext, useState, useContext} from 'react';
import { useNavigate } from 'react-router';
const AuthContext = createContext(null);


export default function AuthProvider({ children }) {
 
  const [PasswordError, setPasswordError] = useState('');
  const [PasswordBorderColor, setPasswordBorderColor] = useState('#707070');
  const [message, setMessage] = useState(''); 
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const navigateTo = useNavigate(); // initialize the navigate function

  const login = async (userTel, password) => {
    try {
      const response = await fetch('https://api.omega.classquiz.tn/v2/auth/login', {
        method: 'POST',
  
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userTel,
          password: password,
        }),
      });
  
      if (response.status === 200) {
       
        const data = await response.json();
        localStorage.setItem('token', data.token.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        //   set data in the apidata so we can use it
        setMessage('Login successful!')
        setLoginData(data);
        setUser(data.user);
        navigateTo('/Children'); // use navigateTo function to redirect
        return 'success';
      } else if (response.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      return 'error';
    }
  };
  // const acheivement = async()=>{
    
  //   const axios = require('axios');

  //   let config = {
  //     method: 'get',
  //     maxBodyLength: Infinity,
  //     url: 'https://api.omega.classquiz.tn/v2/students/112005/achievements',
  //     headers: { 
  //       'Accept': 'application/json', 
  //       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzhhYTU0NzdkYTBmOGI4MmUyZGU0MDNkNTVhNTA1YjMzYWU1MmJlOTUxMGVjNmM4NjdmMzkwMDkzNDA1MGVmZGE5NTc1MjhiNjBkZjczM2UiLCJpYXQiOjE2ODEyOTkyODAuMTg3ODE0LCJuYmYiOjE2ODEyOTkyODAuMTg3ODE4LCJleHAiOjE3MTI5MjE2ODAuMTgzNjU1LCJzdWIiOiI4MDMzMiIsInNjb3BlcyI6W119.NIQ_3qQa0AVb4qIRLD3wB999zv5KYIQIy8zNHPibH1xxkcIb2JaC-ky4cyMoitbfGCPTA76S5_qidf9dwgS4L_BMHCl_gawqPDR6pwzEeUsijNnNy0Rq0DTTLieBpI2yrPhfr4e26hrqNpR963tUJkPwZ2bNykwI4UYvLZaqYvwwXtQRR2NtqCqskXN3jw0bmubrE0o5In-RGP1NrQPulzzF97ORClLwt6Fiq4rM6iytggbwrhy0bpNmrGbvbVhn_UKReSPGI-OuiYnR4YFLzHP0jRaiwuNdHeGDX2is5xz7Fm-ZBiskvus368-db41Br_ueL6rnFiu8m4yL_IhgkP8JU0ip1wQgwtod_PyGaYRYH9mxhI9TWUgb9Qma2XTtTT9Sm1oFA9zL8o-ahH9hyDYXXXdFT_F2QfU1IB6xtQ1lkCrijcXKbY9cTGwX5JejtLjN4JKXbE-jkip52LHNyJ5DP9b6Anar9hjrzfKxIpjtsRUfNx1dSpBbTJAY_lJHrXfQeFBX3ezToKDj2YI57JhBmObi2Rmsa8NC83P_vls7lyALu7Q4QxMb_SIs7oiUpyyf2EK420JJVXJwNp6mGmGtk9bNJhvsYK5LDdskdBUM_wROz4DDSGUyWOVsDEn995cT7Ij1uEh7H3N_yn4boiO3NaLBPS2OXlJryUlDTKo'
  //     }
  //   };
    
  //   axios.request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
    
  // }

  return (
    <AuthContext.Provider
      value={{
        setLoginData,
        loginData,
        user,
        setUser,
        login,
        navigateTo,
        PasswordError,
        setPasswordError,
        PasswordBorderColor,
        setPasswordBorderColor,
        setMessage,
        message,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
