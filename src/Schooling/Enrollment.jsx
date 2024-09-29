import React from "react";

const Enrollment = () => {
  return (
    <div className="pt-24 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-300">
      <h1 className="text-3xl font-bold text-gray-800">Enrollment</h1>
      <p className="mt-4 text-lg text-gray-600">
        Find out how to enroll in our programs and start your journey.
      </p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-semibold">How to Enroll</h2>
        <ol className="mt-4 list-decimal list-inside text-gray-600">
          <li>Visit our Enrollment page.</li>
          <li>Fill out the registration form.</li>
          <li>Submit the required documents.</li>
          <li>Receive confirmation and start classes!</li>
        </ol>
      </div>
    </div>
  );
};

export default Enrollment;
