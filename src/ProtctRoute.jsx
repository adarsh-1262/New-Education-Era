import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const {user} = useAuth()
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to login page if not authenticated
    return <Navigate to="/signup" replace />;
  }

  const isDashboardRoute = location.pathname.includes('/dashboard');
  if(isDashboardRoute) {
    const pathUserType = location.pathname.split('/')[1];
    if (!user || user.userType !== pathUserType) {
        return <Navigate to='/' replace />;
    }
  }

  const isAdmin = location.pathname.includes('/admin');
  if(isAdmin) {
    if (!user || user.userType !== 'admin') {
        return <Navigate to='/' replace />;
    }
  } 

  return children;
};

export default ProtectedRoute;