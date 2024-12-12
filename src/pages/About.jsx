import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Automatically register Chart.js components
import { useNavigate } from "react-router-dom";

const About = () => {
  const chartData = {
    labels: ["Dropouts", "Access", "Engagement", "Parental Support"],
    datasets: [
      {
        label: "Education Challenges",
        data: [35, 45, 25, 30],
        backgroundColor: ["#1D4ED8", "#3B82F6", "#60A5FA", "#93C5FD"],
        borderWidth: 1,
      },
    ],
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-100 to-white text-gray-800 py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">About EduHub</h1>

        {/* Introduction */}
        <section className="mb-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src="https://files.oaiusercontent.com/file-KDXHSeKgnLqbUjBZe2YX8d?se=2024-12-11T22%3A47%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D041ac0d0-6c11-4816-a4bc-7fdb7163ae85.webp&sig=ASdCdSAIm/sMxlM9JU%2BDcny4UIl%2B6YeLvsN5C9U7aB8%3D"
              alt="EduHub Introduction"
              className="w-full lg:w-1/3 max-h-64 rounded-lg shadow-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Welcome to EduHub</h2>
              <p className="leading-relaxed">
                EduHub is more than a platform; it’s a movement to redefine the educational landscape by tackling
                challenges like dropout rates, accessibility, and engagement. Our innovative solutions create an
                inclusive future for learners at all stages.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Visualization */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Understanding the Challenges</h2>
          <p className="leading-relaxed mb-6">
            The modern educational system faces significant hurdles. Here's a breakdown of the key challenges:
          </p>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">AI-Driven Early Warning System</h3>
              <p className="text-sm leading-relaxed">
                Identifies at-risk students and enables timely interventions to prevent dropouts.
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Community Learning Hub</h3>
              <p className="text-sm leading-relaxed">
                Provides digital resources, virtual mentoring, and online classes to underserved areas.
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Parental Engagement Portal</h3>
              <p className="text-sm leading-relaxed">
                Strengthens collaboration between parents and educators with real-time insights.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src="https://files.oaiusercontent.com/file-2sFm7bXN5Efugv45La1xTH?se=2024-12-11T22%3A51%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9f94b0ce-33d5-4e45-9739-c0850af69a2e.webp&sig=ePDa%2BhfFMr6vyJLBXtzjoSQJkDAQVodk7VsHjGe19Ww%3D"
              alt="EduHub Impact"
              className="w-full lg:w-1/3 max-h-64 rounded-lg shadow-lg object-cover"
            />
            <ul className="list-disc pl-5 space-y-2">
              <li>Reduced dropout rates by providing timely support to students.</li>
              <li>Improved access to quality education in underserved regions.</li>
              <li>Enhanced collaboration between parents, students, and educators.</li>
              <li>Equipped institutions with data-driven insights for decision-making.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Join Us in Revolutionizing Education</h2>
          <p className="leading-relaxed mb-6">
            Together, we can make education more accessible, impactful, and inclusive. Let’s create a brighter future
            for generations to come.
          </p>
          <button
          onClick={() => navigate("/signup")}
          className="bg-white text-blue-700 px-6 py-2 rounded-lg shadow-md hover:bg-blue-100">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
