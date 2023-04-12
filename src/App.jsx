import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './layouts/Loginpage';
import './App.css';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './layouts/Home';
import Children from './layouts/Children';
import Dashboard from './layouts/Dashboard';
import AuthProvider from './context/AuthContext';
import DashboardAchievement from './components/DashboardAchievement'
import DashboardSupport from './components/DashboardSupport'
import DashboardAdvancement  from './components/DashboardAdvancement'
import DashboardBehaviours from './components/DashboardBehaviours';
import DashboardSubscription from './components/DashboardSubscription'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/children" element={<Children />} />
          <Route path="/dashboard" element={<Dashboard />}>
              <Route path="advancement" element={<DashboardAdvancement />} />
              <Route path="achievement" element={<DashboardAchievement />} />
              <Route path="support" element={<DashboardSupport />} />
              <Route path="behaviours" element={<DashboardBehaviours />} />
              <Route path="subscription" element={<DashboardSubscription />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
