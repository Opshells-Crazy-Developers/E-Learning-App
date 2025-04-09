import React from 'react';
import ComparePlans from '../../components/ComparePlans';

const ProPlans = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Pro Plan</h2>
      <p className="text-center text-gray-700 max-w-xl mx-auto mb-10">
        Unlock premium courses, downloadable resources, and priority support with the Pro Plan.
      </p>

      <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl mb-12 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-purple-800">What You Get</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>Access to all Free Plan features</li>
          <li>Premium course library access</li>
          <li>Downloadable materials for offline study</li>
          <li>Priority email and chat support</li>
        </ul>
      </div>

      {/* New Sections */}
      <ComparePlans/>
    </div>
  );
};

export default ProPlans;
