import * as React from 'react';
import { createContext, useState, useContext} from 'react';
import { useNavigate } from 'react-router';
const AuthContext = createContext(null);
import axios from 'axios';

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
        navigateTo('/Children'); // use navigateTo function to redirect
        const data = await response.json();
        localStorage.setItem('token', data.token.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        //   set data in the apidata so we can use it
        setMessage('Login successful!')
        setLoginData(data);
        setUser(data.user);
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
