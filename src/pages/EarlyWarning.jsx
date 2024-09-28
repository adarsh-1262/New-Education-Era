import React from 'react';

const EarlyWarning = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">AI-Driven Early Warning System</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Predictive Analytics</h3>
          <p className="mt-4">Analyze data to predict which students are at risk of dropping out.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Real-time Alerts</h3>
          <p className="mt-4">Receive timely alerts to intervene before it's too late.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Data Visualization</h3>
          <p className="mt-4">Visualize student data to spot trends early.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Intervention Recommendations</h3>
          <p className="mt-4">Get actionable recommendations for student support.</p>
        </div>
      </div>
    </div>
  );
};

export default EarlyWarning;
