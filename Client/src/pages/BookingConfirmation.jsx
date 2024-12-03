import React from 'react';
import { useLocation } from 'react-router-dom';

export default function BookingConfirmation() {
  const location = useLocation();
  const { tutor } = location.state || {};

  if (!tutor) {
    return <p>No tutor selected.</p>; // Handle case where no tutor is selected
  }

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <h1 className="text-3xl font-semibold text-center text-white mt-12 mb-6">Booking Confirmation</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <h2 className="text-xl font-medium mb-2 text-gray-800">{tutor.name}</h2>
        <p className="mb-2 text-gray-600">Subject: {tutor.subject}</p>
        <p className="mb-4 text-yellow-500">Rating: {tutor.rating} ⭐</p>
        <p className="text-gray-800">Your session has been successfully booked!</p>
      </div>
    </div>
  );
}
