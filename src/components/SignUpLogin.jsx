"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axiosInstance from "../axiosConfig";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Sign Up
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [formData, setFormData] = useState({
    userType: "student", // Default to "student"
    username: "",
    email: "",
    password: "",
    phone: "",
    school: "",
    Class: "",
    rollNo: "",
  }); // State for form inputs

  const [expertData, setExpertData] = useState({
    userType: "expert",
    username: "",
    email: "",
    password: "",
    phone: "",
    consultationField: "",
    experienceYears: "",
  }); // State for expert-specific fields

  const [tutorData, setTutorData] = useState({
    userType: "tutor",
    username: "",
    email: "",
    password: "",
    phone: "",
    subject: "",
    experienceYears: "",
  }); // State for expert-specific fields

  const [parentData, setParentData] = useState({
    userType: "parent", // Default to "student"
    username: "",
    email: "",
    password: "",
    phone: "",
    school: "",
    Class: "",
    rollNo: "",
  }); // State for form inputs

  const [adminData, setAdminData] = useState({
    userType: "admin",
    name: "",
    username: "", 
    email: "", 
    password: "",  
    school: "",  
    phone: "",
  });

  const [subAdminData, setSubAdminData] = useState({
    userType: "subadmin",
    name: "",
    username: "", 
    email: "", 
    password: "",  
    school: "",  
    Class: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const { login, setIsLoggedIn } = useAuth();
  const [userType, setUserType] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        email: loginData.email,
        password: loginData.password,
        role: userType
      });
      setErrorMessage(""); // Clear error message
      setIsLoggedIn(true);
      onClose();
      navigate(`/${userType}/dashboard`)
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage(
        error.response?.data?.message || "Something went wrong during login."
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (userType === "expert") {
      setExpertData({ ...expertData, [name]: value });
    } else if(userType === "student"){
      setFormData({ ...formData, [name]: value });
    }
    else if(userType === "tutor"){
      setTutorData({ ...tutorData, [name]: value})
    }
    else if(userType === "parent"){
      setParentData({ ...parentData, [name]: value})
    }
    else if(userType === "admin"){
      setAdminData({ ...adminData, [name]: value})
    }
    else if(userType === "subadmin"){
      setSubAdminData({ ...subAdminData, [name]: value})
    }
    setErrorMessage(""); // Clear error when user starts typing
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value});
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      let response = null;
      if (userType === "student") {
        response = await axiosInstance.post("/api/student/signup", {
          userType: formData.userType,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          school: formData.school,
          Class: formData.Class,
          rollNo: parseInt(formData.rollNo), // Ensure rollNo is an integer
        });
      } 
      else if (userType === "expert") {
        response = await axiosInstance.post("/api/expert/signup", {
          userType: expertData.userType,
          username: expertData.username,
          email: expertData.email,
          password: expertData.password,
          phone: expertData.phone,
          consultationField: expertData.consultationField,
          experienceYears: expertData.experienceYears,
        });
      }
      else if(userType === "tutor"){
        response = await axiosInstance.post("/api/tutor/signup", {
          userType: tutorData.userType,
          username: tutorData.username,
          email: tutorData.email,
          password: tutorData.password,
          phone: tutorData.phone,
          subject: tutorData.subject,
          experienceYears: tutorData.experienceYears,
        });
      }
      else if(userType === "parent"){
        response = await axiosInstance.post("/api/parent/signup", {
          userType: parentData.userType,
          username: parentData.username,
          email: parentData.email,
          password: parentData.password,
          phone: parentData.phone,
          school: parentData.school,
          Class: parentData.Class,
          rollNo: parseInt(parentData.rollNo), // Ensure rollNo is an integer
        });
      }
      else if(userType === "admin"){
        response = await axiosInstance.post("/api/admin/signup", {
          userType: adminData.userType,
          name: adminData.name,
          username: adminData.username, 
          email: adminData.email, 
          password: adminData.password, 
          school: adminData.school,  
          phone: adminData.phone,          
        });
      }
      else if(userType === "subadmin"){
        response = await axiosInstance.post("/api/subadmin/signup", {
          userType: subAdminData.userType,
          name: subAdminData.name,
          username: subAdminData.username, 
          email: subAdminData.email, 
          password: subAdminData.password, 
          school: subAdminData.school, 
          Class: subAdminData.Class, 
          phone: subAdminData.phone,          
        });
      }
      setErrorMessage(""); // Clear any previous errors
      setUserType(userType);
      alert(response?.data.message); // Optional: Replace with success message display logic
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(response.data));
      onClose();
    } catch (error) {
      console.error("Error while signing up:", error);
      setErrorMessage(
        error.response?.data?.message || "Something went wrong during sign-up."
      );
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
              {isSignup ? (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      User Type
                    </label>
                    <select
                      name="userType"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="select">Select</option>
                      <option value="student">Student</option>
                      <option value="expert">Expert</option>
                      <option value="tutor">Tutor</option>
                      <option value="parent">Parent</option>
                      <option value="admin">Admin</option>
                      <option value="subadmin">Sub-Admin</option>
                    </select>
                  </div>
                  

                  {userType === "student" && (
                    <>
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
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your phone number"
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
                      
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            School
                          </label>
                          <input
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your school"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Class
                          </label>
                          <select
                            name="Class"
                            value={formData.Class}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="Nur">Nur</option>
                            <option value="KG">KG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Roll Number
                          </label>
                          <input
                            type="number"
                            name="rollNo"
                            value={formData.rollNo}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your roll number"
                            required
                          />
                        </div>
                    </>
                  )}

                  {userType === "expert" && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={expertData.username}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your username"
                          required
                        />
                     </div>

                     <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={expertData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={expertData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your phone number"
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
                            value={expertData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                          />
                        </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Expertise Field
                        </label>
                        <input
                          type="text"
                          name="consultationField"
                          value={expertData.consultationField}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your expertise field"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Years of Experience
                        </label>
                        <input
                          type="number"
                          name="experienceYears"
                          value={expertData.experienceYears}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter years of experience"
                          required
                        />
                      </div>
                    </>
                  )}

                  {userType === "tutor" && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={tutorData.username}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your username"
                          required
                        />
                     </div>

                     <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={tutorData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={tutorData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your phone number"
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
                            value={tutorData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                          />
                        </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={tutorData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your expertise field"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Years of Experience
                        </label>
                        <input
                          type="number"
                          name="experienceYears"
                          value={tutorData.experienceYears}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter years of experience"
                          required
                        />
                      </div>
                    </>
                  )}

                  {userType === "parent" && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={parentData.username}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your username"
                          required
                        />
                     </div>

                     <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={parentData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={parentData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your phone number"
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
                            value={parentData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                      
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            School
                          </label>
                          <input
                            type="text"
                            name="school"
                            value={parentData.school}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your school"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Class
                          </label>
                          <select
                            name="Class"
                            value={parentData.Class}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="Nur">Nur</option>
                            <option value="KG">KG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Roll Number
                          </label>
                          <input
                            type="number"
                            name="rollNo"
                            value={parentData.rollNo}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your roll number"
                            required
                          />
                        </div>
                    </>
                  )}
                   
                   {userType === "admin" && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={adminData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your name"
                          required
                        />
                     </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={adminData.username}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your username"
                          required
                        />
                     </div>

                     <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={adminData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={adminData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your phone number"
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
                            value={adminData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                      
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            School
                          </label>
                          <input
                            type="text"
                            name="school"
                            value={adminData.school}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your school"
                            required
                          />
                        </div>
                    </>
                  )}

                  {userType === "subadmin" && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={subAdminData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your name"
                          required
                        />
                     </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={subAdminData.username}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your username"
                          required
                        />
                     </div>

                     <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={subAdminData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={subAdminData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your phone number"
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
                            value={subAdminData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                      
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            School
                          </label>
                          <input
                            type="text"
                            name="school"
                            value={subAdminData.school}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your school"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Class
                          </label>
                          <select
                            name="Class"
                            value={subAdminData.Class}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="Nur">Nur</option>
                            <option value="KG">KG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>

                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                  >
                    {isSignup ? "Sign Up" : "Login"}
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      User Type
                    </label>
                    <select
                      name="userType"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="select">Select</option>
                      <option value="student">Student</option>
                      <option value="expert">Expert</option>
                      <option value="tutor">Tutor</option>
                      <option value="parent">Parent</option>
                      <option value="admin">Admin</option>
                      <option value="subadmin">Sub-Admin</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleChangeLogin}
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
                      value={loginData.password}
                      onChange={handleChangeLogin}
                      className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                  >
                    Login
                  </button>
                </>
              )}
            </form>

            <div className="text-center mt-4">
              <button
                onClick={() => setIsSignup((prev) => !prev)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {isSignup
                  ? "Already have an account? Login"
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginSignupModal;
