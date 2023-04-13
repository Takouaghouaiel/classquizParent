import React, { useState } from 'react';
import Childheader from '../components/Childheader';
import Sidebar from '../components/Sidebar';
import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAcheivement } from '../context/AcheivementContext';
import { useParams } from 'react-router-dom';
function Dashboard() {
  const { getStudentDetails } = useAcheivement();

  const {studentId} =  useParams()
  useEffect(()=>{
    getStudentDetails(studentId)
     },[])

  const [isDrawerOpen, toggleDrawer] = useState(false);

  const handleDrawerToggle = () => {
   toggleDrawer((prevState) => !prevState)
  }
  return (
    <>
      <Stack sx={{ display: 'flex', minHeight: '100vh' }}>
        <Childheader onToggleDrawer={handleDrawerToggle} /> 
        <Box sx={{ display: 'flex', flex: 1, width: '100%', flexDirection: 'row' }}>
         <Box sx={{flex: 1}}>

         <Outlet />
         </Box>
          <Sidebar isSideBarOpen={isDrawerOpen} />
        </Box>
      </Stack>
    </>
  );
}

export default Dashboard;
