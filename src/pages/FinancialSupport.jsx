import React from 'react';

const FinancialSupport = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Financial Support Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Application Tracking</h3>
          <p className="mt-4">Track financial aid applications seamlessly.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Eligibility Assessment</h3>
          <p className="mt-4">Get automatic eligibility assessments.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Disbursement Tracking</h3>
          <p className="mt-4">Keep track of financial aid disbursements.</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSupport;
