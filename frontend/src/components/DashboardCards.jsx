import { useEffect, useState } from 'react';

const DashboardCards = ({ refresh }) => {
  const [stats, setStats] = useState({ total: 0, active: 0, deleted: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/students/stats/dashboard')
      .then(res => res.json())
      .then(data => setStats(data));
  }, [refresh]);

  const Card = ({ title, value }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );

  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    <Card title="Total Students" value={stats.total} />
    <Card title="Active Students" value={stats.active} />
    <Card title="Deleted Students" value={stats.deleted} />
  </div>
);

};

export default DashboardCards;
