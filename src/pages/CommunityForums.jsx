import React from 'react';

const CommunityForums = () => {
  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Community Forums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">General Discussion</h2>
          <p className="text-gray-600">Join discussions on various educational topics.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Q&A Forums</h2>
          <p className="text-gray-600">Ask questions and get answers from the community.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Study Groups</h2>
          <p className="text-gray-600">Form or join study groups for collaborative learning.</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityForums;
