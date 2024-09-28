import React from 'react';

const ResourceLibrary = () => {
  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Resource Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">eBooks</h2>
          <p className="text-gray-600">Browse a collection of educational eBooks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>
          <p className="text-gray-600">Watch informative video tutorials.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Articles</h2>
          <p className="text-gray-600">Read expert-written articles on various topics.</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;
