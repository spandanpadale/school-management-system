import { useState } from 'react';
import DashboardCards from '../components/DashboardCards';
import StudentTable from '../components/StudentTable';
import AddStudentForm from '../components/AddStudentForm';

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const reloadData = () => {
    setRefresh(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Centered container */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-10">
          Student Management System
        </h1>

        {/* Form */}
        <AddStudentForm onStudentAdded={reloadData} />

        {/* Cards */}
        <DashboardCards refresh={refresh} />

        {/* Table */}
        <StudentTable
          refresh={refresh}
          onActionComplete={reloadData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
