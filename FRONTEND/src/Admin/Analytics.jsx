import React, { useState, useEffect } from 'react';
import {
  Users,
  BookOpen,
  GraduationCap,
  DollarSign,
  TrendingUp,
  Clock,
} from 'lucide-react';
import RevenueChart from '../components/Analytics/RevenueReport';
import StatCard from '../components/Analytics/StatCard';
import AdminLayout from './AdminLayout';

const Analytics =()=> {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState([
    {
      title: 'Total Students',
      icon: Users,
    },
    {
      title: 'Active Courses',
      icon: BookOpen,
    },
    {
      title: 'Completion Rate',
      icon: GraduationCap,
    },
    {
      title: 'Total Revenue',
      icon: DollarSign,
    },
  ]);
  const [revenueData, setRevenueData] = useState();
  const [topCourses, setTopCourses] = useState();

  useEffect(() => {
    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
      <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your e-learning platform's performance</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white rounded-lg border hover:bg-gray-50">
              <Clock className="w-4 h-4" />
              Last 30 days
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-700">
              <TrendingUp className="w-4 h-4" />
              Generate Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} isLoading={isLoading} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart data={revenueData} isLoading={isLoading} />
        </div>
      </div>
    </div>

    </AdminLayout>
  );
}

export default Analytics;
