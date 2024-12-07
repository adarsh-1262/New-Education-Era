import { Building2, PieChart, UserMinus, Users } from "lucide-react";
import React from "react";
import StudentAdminDashboard from "../studentdetails/StudentAdminDash";
import StatCard from "./StatCard";



const Dashboard = () => {
  const user = { role: "superAdmin", name: "Ayush" };
  // const user = { role: "admin", name: "Rahul" };
  // const user = { role: "subAdmin", name: "Manoj"};

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Super admin case */}
        {user.role === "superAdmin" && (
          <>
            <StatCard
              title="Total Schools/Colleges"
              value="2500"
              icon={Building2}
              color="bg-cyan-500"
            />
            <StatCard
              title="Dropout Rate"
              value="12.6%"
              icon={PieChart}
              color="bg-emerald-600"
            />
            <StatCard
              title="Total nodal Centers"
              value="44"
              icon={Users}
              color="bg-amber-400"
            />
            <StatCard
              title="Total Student Dropouts"
              value="655"
              icon={UserMinus}
              color="bg-rose-500"
            />
          </>
        )}

        {/* Admin case */}
        {user.role === "admin" && (
          <>
            <StatCard
              title="Total Students in School"
              value="650"
              icon={Building2}
              color="bg-cyan-500"
            />
            <StatCard
              title="Dropout Rate of School"
              value="15.7%"
              icon={PieChart}
              color="bg-emerald-600"
            />
            <StatCard
              title="Total Student Dropouts of school"
              value="67"
              icon={UserMinus}
              color="bg-rose-500"
            />
          </>
        )}

        {/* Subadmin case */}
        {user.role === "subAdmin" && (
          <>
            <StatCard
              title="Total Students in Class"
              value="65"
              icon={Building2}
              color="bg-cyan-500"
            />
            <StatCard
              title="Dropout Rate of Class"
              value="5.7%"
              icon={PieChart}
              color="bg-emerald-600"
            />
            <StatCard
              title="Total Student Dropouts of Class"
              value="6"
              icon={UserMinus}
              color="bg-rose-500"
            />
          </>
        )}
        
        {/* Make StudentDashboard larger */}
        <div className="col-span-full lg:col-span-4"> {/* Adjust grid to span more columns for StudentDashboard */}
          <StudentAdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
