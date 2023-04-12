import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './layouts/Loginpage';
import './App.css';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './layouts/Home';
import Children from './layouts/Children';
import Dashboard from './layouts/Dashboard';
import  AuthProvider  from './context/AuthContext';

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
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          </AuthProvider>
        </Router>
      
    </ThemeProvider>
  );
}

export default App;
