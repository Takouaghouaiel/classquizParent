import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './layouts/Loginpage';
import './App.css';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AuthGuard from './Guards/AuthGuard';
import Children from './layouts/Children';
import Dashboard from './layouts/Dashboard';
import AuthProvider from './context/AuthContext';
import AcheivementProvider from './context/AcheivementContext';
import DashboardAchievement from './components/DashboardAchievement';
import DashboardSupport from './components/DashboardSupport';
import DashboardAdvancement from './components/DasboardAdvancement/DashboardAdvancement';
import DashboardBehaviours from './components/DashboardBehaviour/DashboardBehaviours';
import DashboardSubscription from './components/DashboardSubscription';
import UpdateParent from './layouts/UpdateParent';
import Addchild from './layouts/addchild';
import GuestGuard from './Guards/GuestGuard';
import SmartQuiz from './components/DashboardBehaviour/SmartQuiz';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* <Router> */}
      <AuthProvider>
        <AcheivementProvider>
          <Routes>
            <Route
              path="/login"
              element={
                <GuestGuard>
                  <Login />
                </GuestGuard>
              }
            />

            <Route path="UpdateParent" element={<UpdateParent />} />
            <Route path="add-child" element={<Addchild />} />
            <Route path="smartquiz" element={<SmartQuiz />} />
            {/* Use AuthGuard to protect routes that require authentication */}
            <Route
              path="/children"
              element={
                <AuthGuard>
                  <Children />
                </AuthGuard>
              }
            />

            <Route path="/dashboard/:studentId" element={<Dashboard />}>
              <Route path="advancement" element={<DashboardAdvancement />} />

              <Route path="achievement" element={<DashboardAchievement />} />

              <Route path="support" element={<DashboardSupport />} />

              <Route path="behaviours" element={<DashboardBehaviours />} />


              <Route path="subscription" element={<DashboardSubscription />} />
            </Route>
          </Routes>
        </AcheivementProvider>
      </AuthProvider>
      {/* </Router> */}
    </ThemeProvider>
  );
}

export default App;
