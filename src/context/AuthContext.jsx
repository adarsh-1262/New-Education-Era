import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [user, setUser] = useState(null); // To store user details

  // Simulated API call for login
  const login = async ({email, password, role}) => {
    try {
      const response = await axiosInstance.post(`/api/${role}/login`, {
        email: email,
        password: password,
      });
      alert(response.data.message); // Optional: Replace with success message display logic
      setIsLoggedIn(true);
      setUser(response.data);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error("Error while logging in:", error);
    }
  };



  // Logout function
  const logout = async() => {
    try {
        const response = await axiosInstance.post("/api/student/logout");
        alert(response.data.message); // Optional: Replace with success message display logic
        setIsLoggedIn(false);
        setUser(response.data);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
      } catch (error) {
        console.error("Error while logout in:", error);
      }
    
  };

  useEffect(() => {
    // Sync the user state from localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const checkingLogin = () => {
        const savedStatus = localStorage.getItem('isLoggedIn');
        return savedStatus === 'true'; // Initialize from localStorage
    }
    setIsLoggedIn(checkingLogin())

  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
