import React from 'react';
import { Users, MoreVertical, Trash2, PencilLine } from 'lucide-react';

const Students = () => {
    const students = [
        { email: 'robert@example.com', stuId: '1', stuName: 'Ayush', college: 'LPS SouthCity', status: 'Active', class: '5th' },
        { email: 'sarah@example.com', stuId: '2', stuName: 'Narendra', college: 'Army Public School', status: 'Active', class: '5th' },
        { email: 'tom@example.com', stuId: '3', stuName: 'Adarsh', college: 'Amity Internationals', status: 'Inactive', class: '5th' },
        { email: 'emma@example.com', stuId: '4', stuName: 'Priya', college: 'DPS Noida', status: 'Pending', class: '6th' },
        { email: 'john@example.com', stuId: '5', stuName: 'Rahul', college: 'Kendriya Vidyalaya', status: 'Active', class: '6th' },
        { email: 'lucas@example.com', stuId: '6', stuName: 'Ishita', college: 'Lotus Valley', status: 'Inactive', class: '7th' },
        { email: 'olivia@example.com', stuId: '7', stuName: 'Arjun', college: 'St. Xavier’s', status: 'Active', class: '8th' },
        { email: 'james@example.com', stuId: '8', stuName: 'Simran', college: 'The Heritage School', status: 'Inactive', class: '7th' },
        { email: 'sophia@example.com', stuId: '9', stuName: 'Aditi', college: 'Ryan International', status: 'Active', class: '5th' },
        { email: 'liam@example.com', stuId: '10', stuName: 'Karan', college: 'Mount Carmel', status: 'Pending', class: '6th' }
      ];
      

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-blue-500" />
          <h1 className="text-2xl font-bold">Students</h1>
        </div>
       <a href='https://student-dropout1.onrender.com/' target='_blank' className='px-3 py-2 bg-blue-500 rounded-xl text-white'>Drop-out %</a>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
             
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Unique ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drop-out %</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.stuId}>
                
              
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {student.stuName.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.stuName}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.stuId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.email}</div>
                </td>
              
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.class}</div>
                </td>
            
              
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.college}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <a href='https://indeividual-student.onrender.com/' target='_blank'>
                    <button  className='p-2 ml-7 bg-blue-500 rounded-xl text-white hover:scale-105'>Check</button>
                  </a>
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <PencilLine className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;