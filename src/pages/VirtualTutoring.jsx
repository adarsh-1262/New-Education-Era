import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tutor1 from "../assets/tutor1.jpg";
import tutor2 from "../assets/tutor2.jpg";
import tutor3 from "../assets/tutor3.jpg";
import tutor4 from "../assets/tutor4.jpg";

// Extended dummy data for tutors
const tutorsData = [
  { id: 1, name: "Tutor 1", subject: "Mathematics", image: tutor1, rating: 4.5 },
  { id: 2, name: "Tutor 2", subject: "Physics", image: tutor2, rating: 4.7 },
  { id: 3, name: "Tutor 3", subject: "Chemistry", image: tutor3, rating: 4.6 },
  { id: 4, name: "Tutor 4", subject: "Biology", image: tutor4, rating: 4.8 },
  { id: 5, name: "Tutor 5", subject: "English Literature", image: "https://via.placeholder.com/400x300.png?text=Tutor+5", rating: 4.9 },
  { id: 6, name: "Tutor 6", subject: "History", image: "https://via.placeholder.com/400x300.png?text=Tutor+6", rating: 4.4 },
  { id: 7, name: "Tutor 7", subject: "Geography", image: "https://via.placeholder.com/400x300.png?text=Tutor+7", rating: 4.6 },
  { id: 8, name: "Tutor 8", subject: "Economics", image: "https://via.placeholder.com/400x300.png?text=Tutor+8", rating: 4.5 },
  { id: 9, name: "Tutor 9", subject: "Computer Science", image: "https://via.placeholder.com/400x300.png?text=Tutor+9", rating: 4.9 },
  { id: 10, name: "Tutor 10", subject: "Psychology", image: "https://via.placeholder.com/400x300.png?text=Tutor+10", rating: 4.7 },
  { id: 11, name: "Tutor 11", subject: "Philosophy", image: "https://via.placeholder.com/400x300.png?text=Tutor+11", rating: 4.8 },
  { id: 12, name: "Tutor 12", subject: "Art and Design", image: "https://via.placeholder.com/400x300.png?text=Tutor+12", rating: 4.6 },
];

export default function VirtualTutoring() {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleBookSession = (tutor) => {
    setSelectedTutor(tutor);
    // Redirect to the booking confirmation page
    navigate("/learning-hub/virtual-tutoring/booking", { state: { tutor } });
  };

  return (
    <div className="min-h-screen pt-6 pb-10 px-8 bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h1
        className="text-3xl font-semibold text-center text-blue-900 mt-6 mb-6"
        style={{
          textShadow: "0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Virtual Tutoring
      </h1>
      <p className="text-center mb-8 text-gray-600">
        Get one-on-one help from our expert tutors.
      </p>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tutorsData.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-200 hover:scale-105"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="h-48 w-full object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-medium mb-2 text-gray-800">
              {tutor.name}
            </h2>
            <p className="mb-2 text-gray-600">Subject: {tutor.subject}</p>
            <p className="mb-4 text-yellow-500">Rating: {tutor.rating} ⭐</p>
            <button
              onClick={() => handleBookSession(tutor)}
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Book Tutoring
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
