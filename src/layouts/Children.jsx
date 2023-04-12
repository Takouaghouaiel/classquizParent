import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Childheader from '../components/Childheader';
import Childlist from '../components/Childlist';
import background from '../images/background.png';

export default function Children() {
  const [children, setChildren] = useState([]);
  useEffect(function () {
  
   let token= localStorage.getItem('token')
   console.log('ici token',token)
   var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer " +token)
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.omega.classquiz.tn/v2/students", requestOptions)
  .then(response => response.json())
  
  .then(result => setChildren(result))
  .catch(error => console.log('error', error));

  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Childheader />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Childlist childrenList={children} />
        
      </Box>
    </Box>
  );
}
