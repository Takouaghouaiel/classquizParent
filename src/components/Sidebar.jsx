import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Box, ListItemSecondaryAction, Stack } from '@mui/material';
import {
  InjezIcon,
  StarSvg,
  ExitIcon,
  ContactIcon,
  UnderstandingIcon,
  ChildProgressIcon,
  Subscription,
} from '.././components/icons/sidebaricons';
import '../fonts/fonts.css';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
    // where the content is displayed
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(8),
  },
}));

function Sidebar({ handleLogout, isSideBarOpen }) {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: isSideBarOpen
          ? 'flex'
          : {
              xs: 'none',
              sm: 'flex',
            },
            width: 300,
      }}
    >
      <Stack 
        sx={{height: '100%',
        width: drawerWidth,
        background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)', color:'white'}}
      >
        <Box className={classes.toolbar}>
          <Avatar
            alt="User Avatar"
            src="/static/images/avatar/1.jpg"
            className={classes.avatar}
          />
        </Box>
        <Box dir="rtl">
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box sx={{ alignSelf: 'center' }}>
              <ListItem>
                <div sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemText
                    primaryTypographyProps={{ variant: 'h6' }}
                    primary="foulen fouleni"
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                    secondary="80/100"
                  />
                  <ListItemSecondaryAction
                    sx={{ marginTop: '11%', marginRight: '30%' }}
                  >
                    <StarSvg />
                  </ListItemSecondaryAction>
                </div>
              </ListItem>
            </Box>
            <List>
              <ListItem
                button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  '&:hover': {
                    background:
                      'linear-gradient(to bottom right, #a0e9ea, #5ae0e4)',
                    cursor: 'pointer',
                  },
                }}
              >
                <ListItemIcon>
                  <ChildProgressIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5' }}
                  primary="تقدم طفلك"
                  sx={{ paddingLeft: '25%' }}
                />
              </ListItem>

              <ListItem
                button
                sx={{
                  '&:hover': {
                    background:
                      'linear-gradient(to bottom right, #a0e9ea, #5ae0e4)',
                    cursor: 'pointer',
                  },
                }}
              >
                <ListItemIcon>
                  <UnderstandingIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5' }}
                  primary="دراسة السلوك"
                  sx={{ paddingLeft: '25%' }}
                />
              </ListItem>

              <ListItem
                button
                sx={{
                  '&:hover': {
                    background:
                      'linear-gradient(to bottom right, #a0e9ea, #5ae0e4)',
                    cursor: 'pointer',
                  },
                }}
              >
                <ListItemIcon>
                  <InjezIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ paddingLeft: '30%' }}
                  primaryTypographyProps={{ variant: 'h5' }}
                  primary="الإنجازات "
                />
              </ListItem>
              <ListItem
                button
                sx={{
                  '&:hover': {
                    background:
                      'linear-gradient(to bottom right, #a0e9ea, #5ae0e4)',
                    cursor: 'pointer',
                  },
                }}
              >
                <ListItemIcon>
                  <Subscription />
                </ListItemIcon>
                <ListItemText
                  sx={{ paddingLeft: '30%' }}
                  primaryTypographyProps={{ variant: 'h5' }}
                  primary="العروض "
                />
              </ListItem>

              <ListItem
                button
                sx={{
                  '&:hover': {
                    background:
                      'linear-gradient(to bottom right, #a0e9ea, #5ae0e4)',
                    cursor: 'pointer',
                  },
                }}
              >
                <ListItemIcon>
                  <ContactIcon />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5' }}
                  primary="دعم العملاء"
                  sx={{ paddingLeft: '25%' }}
                />
              </ListItem>
            </List>
            <List>
              <ListItem onClick={handleLogout}>
                <ListItemIcon>
                  <ExitIcon />
                </ListItemIcon>
              </ListItem>
            </List>
          </List>
        </Box>
      </Stack>
    </Box>
  );
}

export default Sidebar;
