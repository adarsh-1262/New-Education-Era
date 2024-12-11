"use client";
import React from "react";
import user from "../assets/Expert1.jpg";
import StudentAttendanceGraph from "./AttendaceChart";

const StudentDashboard = () => {
  const handleBackToLearning = () => {
    window.location.href = "/learning-hub";
  };

  const Marks = [
    { subject: "Hindi", marks: "75" },
    { subject: "English", marks: "80" },
    { subject: "Math", marks: "95" },
    { subject: "Science", marks: "88" },
    { subject: "Social Science", marks: "85" },
    { subject: "Computer", marks: "92" },
  ];

  const attendance = {
    totalClasses: 100,
    attendedClasses: 90,
  };

  const Enrolled = [
    { name: "React Basics", status: "Pending" },
    { name: "Advanced CSS", status: "Pending" },
    { name: "JavaScript Mastery", status: "Completed" },
    { name: "Python for Beginners", status: "Completed" },
  ];

  const courses = [
    { name: "React Basics", progress: 75 },
    { name: "Advanced CSS", progress: 50 },
    { name: "JavaScript Mastery", progress: 90 },
    { name: "Tailwind CSS", progress: 30 },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-6 animate-pulse">
        Welcome, Rohini Dass!!
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl">
        {/* Left Section */}
        <div className="lg:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 shadow-xl rounded-xl p-6 text-white">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              src={user}
              alt="User"
              className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-white"
            />
            <h2 className="text-2xl font-semibold">Rohini Das</h2>
            <p className="text-sm">B.Tech in Computer Science</p>
            <button
              onClick={handleBackToLearning}
              className="mt-4 px-4 py-2 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              Back to Learning
            </button>
          </div>
          <hr className="my-6 border-gray-300" />
          {/* Info Section */}
          <div className="text-lg space-y-2">
            <p>
              <span className="font-semibold">Batch:</span> 2023-2027
            </p>
            <p>
              <span className="font-semibold">College:</span> ABC Institute of
              Technology
            </p>
            <p>
              <span className="font-semibold">Branch:</span> Computer Science
            </p>
            <p>
              <span className="font-semibold">Contact:</span> +91 9876543210
            </p>
          </div>
          <hr className="my-6 border-gray-300" />
          {/* Achievements Section */}
          <h3 className="text-xl font-bold mb-4 text-center">Achievements</h3>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-12 bg-white rounded-full hover:scale-105 transition transform duration-200"
              ></div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {/* Subject Marks & Attendance */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Marks Card */}
            <div className="flex-1 bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                Subject Marks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Marks.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-800"
                  >
                    <span className="font-medium">{item.subject}</span>
                    <span>{item.marks}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Attendance Graph */}
            <div className="flex-1 bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-300">
              <StudentAttendanceGraph
                totalClasses={attendance.totalClasses}
                attendedClasses={attendance.attendedClasses}
              />
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              Enrolled Courses
            </h3>
            <div className="space-y-4">
              {Enrolled.map((course, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg hover:bg-blue-100"
                >
                  <span className="text-gray-800 font-medium">
                    {course.name}
                  </span>
                  <span
                    className={`font-bold ${
                      course.status === "Completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* My Courses */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              My Courses
            </h3>
            {courses.map((course, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">
                    {course.name}
                  </span>
                  <span className="text-gray-600">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-lg">
                  <div
                    className="bg-blue-500 h-4 rounded-lg"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
