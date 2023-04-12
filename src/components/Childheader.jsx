import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';
import logo from '/src/images/logo.png';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';
const StyleAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 0px 5px #00000059',
  opacity: 1,
});

const Header = ({onToggleDrawer}) => {
  // const toggleDrawer = (isOpen) => (event) => {
  //   if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setOpen(isOpen);
  // };
  const { loginData } = useAuth();
  const fullName = loginData?.user?.fullName;
  return (
    <StyleAppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          // Add a media query for maximum width 768px
          '@media (max-width: 768px)': {
            alignContent: 'space-between',
          },
        }}
      >
        {/* Add a media query for maximum width 768px */}

        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <img src={logo} alt="Logo" width="150" />
        </Box>

        <Typography
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            order: { xs: 2, sm: 'initial' },
          }}
          variant="h6"
          component="div"
          color="black"
        >
          أهلا بعودتك&nbsp;
          <span style={{ color: 'grey' }}>{fullName}</span>
        </Typography>

        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            order: { xs: 3, sm: 'initial' },
          }}
        >
          <Avatar alt="" src="/avatar.png" />
        </Box>
        {/* Add a media query for maximum width 768px */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            order: { xs: 1, sm: 'initial' },
          }}
        >
          <IconButton onClick={onToggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </StyleAppBar>
  );
};

export default Header;
