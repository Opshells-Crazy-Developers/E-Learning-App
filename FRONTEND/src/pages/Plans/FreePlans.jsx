import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ComparePlans from '../../components/ComparePlans';
import SubsTestimonials from '../../components/SubsTestimonials';

const Free = () => {
  return (
    <div className="px-4 py-12 bg-gray-50 min-h-screen">
      {/* Main Card */}
      <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
          <h1 className="text-2xl font-bold text-center mb-1">Free Plan</h1>
          <p className="text-sm text-center opacity-90">
            Begin your journey with access to selected courses and community.
          </p>
        </div>

        {/* Features */}
        <div className="p-6 space-y-4">
          <h3 className="text-base font-semibold text-gray-800">What You’ll Get:</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              'Access to selected free courses',
              'Basic community support',
              'Limited learning resources',
              'No certification included',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/"
            className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition duration-300 mt-6"
          >
            Start Free
          </Link>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Compare Plans</h3>
        <ComparePlans />
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto mt-20">
        <SubsTestimonials />
      </div>

      {/* Back CTA */}
      <div className="text-center mt-16">
        <Link
          to="/subscriptions"
          className="inline-block text-purple-600 font-bold hover:underline font-large text-sm"
        >
          ← Back to Subscription Plans
        </Link>
      </div>
    </div>
  );
};

export default Free;
