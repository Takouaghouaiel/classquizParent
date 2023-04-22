import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';
import logo from '/src/images/logo.png';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from 'react-router-dom';

const StyleAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 0px 5px #00000059',
  opacity: 1,
});
const useStyles = makeStyles(theme => ({
  avatar: {
    cursor: 'pointer',
  },
}));

const Header = ({ onToggleDrawer }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  
  const { loginData,logout } = useAuth();
  const fullName = loginData?.user?.fullName;



  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async() => {
    try {
      await logout();
 
     
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Logout clicked');
    handleMenuClose();
  };

  const handleparentUpdate = () => {
    navigate('/UpdateParent/');

    handleMenuClose();
  };

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
          <Avatar
            className={classes.avatar}
            alt="User Avatar"
            src="avatar.jpg"
            onClick={handleMenuOpen}
          />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleparentUpdate}>إعدادات الحساب</MenuItem>

            <MenuItem 
            onClick={handleLogout} 
            sx={{ color: 'red' }}>
              تسجيل الخروج
            </MenuItem>
          </Menu>
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
