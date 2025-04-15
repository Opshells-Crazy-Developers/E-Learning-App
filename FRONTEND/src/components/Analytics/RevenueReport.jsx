import React
 from "react";
const RevenueChart = ({ data, isLoading = true }) =>{
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-1">Revenue Report</h2>
          <p className="text-gray-600 text-sm">Monthly revenue overview</p>
        </div>
        <select className="px-3 py-2 border rounded-lg text-sm">
          <option>Last 6 months</option>
          <option>Last 12 months</option>
          <option>Last 30 days</option>
        </select>
      </div>
      <div className="h-64 flex items-end justify-between gap-2">
        {months.map((month, i) => (
          <div key={i} className="w-full">
            {isLoading ? (
              <div className="h-full flex items-end">
                <div className="w-full h-32 bg-gray-200 animate-pulse rounded-t-lg"></div>
              </div>
            ) : (
              <div
                className="bg-blue-100 rounded-t-lg hover:bg-blue-200 transition-all cursor-pointer"
                style={{ height: data && data[i] ? `${(data[i].amount / 10000) * 100}%` : '0%' }}
              >
                <div className="h-full relative">
                  {data && data[i] && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      ${data[i].amount.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>
            )}
            <p className="text-center text-sm mt-2 text-gray-600">{month}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopCourses({ courses, isLoading = true }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-1">Top Courses</h2>
          <p className="text-gray-600 text-sm">Best performing courses</p>
        </div>
      </div>
      <div className="space-y-4">
        {isLoading ? (
          Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-16 bg-gray-200 rounded-lg"></div>
              </div>
            ))
        ) : (
          courses?.map((course, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">{course.name}</h3>
                <p className="text-sm text-gray-600">{course.students.toLocaleString()} students</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">${course.revenue.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RevenueChart;