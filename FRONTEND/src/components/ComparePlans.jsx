import React from 'react';

const ComparePlans = () => {
  return (
    <div className="mt-16 px-4">
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Compare All Plans</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Feature</th>
              <th className="border px-4 py-2">Free</th>
              <th className="border px-4 py-2">Pro</th>
              <th className="border px-4 py-2">Premium</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Access to Courses', 'Basic', 'Premium', 'All Access'],
              ['Support', 'Community', 'Priority', '1-on-1 Mentor'],
              ['Downloadable Resources', 'Limited', 'Included', 'Included'],
              ['Certification', '✖️', '✔️', '✔️'],
              ['Mentorship', '✖️', '✖️', '✔️'],
            ].map(([feature, free, pro, premium], i) => (
              <tr key={i} className="even:bg-gray-50">
                <td className="border px-4 py-2 font-medium">{feature}</td>
                <td className="border px-4 py-2">{free}</td>
                <td className="border px-4 py-2">{pro}</td>
                <td className="border px-4 py-2">{premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePlans;
