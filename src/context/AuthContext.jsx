import * as React from 'react';
import { createContext, useState, useContext} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
const AuthContext = createContext(null);


export default function AuthProvider({ children }) {
 
  const [PasswordError, setPasswordError] = useState('');
  const [PasswordBorderColor, setPasswordBorderColor] = useState('#707070');
  const [message, setMessage] = useState(''); 
  const [user, setUser] = useState(null);
  const [Child, setChild] = useState(null);
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

  const logout = async () => {
    try {
      const token =localStorage.getItem('token')
      const response = await fetch('https://api.omega.classquiz.tn/v2/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer`+token // add the access token to the header
        }
      });
  
      if (response.status === 200) {
       // remove token from local storage
        localStorage.removeItem('token'); 
        localStorage.removeItem('user');
        navigateTo('/login/');
        window.location.reload(); 
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const refreshState = (updatedUser,updatedChild)=>{
    localStorage.setItem('user', JSON.stringify(updatedUser))
    localStorage.setItem('child',JSON.stringify(updatedChild))
    setChild(updatedChild)
    setUser(updatedUser)
  
  }
  React.useEffect(()=>{
    const connectedUser = JSON.parse(localStorage.getItem('user'))
    setUser(connectedUser) ; 
    const currentChild = JSON.parse(localStorage.getItem('child'))
    setUser(currentChild) ; 
   
  },[])

  return (
    <AuthContext.Provider
      value={{
        logout,
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
        refreshState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
