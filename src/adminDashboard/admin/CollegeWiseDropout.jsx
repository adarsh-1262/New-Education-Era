import React from 'react';
import { UserPlus, MoreVertical, Trash2, PencilLine, School, School2, MailIcon } from 'lucide-react';

const CollegeWiseDropout = () => {
  const subAdmins = [
    { id: 1, name: 'Alice Cooper', email: 'alice@example.com', dropout: '45%', status: 'high' },
    { id: 2, name: 'Bob Martin', email: 'bob@example.com', dropout: '55%', status: 'critical' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', dropout: '35%', status: 'moderate' },
  ];

  const getDropoutStatusColor = (dropout) => {
    const rate = parseInt(dropout);
    if (rate >= 50) return 'bg-red-100 text-red-800';
    if (rate >= 40) return 'bg-orange-100 text-orange-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        {/* <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <School2 className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Schools Dropout Analysis</h1>
                <p className="text-gray-500">Monitor and manage dropout rates across institutions</p>
              </div>
            </div>
            
          </div>
        </div> */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                <School2 className="w-8 h-8 text-blue-600" />
                </div>
                <div className="mt-3">
                <h1 className="text-2xl font-bold text-gray-800">Schools Dropout Analysis</h1>
                <p className="text-gray-500">Monitor and manage dropout rates across institutions</p>
                </div>
            </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Total Schools</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">24</p>
            <div className="mt-2 text-green-600 text-sm">↑ 12% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Average Dropout Rate</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">45%</p>
            <div className="mt-2 text-red-600 text-sm">↑ 5% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">At-Risk Students</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">156</p>
            <div className="mt-2 text-orange-600 text-sm">Requires immediate attention</div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">School-wise Dropout Details</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Institution</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Dropout Rate</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subAdmins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                          {admin.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                          <div className="text-sm text-gray-500">ID: {admin.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{admin.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDropoutStatusColor(admin.dropout)}`}>
                        {admin.dropout}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        admin.status === 'critical' ? 'bg-red-100 text-red-800' :
                        admin.status === 'high' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {admin.status.charAt(0).toUpperCase() + admin.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button title='Send Email for warning' className="text-blue-600 hover:text-blue-900 mx-2">
                        <MailIcon className="w-7 h-7" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeWiseDropout;