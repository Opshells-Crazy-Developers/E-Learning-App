import React from 'react';
import { Link } from 'react-router-dom';
import ComparePlans from '../../components/ComparePlans';
import Testimonials from '../../components/Testimonials';

const Free = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Free Plan</h2>
      <p className="text-center text-gray-700 max-w-xl mx-auto mb-10">
        Get started with our Free Plan – explore a selection of courses and become part of our learning community.
      </p>

      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-12">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">What’s Included</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>Access to selected free courses</li>
          <li>Basic community support</li>
          <li>Limited learning resources</li>
          <li>No certification</li>
        </ul>
      </div>

      <ComparePlans />
      <Testimonials />

      <Link
        to="/subscriptions"
        className="inline-block mt-12 text-purple-600 hover:underline text-sm text-center w-full"
      >
        ← Back to Subscription Plans
      </Link>
    </div>
  );
};

export default Free;
