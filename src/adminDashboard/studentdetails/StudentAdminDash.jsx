import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StudentAdminDashboard = () => {
  // Add student data
  const studentData = {
  "MIT": {
    "CS301": {
      "Rohini Das": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | CSE",
        class: "MIT • Class CS301",
        subjects: {
          Programming: 85,
          Algorithms: 92,
          Database: 78,
          Networks: 88,
          AI: 95,
          WebDev: 90,
        },
        attendance: 92.5,
        performance: 88,
        dropoutRisk: 20,
        parents: {
          father: "Postgraduate",
          mother: "Undergraduate"
        },
        location: "Urban Area",
        income: "$80,000/year"
      },
      "John Doe": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | CSE",
        class: "MIT • Class CS301",
        subjects: {
          Programming: 70,
          Algorithms: 65,
          Database: 72,
          Networks: 68,
          AI: 75,
          WebDev: 80,
        },
        attendance: 78.5,
        performance: 71,
        dropoutRisk: 45,
        parents: {
          father: "Graduate",
          mother: "Graduate"
        },
        location: "Suburban Area",
        income: "$60,000/year"
      }
    }
  },
  "IIT Bombay": {
    "CS101": {
      "Ananya Sharma": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | ECE",
        class: "IIT Bombay • Class CS101",
        subjects: {
          Programming: 91,
          Algorithms: 88,
          Database: 85,
          Networks: 89,
          AI: 90,
          WebDev: 87,
        },
        attendance: 94,
        performance: 90,
        dropoutRisk: 12,
        parents: {
          father: "Engineer",
          mother: "Teacher"
        },
        location: "Urban Area",
        income: "$90,000/year"
      },
      "Rahul Singh": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | ECE",
        class: "IIT Bombay • Class CS101",
        subjects: {
          Programming: 80,
          Algorithms: 75,
          Database: 78,
          Networks: 82,
          AI: 76,
          WebDev: 74,
        },
        attendance: 85,
        performance: 77,
        dropoutRisk: 30,
        parents: {
          father: "Businessman",
          mother: "Homemaker"
        },
        location: "Urban Area",
        income: "$70,000/year"
      },

    }
  },
  "Delhi University": {
    "IT201": {
      "Ravi Mehra": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Sc | IT",
        class: "Delhi University • Class IT201",
        subjects: {
          Programming: 75,
          Algorithms: 80,
          Database: 70,
          Networks: 72,
          AI: 78,
          WebDev: 76,
        },
        attendance: 85,
        performance: 79,
        dropoutRisk: 25,
        parents: {
          father: "Clerk",
          mother: "Homemaker"
        },
        location: "Suburban Area",
        income: "$50,000/year"
      },
      "Priya Gupta": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Sc | IT",
        class: "Delhi University • Class IT201",
        subjects: {
          Programming: 82,
          Algorithms: 85,
          Database: 80,
          Networks: 84,
          AI: 88,
          WebDev: 90,
        },
        attendance: 92,
        performance: 86,
        dropoutRisk: 10,
        parents: {
          father: "Teacher",
          mother: "Nurse"
        },
        location: "Urban Area",
        income: "$75,000/year"
      }
    }
  },
  "Anna University": {
    "CE105": {
      "Karthik R": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.E | Civil",
        class: "Anna University • Class CE105",
        subjects: {
          Surveying: 82,
          Structures: 79,
          SoilMech: 75,
          Hydraulics: 80,
          EnvEngg: 78,
          Estimation: 85,
        },
        attendance: 88,
        performance: 82,
        dropoutRisk: 18,
        parents: {
          father: "Contractor",
          mother: "Graduate"
        },
        location: "Rural Area",
        income: "$45,000/year"
      },
      "Lakshmi Nair": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.E | Civil",
        class: "Anna University • Class CE105",
        subjects: {
          Surveying: 90,
          Structures: 92,
          SoilMech: 88,
          Hydraulics: 85,
          EnvEngg: 89,
          Estimation: 91,
        },
        attendance: 95,
        performance: 90,
        dropoutRisk: 8,
        parents: {
          father: "Engineer",
          mother: "Teacher"
        },
        location: "Urban Area",
        income: "$100,000/year"
      }
    }
  },
  "NIT Trichy": {
    "ME102": {
      "Sneha Iyer": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | Mech",
        class: "NIT Trichy • Class ME102",
        subjects: {
          Mechanics: 88,
          Thermo: 85,
          FluidMech: 83,
          CAD: 86,
          HeatTransfer: 80,
          Manufacturing: 84,
        },
        attendance: 90,
        performance: 86,
        dropoutRisk: 15,
        parents: {
          father: "Engineer",
          mother: "Doctor"
        },
        location: "Urban Area",
        income: "$95,000/year"
      },
      "Arjun Kumar": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | Mech",
        class: "NIT Trichy • Class ME102",
        subjects: {
          Mechanics: 75,
          Thermo: 70,
          FluidMech: 72,
          CAD: 68,
          HeatTransfer: 74,
          Manufacturing: 76,
        },
        attendance: 80,
        performance: 73,
        dropoutRisk: 28,
        parents: {
          father: "Farmer",
          mother: "Homemaker"
        },
        location: "Rural Area",
        income: "$30,000/year"
      }
    }
  },
  "BITS Pilani": {
    "CS110": {
      "Aarav Kapoor": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.E | CSE",
        class: "BITS Pilani • Class CS110",
        subjects: {
          Programming: 92,
          Algorithms: 94,
          Database: 88,
          Networks: 91,
          AI: 96,
          WebDev: 93,
        },
        attendance: 96,
        performance: 94,
        dropoutRisk: 5,
        parents: {
          father: "Entrepreneur",
          mother: "Engineer"
        },
        location: "Urban Area",
        income: "$150,000/year"
      },
      "Sanya Verma": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.E | CSE",
        class: "BITS Pilani • Class CS110",
        subjects: {
          Programming: 78,
          Algorithms: 80,
          Database: 75,
          Networks: 77,
          AI: 82,
          WebDev: 79,
        },
        attendance: 85,
        performance: 78,
        dropoutRisk: 20,
        parents: {
          father: "Teacher",
          mother: "Nurse"
        },
        location: "Urban Area",
        income: "$65,000/year"
      }
    }
  },
  "Jadavpur University": {
    "IT202": {
      "Nikita Roy": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | IT",
        class: "Jadavpur University • Class IT202",
        subjects: {
          Programming: 81,
          Algorithms: 78,
          Database: 79,
          Networks: 82,
          AI: 80,
          WebDev: 84,
        },
        attendance: 87,
        performance: 80,
        dropoutRisk: 22,
        parents: {
          father: "Lecturer",
          mother: "Graduate"
        },
        location: "Urban Area",
        income: "$70,000/year"
      },
      "Rahul Chatterjee": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | IT",
        class: "Jadavpur University • Class IT202",
        subjects: {
          Programming: 65,
          Algorithms: 70,
          Database: 68,
          Networks: 66,
          AI: 72,
          WebDev: 69,
        },
        attendance: 75,
        performance: 70,
        dropoutRisk: 40,
        parents: {
          father: "Shopkeeper",
          mother: "Homemaker"
        },
        location: "Suburban Area",
        income: "$40,000/year"
      }
    }
  },
  "Osmania University": {
    "CSE103": {
      "Vikram Reddy": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | CSE",
        class: "Osmania University • Class CSE103",
        subjects: {
          Programming: 76,
          Algorithms: 72,
          Database: 70,
          Networks: 74,
          AI: 71,
          WebDev: 73,
        },
        attendance: 80,
        performance: 75,
        dropoutRisk: 30,
        parents: {
          father: "Farmer",
          mother: "Homemaker"
        },
        location: "Rural Area",
        income: "$35,000/year"
      },
      "Priya Reddy": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | CSE",
        class: "Osmania University • Class CSE103",
        subjects: {
          Programming: 85,
          Algorithms: 88,
          Database: 82,
          Networks: 87,
          AI: 90,
          WebDev: 84,
        },
        attendance: 92,
        performance: 86,
        dropoutRisk: 15,
        parents: {
          father: "Teacher",
          mother: "Doctor"
        },
        location: "Urban Area",
        income: "$80,000/year"
      }
    }
  },
  "Manipal University": {
    "CS210": {
      "Ishita Singh": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | CSE",
        class: "Manipal University • Class CS210",
        subjects: {
          Programming: 88,
          Algorithms: 85,
          Database: 87,
          Networks: 83,
          AI: 89,
          WebDev: 86,
        },
        attendance: 93,
        performance: 89,
        dropoutRisk: 10,
        parents: {
          father: "Doctor",
          mother: "Engineer"
        },
        location: "Urban Area",
        income: "$120,000/year"
      },
      "Siddharth Rao": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | CSE",
        class: "Manipal University • Class CS210",
        subjects: {
          Programming: 70,
          Algorithms: 68,
          Database: 72,
          Networks: 65,
          AI: 75,
          WebDev: 74,
        },
        attendance: 78,
        performance: 71,
        dropoutRisk: 35,
        parents: {
          father: "Businessman",
          mother: "Graduate"
        },
        location: "Suburban Area",
        income: "$55,000/year"
      }
    }
  },
  "Amity University": {
    "IT303": {
      "Devansh Jain": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | IT",
        class: "Amity University • Class IT303",
        subjects: {
          Programming: 69,
          Algorithms: 74,
          Database: 68,
          Networks: 70,
          AI: 72,
          WebDev: 75,
        },
        attendance: 82,
        performance: 73,
        dropoutRisk: 35,
        parents: {
          father: "Businessman",
          mother: "Graduate"
        },
        location: "Suburban Area",
        income: "$55,000/year"
      },
      "Snehalata Verma": {
        image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
        course: "B.Tech | IT",
        class: "Amity University • Class IT303",
        subjects: {
          Programming: 85,
          Algorithms: 88,
          Database: 82,
          Networks: 87,
          AI: 90,
          WebDev: 84,
        },
        attendance: 92,
        performance: 86,
        dropoutRisk: 15,
        parents: {
          father: "Teacher",
          mother: "Doctor"
        },
        location: "Urban Area",
        income: "$80,000/year"
      }
    }
  }
};


  // Add state for selections
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [currentStudent, setCurrentStudent] = useState(null);

  // Handle selection changes
  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
    setSelectedClass("");
    setSelectedStudent("");
    setCurrentStudent(null);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedStudent("");
    setCurrentStudent(null);
  };

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
    if (e.target.value) {
      setCurrentStudent(studentData[selectedSchool][selectedClass][e.target.value]);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Student Details Dashboard
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Selection Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Filter Options</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Select School</label>
                <select 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedSchool}
                  onChange={handleSchoolChange}
                >
                  <option value="">Choose a school...</option>
                  {Object.keys(studentData).map(school => (
                    <option key={school} value={school}>{school}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Select Class</label>
                <select 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedClass}
                  onChange={handleClassChange}
                  disabled={!selectedSchool}
                >
                  <option value="">Choose a class...</option>
                  {selectedSchool && Object.keys(studentData[selectedSchool]).map(className => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Select Student</label>
                <select 
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedStudent}
                  onChange={handleStudentChange}
                  disabled={!selectedClass}
                >
                  <option value="">Choose a student...</option>
                  {selectedClass && Object.keys(studentData[selectedSchool][selectedClass]).map(student => (
                    <option key={student} value={student}>{student}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {currentStudent ? (
            <>
              {/* Student Profile Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    className="w-20 h-20 rounded-full border-4 border-blue-100"
                    src={currentStudent.image}
                    alt={selectedStudent}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{selectedStudent}</h3>
                    <p className="text-gray-600">{currentStudent.course}</p>
                    <p className="text-sm text-gray-500">{currentStudent.class}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Subject Performance</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(currentStudent.subjects).map(([subject, marks]) => (
                        <div key={subject} className="bg-gray-50 p-2 rounded">
                          <span className="text-sm text-gray-600">{subject}</span>
                          <div className="flex justify-between items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-blue-600 h-2.5 rounded-full" 
                                style={{ width: `${marks}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm font-medium">{marks}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-600">Attendance</h4>
                      <p className="text-2xl font-bold text-blue-600">{currentStudent.attendance}%</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-600">Performance</h4>
                      <p className="text-2xl font-bold text-green-600">{currentStudent.performance}%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Analysis Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-700">AI Risk Analysis</h2>
                
                <div className="mb-8">
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-500">{currentStudent.dropoutRisk}%</span>
                    </div>
                    <svg className="transform -rotate-90 w-full h-full">
                      <circle
                        className="text-gray-200"
                        strokeWidth="12"
                        stroke="currentColor"
                        fill="transparent"
                        r="60"
                        cx="80"
                        cy="80"
                      />
                      <circle
                        className="text-red-500"
                        strokeWidth="12"
                        strokeDasharray={`${currentStudent.dropoutRisk * 3.77} 377`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="60"
                        cx="80"
                        cy="80"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-600">Parents' Education</h4>
                    <p className="text-gray-800">Father: {currentStudent.parents.father}</p>
                    <p className="text-gray-800">Mother: {currentStudent.parents.mother}</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-600">Location & Income</h4>
                    <p className="text-gray-800">{currentStudent.location}</p>
                    <p className="text-gray-800">Family Income: {currentStudent.income}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="space-y-4">
                <svg 
                  className="w-20 h-20 mx-auto text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
                <p className="text-xl font-medium text-gray-500">Please select a student to view details</p>
                <p className="text-sm text-gray-400">Choose from the filters on the left to see student information</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAdminDashboard;
