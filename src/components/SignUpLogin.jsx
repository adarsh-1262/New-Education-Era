"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Sign Up
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  }); // State for form inputs
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const {login, setIsLoggedIn} = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    const response = login({email: formData.email, password: formData.password})

    onClose()
    console.log("respose ",response)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Clear error when user starts typing
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setErrorMessage(""); // Clear any previous errors
      alert(response.data.message); // Optional: Replace with success message display logic
      setIsLoggedIn(true);
      onClose()
    } catch (error) {
      console.error("Error while signing up:", error);
      setErrorMessage(error.response?.data?.message || "Something went wrong during sign-up.");
    }
  };

  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg max-w-md w-full relative overflow-auto max-h-[90vh]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          >
            ✖
          </button>
          <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">
            {isSignup ? "Sign Up" : "Login"}
          </h2>

          <div className="p-4">
            {errorMessage && (
              <div className="mb-4 text-red-600 text-sm font-medium text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={isSignup ? handleSignUp : handleLogin}>
              {isSignup && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  {isSignup ? "Sign Up" : "Login"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {isSignup
                    ? "Already have an account? Login"
                    : "Don't have an account? Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginSignupModal;
