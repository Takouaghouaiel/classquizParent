import React from "react";
import { AppBar, Toolbar, Typography, Avatar,Box } from '@mui/material';
import logo from "/src/images/logo.png"
import styled from '@emotion/styled'
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyleAppBar = styled(AppBar)({
    backgroundColor: '#FFFFFF', boxShadow: '0px 0px 5px #00000059', opacity: 1,
})

const Header = () => {
  return (
    <StyleAppBar position="static">
      <Toolbar
       sx={{
       display: 'flex',
       justifyContent: 'space-between' ,
       alignItems:'center',
       
       // Add a media query for maximum width 768px
       '@media (max-width: 768px)': {
        alignContent:'space-between',
      },
      
       }}>
           {/* Add a media query for maximum width 768px */}

        <Box sx={{ display: { xs: 'none', sm: 'flex' }}}>
          <img src={logo} alt="Logo" width="150" />
        </Box>

          <Typography sx={{ display: { xs: 'flex', sm: 'flex' },order: { xs: 2, sm: 'initial' }}} 
          variant="h6" component="div" color="black">
          أهلا بعودتك
          {/* {username} */}
          </Typography>

          <Box
           sx={{
            display: { xs: 'flex', sm: 'flex' },order: { xs: 3, sm: 'initial' }   
          }}
          >
        <Avatar alt="User Avatar" src="/avatar.png" />
        </Box>
         {/* Add a media query for maximum width 768px */}
      <Box sx={{ display: { xs: 'block', sm: 'none'},order: { xs: 1, sm: 'initial' } } }>
        <IconButton>
          <MenuIcon />
        </IconButton>
       
      </Box>
      </Toolbar>
      
    </StyleAppBar>
  );
};

export default Header;
