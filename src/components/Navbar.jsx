"use client";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.webp";
import LoginSignupModal from "./SignUpLogin";
import { cn } from "../lib/utils";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../axiosConfig";
import logoutImage from '../assets/logout.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [userRole,setUserRole] = useState('')

  const getrole = async() => {
    try {
      const response = await axiosInstance.get('/api/student/getRole')
      setUserRole(response.data.role)
    } catch (error) {
      console.log("error while getting role ",error)
    }
  }

  useEffect(() => {
    getrole()
  }, [])

  const { isLoggedIn, logout} = useAuth();
  
  console.log("login status ",isLoggedIn)
  const profilePicture = "https://imgs.search.brave.com/3KGtNIHen91nrQD1Pmg9Xcxt5-0SCDTPR8zBKG_KzFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk4LzFk/LzZiLzk4MWQ2YjJl/MGNjYjVlOTY4YTA2/MThjOGQ0NzY3MWRh/LmpwZw"; // Replace with user's profile picture URL

  const handleLogout = () => {
    logout();
    navigate("/")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 inset-x-0 bg-white shadow-md z-80 border-b border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="New Education Era"
              className="h-8 w-auto"
            />
            <span className="ml-3 text-xl font-semibold text-gray-800">
              EduHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {isLoggedIn ? (
              <>
                <CustomNavLink to="/learning-hub" label="Learning Hub" />
                <CustomNavLink to="/financial-support" label="Financial Support" />
                <CustomNavLink to="/flexible-schooling" label="Schooling Support" />
                <button className="text-yellow-500 font-semibold" onClick={() => navigate('/reward')} >Redeem Rewards</button>
                {/* <button onClick={handleLogout} >Log out</button> */}
                
              </>
            ) : (
              <>
                <CustomNavLink to="/" label="Home" />
                <CustomNavLink to="/about" label="About" />
                {/* <CustomNavLink to="/parental-engagement" label="Parent's Corner" /> */}
                <CustomNavLink to="/contact" label="Contact Us" />
              </>
            )}
          </div>

          {/* Profile or Sign Up/Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-6">
                <img title="Profile"
                onClick={() => navigate(`/${userRole}/dashboard`, { replace: true })}
                src={profilePicture}
                alt="Profile"
                className="w-12 h-12 border-2 border-white rounded-full cursor-pointer hover:opacity-80 transition-opacity"
              />
                <img onClick={handleLogout} title="Logout" src={logoutImage} alt="logout" className="w-12 h-10 object-cover cursor-pointer" />
              </div>
            ) : (
              <button
                onClick={() => navigate('/signup')}
                className="text-sm font-medium text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {isLoggedIn ? (
              <>
                <CustomNavLink to="/learning-hub" label="Learning Hub" />
                <CustomNavLink to="/financial-support" label="Financial Support" />
                <CustomNavLink to="/flexible-schooling" label="Schooling Support" />

              </>
            ) : (
              <>
                <CustomNavLink to="/" label="Home" />
                <CustomNavLink to="/about" label="About" />
                <CustomNavLink to="/contact" label="Contact" />
                <CustomNavLink to="/parental-engagement" label="Parent's Corner" />
              </>
            )}
            <div className="mt-4 space-y-1">
              {isLoggedIn ? (
                <Link
                  to="/profile"
                  className="block text-center py-2 text-sm text-gray-800 hover:bg-gray-100 rounded"
                >
                  Profile
                </Link>
              ) : (
                <button
                  onClick={() => navigate('/signup')}
                  className="block text-center py-2 text-sm text-blue-600 hover:bg-blue-100 rounded"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Login/Signup Modal */}
      {isModalOpen && <LoginSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
}

const CustomNavLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "text-sm font-medium px-3 py-2 rounded-md transition-colors",
        isActive
          ? "text-white bg-blue-600"
          : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
      )
    }
  >
    {label}
  </NavLink>
);