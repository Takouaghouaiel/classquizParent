import React from 'react';
import { useAcheivement } from '../context/AcheivementContext';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';

const drawerWidth = 300;

function Sidebar({ handleLogout, isSideBarOpen }) {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const { totalStars, stars, student } = useAcheivement();

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
        sx={{
          height: '100%',
          width: drawerWidth,
          background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-4vh',
          }}
        >
          <Avatar
            alt="User Avatar"
            src={student?.avatar?.urlPath}
            style={{ width: '150px', height: '150px', margin: '20%' }}
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
              <ListItem sx={{ marginTop: '-8vh' }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5' }}
                  primary={student?.fullName}
                  secondaryTypographyProps={{ variant: 'h6', color: 'white' }}
                  secondary={
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginTop: '-1vh',
                      }}
                    >
                      <React.Fragment>
                        {`${stars}/${totalStars}`}
                        <Box sx={{ marginTop: '10%', marginRight: '10%' }}>
                          <StarSvg />
                        </Box>
                      </React.Fragment>
                    </Box>
                  }
                />
              </ListItem>
            </Box>
            <List>
              <ListItem
                button
                sx={{
                  display: 'flex',
                  marginTop: '-5vh',
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
                <NavLink
                  to={`/dashboard/${studentId}/advancement`}
                  activeclassname="active"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItemText
                    primaryTypographyProps={{ variant: 'h5' }}
                    primary="تقدم طفلك"
                  />
                </NavLink>
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
                <NavLink
                  to={`/dashboard/${studentId}/behaviours`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItemText
                    primaryTypographyProps={{ variant: 'h5' }}
                    primary="دراسة السلوك"
                  />
                </NavLink>
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
                <NavLink
                  to={`/dashboard/${studentId}/achievement`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItemText
                    sx={{ paddingLeft: '30%' }}
                    primaryTypographyProps={{ variant: 'h5' }}
                    primary="الإنجازات "
                  />
                </NavLink>
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
                <NavLink
                  to={`/dashboard/${studentId}/subscription`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItemText
                    sx={{ paddingLeft: '30%' }}
                    primaryTypographyProps={{ variant: 'h5' }}
                    primary="العروض "
                  />
                </NavLink>
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
                <NavLink
                  to={`/dashboard/${studentId}/support`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItemText
                    primaryTypographyProps={{ variant: 'h5' }}
                    primary="دعم العملاء"
                  />
                </NavLink>
              </ListItem>
            </List>
            <List>
              <ListItem
                onClick={() => {
                  navigate('/children/');
                }}
              >
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
