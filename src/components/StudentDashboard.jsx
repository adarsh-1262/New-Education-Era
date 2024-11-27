import React from 'react'
import user from '../assets/Expert1.jpg'
import { div, p } from 'framer-motion/client';
import StudentAttendanceGraph from './AttendaceChart';

const StudentDashboard = () => {

    const handleBackTolearning = () => {
        window.location.href = '/learning-hub';
    }

    const Marks = [
        {subject: 'Hindi', marks: '75'},
        {subject: 'English', marks: '75'},
        {subject: 'Math', marks: '75'},
        {subject: 'Science', marks: '75'},
        {subject: 'Social Science', marks: '75'},
        {subject: 'Computer', marks: '75'},
    ]
    const attendance = {
        totalClasses: '85',
        attendedClasses: '75',
    }

    const Enrolled = [
        { name: "React Basics", status: "Pending" },
        { name: "Advanced CSS", status: "Pending" },
        { name: "JavaScript Mastery", status: "Completed" },
        { name: "Python for Beginners", status: "Completed" },
      ];

    const courses = [
        { name: "React Basics", progress: 75 },
        { name: "Advanced CSS", progress: 50 },
        { name: "JavaScript Mastery", progress: 90 },
        { name: "Tailwind CSS", progress: 30 },
    ];



  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-[#f6c7e8] to-[#bbcbe8] justify-center p-5'>
        <p className='text-4xl text-[#9890e3] text-center font-semibold pb-5'>Welcome Rohini Das 🥳</p>
        <div className='flex flex-row gap-10 h-[100%] w-[80%] overflow-auto'>
            <div className='w-[30%] h-[100%] bg-gray-200 shadow-lg shadow-gray-400 rounded-xl'>
                <div className='h-[25%] m-4 bg-gradient-to-b from-[#30cfd0] to-[#330867] hover:scale-105 transition-all duration-300 rounded-xl'>
                    <div className='flex flex-row gap-10 p-4 m-4'>
                        <img src={user} className='h-24 w-24 rounded-lg object-cover border-4 border-white' />
                        <p>
                            <p className='text-wrap font-bold text-xl text-white'>Rohini Das</p>
                            <p className='text-sm text-white font-semibold'>B.Tech</p>
                            <p className='text-sm text-white font-semibold'>CSE</p>
                        </p>
                    </div>
                    <div className='flex items-center ml-5 mr-5 justify-center'>
                        <button onClick={handleBackTolearning} className='bg-[#51dbdf] rounded-lg p-1 border-none text-xl w-full text-white mb-4'>Back to Learning</button>
                    </div>
                </div>
                <hr className='m-4 bg-gray-500 h-[1.5px]' />
                <div className='m-4'>
                    <p className='text-center text-gray-900 text-xl font-medium'>
                        I am studying in rec sonbgadra aur kuchh janna hai mai nahi bataunga ab jo krna hai kr lo
                    </p>
                </div>
                <hr className='m-4 bg-gray-500 h-[1.5px]' />
                <div className='flex flex-col text-xl font-semibold m-4'>
                    <p>Batch </p>
                    <p>College Name</p>
                    <p>Branch</p>
                    <p>Contact No.</p>
                </div>
                <div className='flex flex-col gap-3 m-4'>
                    <p className='text-center items-center justify-center text-gray-900 text-2xl mt-2 mb-4 font-semibold'>Achievements and Badges</p>
                    <div className='flex flex-row flex-wrap gap-5'>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                        <p className='h-12 w-12 bg-white'></p>
                    </div>
                </div>
            </div>
            <div className='h-[100%] w-[70%] flex gap-5 flex-col'>
                <div className='h-[30%] flex flex-row gap-5 rounded-xl'>
                    <div className='w-[50%] p-4 shadow-md shadow-gray-700 bg-gray-200 rounded-xl'>
                        <p className='text-gray-900 text-2xl mb-1 text-center font-semibold'>Subject Marks</p>
                        <div className='grid grid-cols-2 p-2 gap-3'>
                        {
                            Marks.map((item, index) => (
                                <div key={index} className='flex flex-row gap-6'>
                                    <p className='font-semibold text-gray-800 font-mono'> {item.subject} </p>
                                    <p className='text-gray-800 font-thin'> {item.marks} </p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className='w-[50%] shadow-md shadow-gray-700 bg-gray-200 rounded-xl'>
                        <StudentAttendanceGraph totalClasses={attendance.totalClasses} attendedClasses={attendance.attendedClasses} />
                    </div>
                </div>
                <div className='h-[30%] p-5 shadow-md shadow-gray-700 bg-gray-200 rounded-xl'>
                    <p className='text-2xl text-gray-800 font-semibold mb-5'>Enrolled Courses</p>
                    <div className="w-full rounded-md p-5">

                    {/* Completed Courses */}
                    <div className="mb-8">
                        <h3 className="text-xl font-medium text-green-500 mb-4">Completed Courses</h3>
                        {Enrolled
                        .filter((course) => course.status === "Completed")
                        .map((course) => (
                            <div key={course.name} className="flex justify-between items-center hover:bg-white p-2 rounded-xl transition-all duration-300 cursor-pointer mb-2">
                            <span className="text-gray-800 font-medium ml-3">{course.name}</span>
                            <span className="text-green-500 font-bold mr-3">Completed</span>
                            </div>
                        ))}
                    </div>

                    {/* Pending Courses */}
                    <div>
                        <h3 className="text-xl font-medium text-red-600 mb-4">Pending Courses</h3>
                        {Enrolled
                        .filter((course) => course.status === "Pending")
                        .map((course) => (
                            <div key={course.name} className="flex justify-between items-center hover:bg-white p-2 rounded-xl transition-all duration-300 cursor-pointer mb-2">
                            <span className="text-gray-800 font-medium ml-3">{course.name}</span>
                            <span className="text-red-500 font-bold mr-3">Pending</span>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className='h-[30%] shadow-md shadow-gray-700 bg-gray-200 rounded-xl'>
                <div className="w-full mx-auto shadow-md rounded-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Courses</h2>
                    {courses.map((course) => (
                        <div key={course.name} className="mb-8 cursor-pointer rounded-md p-2 shadow-md shadow-gray-500">
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-800 font-medium">{course.name}</span>
                            <span className="text-gray-800">{course.progress}%</span>
                        </div>
                        <div className="w-full rounded-full h-4">
                            <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default StudentDashboard