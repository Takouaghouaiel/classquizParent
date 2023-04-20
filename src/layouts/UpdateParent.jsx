import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import UpdateparentForm from '../components/UpdateparentForm'
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
  
   <UpdateparentForm/>

 
</Box>

 )

}
export default UpdateParent;
