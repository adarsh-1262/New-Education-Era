import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StudentAdminDashboard = () => {
  const dropoutRate = 80; // Static dropout rate for now, can be dynamic

  // AI Generated Data for Line Chart (Demo Data)
  const aiData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis months
    datasets: [
      {
        label: "AI Predictions", // Label for the line
        data: [65, 59, 80, 81, 56, 55, 40], // Sample AI prediction data
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        tension: 0.1, // Smoothness of the line
      },
    ],
  };

  const aiChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "AI Generated Data (Predictions)",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Prediction Values",
        },
      },
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center mb-8">Student Details</h1>

      {/* Card Wrapper */}
      <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-green-100 shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left panel - Select Details */}
          <div className="bg-gradient-to-br from-white via-indigo-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold mb-4">Select Details</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">College</label>
              <select className="mt-1 block w-full p-2 border rounded-md bg-gray-50 focus:ring-blue-500">
                <option value="MIT">MIT</option>
                <option value="Harvard">Harvard</option>
                <option value="Stanford">Stanford</option>
                <option value="UC Berkeley">UC Berkeley</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Class</label>
              <select className="mt-1 block w-full p-2 border rounded-md bg-gray-50 focus:ring-blue-500">
                <option value="CS301">Data Structures (CS301)</option>
                <option value="CS302">Algorithms (CS302)</option>
                <option value="CS303">Database Systems (CS303)</option>
                <option value="CS304">Operating Systems (CS304)</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Student</label>
              <select className="mt-1 block w-full p-2 border rounded-md bg-gray-50 focus:ring-blue-500">
                <option value="Rohini Das">Rohini Das</option>
                <option value="John Doe">John Doe</option>
                <option value="Sarah Lee">Sarah Lee</option>
                <option value="Michael Brown">Michael Brown</option>
                <option value="Emily Davis">Emily Davis</option>
              </select>
            </div>
          </div>

          {/* Center Panel - Student Details */}
          <div className="bg-gradient-to-br from-white via-purple-50 to-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src="https://via.placeholder.com/150"
                alt="Student"
              />
              <div>
                <h3 className="text-xl font-semibold">Rohini Das </h3>
                <p className="text-sm text-gray-500">B.Tech | CSE</p>
                <p className="text-sm">School: ABC Public School</p>
                <p className="text-sm">Class: 11-A</p>
              </div>
            </div>

            {/* Subject Marks */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Subject Marks</h4>
              <div className="grid grid-cols-2 mt-2">
                {Object.entries({
                  Hindi: 75,
                  English: 75,
                  Math: 75,
                  Science: 75,
                  SocialScience: 75,
                  Computer: 75,
                }).map(([subject, marks]) => (
                  <div key={subject} className="flex justify-between">
                    <span className="text-sm">{subject}</span>
                    <span className="text-sm">{marks}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance Overview */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Attendance Overview</h4>
              <div className="flex justify-between mt-2">
                <span>Attendance: </span>
                <span className="font-semibold">88.24%</span>
              </div>
            </div>

            {/* Performance Score */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Performance Score</h4>
              <div className="flex justify-between mt-2">
                <span>Score: </span>
                <span className="font-semibold">85%</span>
              </div>
            </div>

            {/* Attendance Rate */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Attendance Rate</h4>
              <div className="flex justify-between mt-2">
                <span>Rate: </span>
                <span className="font-semibold">92%</span>
              </div>
            </div>
          </div>

          {/* Right Panel - AI Analysis */}
          <div className="bg-gradient-to-br from-white via-green-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold mb-4">AI Analysis</h3>

            {/* Dropout Rate Section */}
            <div className="mt-4 text-center">
              <label className="text-sm font-medium">Dropout Rate chances</label>
              <div className="w-24 h-24 mx-auto mt-2 flex items-center justify-center relative">
                <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center">
                  <div
                    className="w-20 h-20 bg-blue-200 rounded-full"
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0, 100% 0, 100% 50%, 50% 50%)`,
                    }}
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold">
                      {dropoutRate}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
             
            {/* Last Percentage */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Last Percentage</h4>
              <div className="flex justify-between mt-2">
                <span>Percentage: </span>
                <span className="font-semibold">75%</span>
              </div>
            </div>

            {/* Parents' Qualification */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Parents' Qualification</h4>
              <div className="flex justify-between mt-2">
                <span>Primary: </span>
                <span className="font-semibold">High School</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Secondary: </span>
                <span className="font-semibold">Undergraduate</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Higher: </span>
                <span className="font-semibold">Postgraduate</span>
              </div>
            </div>

            {/* Area */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Area</h4>
              <div className="flex justify-between mt-2">
                <span>Location: </span>
                <span className="font-semibold">Urban</span>
              </div>
            </div>

            {/* Family Income */}
            <div className="mt-4">
              <h4 className="text-sm font-medium">Family Income</h4>
              <div className="flex justify-between mt-2">
                <span>Income: </span>
                <span className="font-semibold">$50,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* New AI Chart Card Below */}
        <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-green-100 p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-4">AI Generated Data (Demo)</h3>
          <Line data={aiData} options={aiChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default StudentAdminDashboard;
