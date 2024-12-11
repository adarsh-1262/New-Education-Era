import React, { useEffect, useState } from "react";
import user from "../assets/Expert1.jpg";
import axiosInstance from "../axiosConfig";

const ExpertDashboard = () => {
  const handleBackToLearning = () => {
    window.location.href = "/learning-hub";
  };

    const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
      const getAllBookings = async () => {
        try {
          const response = await axiosInstance.get("/api/expert/getExpertBookings");
          console.log(response.data.data);
          setBookings(response.data.data);
        } catch (error) {
          alert("Error fetching courses");
        }
      };
  
      getAllBookings();
    }, []);
 

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-green-900 via-green-700 to-green-500 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-6 animate-pulse">
        Welcome, Rohini Dass!!
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl">
        {/* Left Section: Profile */}
        <div className="lg:w-1/3 bg-gradient-to-b from-green-600 to-green-800 shadow-xl rounded-xl p-6 text-white">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              src={user}
              alt="User"
              className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-white"
            />
            <h2 className="text-2xl font-semibold">Rohini Das</h2>
            <p className="text-sm">Expert in Computer Science</p>
            <button
              onClick={handleBackToLearning}
              className="mt-4 px-4 py-2 bg-white text-green-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              Back to Learning
            </button>
          </div>
          <hr className="my-6 border-gray-300" />
          {/* Info Section */}
          <div className="text-lg space-y-2">
            <p>
              <span className="font-semibold">Experience:</span> 5 Years
            </p>
            <p>
              <span className="font-semibold">Specialization:</span> React.js,
              Tailwind CSS, JavaScript
            </p>
            <p>
              <span className="font-semibold">Contact:</span> +91 9876543210
            </p>
          </div>
        </div>

        {/* Right Section: Bookings */}
        <div className="lg:w-2/3 bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-green-900">
            Booking Details
          </h3>
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 p-4 rounded-lg hover:bg-green-100"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    <span className="font-semibold">Student Name: </span>
                    {booking.username}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Email: </span>
                    {booking.email}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="font-medium text-gray-800">
                    <span className="font-semibold">Date: </span>
                    {booking.date}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Time: </span>
                    {booking.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDashboard;
