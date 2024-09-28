import React from 'react';

const VirtualTutoring = () => {
  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Virtual Tutoring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">One-on-One Sessions</h2>
          <p className="text-gray-600">Get personalized tutoring with experienced instructors.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Group Tutoring</h2>
          <p className="text-gray-600">Collaborate and learn in small groups.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Homework Help</h2>
          <p className="text-gray-600">Receive assistance with homework and assignments.</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualTutoring;
