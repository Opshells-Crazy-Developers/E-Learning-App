import React from 'react';
import { Link } from 'react-router-dom';
import ComparePlans from '../../components/ComparePlans';
import Testimonials from '../../components/Testimonials';

const Premium = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Premium Plan</h2>
      <p className="text-center text-gray-700 max-w-xl mx-auto mb-10">
        Get the complete learning experience with personal mentorship, early access, certifications, and more!
      </p>

      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl mb-12 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-indigo-800">What You Get</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>All Pro Plan features</li>
          <li>1-on-1 mentor support</li>
          <li>Course completion certificates</li>
          <li>Early access to new course drops</li>
          <li>Exclusive learning paths & career prep</li>
        </ul>
      </div>

      <ComparePlans/>
      <Testimonials />

      <Link
        to="/subscriptions"
        className="inline-block mt-12 text-indigo-600 hover:underline text-sm text-center w-full"
      >
        ← Back to Subscription Plans
      </Link>
    </div>
  );
};

export default Premium;
