// RevenueReport.jsx
import React from 'react';

function RevenueReport({ courses }) {
  const totalRevenue = courses.reduce((sum, course) => sum + course.revenue, 0);
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Revenue Report</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Total Revenue</div>
          <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Average Per Course</div>
          <div className="text-2xl font-bold">
            ${Math.round(totalRevenue / courses.length).toLocaleString()}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Average Per Student</div>
          <div className="text-2xl font-bold">
            ${Math.round(totalRevenue / (totalStudents || 1)).toLocaleString()}
          </div>
        </div>
      </div>
      <div>
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
              <th className="py-2 text-right text-xs font-medium text-gray-500 uppercase">Revenue</th>
              <th className="py-2 text-right text-xs font-medium text-gray-500 uppercase">Students</th>
              <th className="py-2 text-right text-xs font-medium text-gray-500 uppercase">Avg. Revenue/Student</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b">
                <td className="py-2 text-sm">{course.title}</td>
                <td className="py-2 text-sm text-right">${course.revenue.toLocaleString()}</td>
                <td className="py-2 text-sm text-right">{course.students}</td>
                <td className="py-2 text-sm text-right">
                  ${Math.round(course.revenue / (course.students || 1)).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RevenueReport;