"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Sign Up

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
            {isSignup ? (
              // Sign Up Form
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your class"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    School
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your school name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Family Income
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter family income (annual)"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Father's Education
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter father's education"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Marks (10th)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter 10th marks (%)"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Marks (12th)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter 12th marks (%)"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Region (State)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your state"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSignup(false)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Already have an account? Login
                  </button>
                </div>
              </form>
            ) : (
              // Login Form
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSignup(true)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Don't have an account? Sign Up
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginSignupModal;
