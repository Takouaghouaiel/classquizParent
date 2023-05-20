import React, { useState } from 'react';
import background from '../images/background.png';
import Childheader from '../components/Childheader';
import Sidebar from '../components/Sidebar';
import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAcheivement } from '../context/AcheivementContext';
import { useParams } from 'react-router-dom';
function Dashboard() {
  
  
  const {getQuizo,getStates,getLastAchievement,getStudentDetails,getSubjects,getChapter}= useAcheivement();
  const { studentId } = useParams();
  useEffect(() => {
    getStudentDetails(studentId);
    getLastAchievement(studentId);
    getQuizo(studentId);
    getStates(studentId);
    getSubjects(studentId);
    getChapter();
   
  }, []);

  const [isDrawerOpen, toggleDrawer] = useState(false);

  const handleDrawerToggle = () => {
    toggleDrawer(prevState => !prevState);
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'cover',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          minHeight: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto',
        }}
      >
        <Stack sx={{ display: 'flex', minHeight: '100vh' }}>
          <Childheader  onToggleDrawer={handleDrawerToggle} />
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: '100vh' }}>
              <Outlet />
            </Box>
            <Sidebar  isSideBarOpen={isDrawerOpen} />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Dashboard;
