import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";

const TutorDashboard = () => {

  const [bookings, setBookings] = useState([]);
  const [tutorData, setTutorData] = useState('');

  useEffect(() => {
    const getAllBookings = async () => {
      try {
        const response = await axiosInstance.get("/api/tutor/getTutorBookings");

        setTutorData(response.data.user);
        setBookings(response.data.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        alert("Error fetching bookings. Please try again later.");
      }
    };

    getAllBookings();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-6 animate-pulse">
        Welcome, {tutorData.username}!
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl">
        {/* Left Section: Profile */}
        <div className="lg:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 shadow-xl rounded-xl p-6 text-white">
          <div className="flex flex-col items-center">
            <img
              src={tutorData.profilePicture}
              alt="Tutor"
              className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-white"
            />
            <h2 className="text-2xl font-semibold">{tutorData.username}</h2>
            <p className="text-sm">{tutorData.subject}</p>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="text-lg space-y-2">
            <p>
              <span className="font-semibold">Experience:</span> {tutorData.experienceYears}
            </p>
            <p>
              <span className="font-semibold">Specialization:</span> C++,
              Javascript, Python
            </p>
            <p>
              <span className="font-semibold">Contact:</span> {tutorData.phone}
            </p>
          </div>
        </div>

        {/* Right Section: Bookings */}
        <div className="lg:w-2/3 bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">
            Booking Details
          </h3>
          <div className="space-y-4">
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 p-4 rounded-lg hover:bg-blue-100"
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
              ))
            ) : (
              <p className="text-gray-500">No bookings available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
