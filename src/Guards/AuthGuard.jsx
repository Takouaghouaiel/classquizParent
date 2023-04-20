
import React, { useState, useEffect } from "react";
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthGuard = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkIfUserIsAuthenticated = () => {
      if (!auth.isAuthenticated) {
        // Redirect to login page if user is not authenticated
        navigate('/login');
        console.log(auth.isAuthenticated);
        return false;
      }
      return true;
    };

    const checkAuthentication = () => {
      const isAuthenticated = checkIfUserIsAuthenticated();
      setIsAuthenticated(isAuthenticated);
    };

    checkAuthentication();
  }, [auth.isAuthenticated, navigate]);

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

 // Render the protected component if authenticated
return <Route>{children}</Route>;

};

export default AuthGuard;

// import React from "react";
// import { Navigate, Route, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const AuthGuard = ({ children }) => {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   if (!auth.isAuthenticated) {
//     // Redirect to login page if not authenticated
//     return <Navigate to="/login" />;
//   }

//   // Render the protected component if authenticated
//   return <Route>{children}</Route>;
// };

// export default AuthGuard;


