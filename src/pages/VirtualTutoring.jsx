import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tutor1 from "../assets/tutor1.jpg";
import tutor2 from "../assets/tutor2.jpg";
import tutor3 from "../assets/tutor3.jpg";
import tutor4 from "../assets/tutor4.jpg";

// Dummy data for tutors
const tutorsData = [
  { id: 1, name: "Tutor 1", subject: "Mathematics", image: tutor1, rating: 4.5 },
  { id: 2, name: "Tutor 2", subject: "Physics", image: tutor2, rating: 4.7 },
  { id: 3, name: "Tutor 3", subject: "Chemistry", image: tutor3, rating: 4.6 },
  { id: 4, name: "Tutor 4", subject: "Biology", image: tutor4, rating: 4.8 },
];

export default function VirtualTutoring() {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedTutor, setSelectedTutor] = useState(null);
  
  const handleBookSession = (tutor) => {
    setSelectedTutor(tutor);
    // Redirect to the booking confirmation page
    navigate('/learning-hub/virtual-tutoring/booking', { state: { tutor } });
  };

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <h1 className="text-3xl font-semibold text-center text-white mt-12 mb-6" 
      style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)'}}>Virtual Tutoring</h1>
      <p className="text-center mb-8 text-gray-300">Get one-on-one help from our expert tutors.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorsData.map(tutor => (
          <div key={tutor.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-200 hover:scale-105">
            <img src={tutor.image} alt={tutor.name} className="h-48 w-full object-cover mb-4 rounded-md"/>
            <h2 className="text-xl font-medium mb-2 text-gray-800">{tutor.name}</h2>
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
