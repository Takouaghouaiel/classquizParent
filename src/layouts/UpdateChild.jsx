
import React from 'react';
import { Box } from '@mui/material';
import UpdatechildForm from '../components/UpdatechildForm'
import background from '../images/background.png';


  
function UpdateParent() {
 return (

  <Box
sx={{  backgroundImage: `url(${background})`,
  backgroundRepeat: 'repeat',
  backgroundPosition: 'cover',
  backgroundSize: 'cover',
  height: '100vh',
  width: '100%',
  minHeight: '100vh',
  position: 'fixed',
}}
 
  > 
  
   <UpdatechildForm/>

 
</Box>

 )

}
export default UpdateParent;
