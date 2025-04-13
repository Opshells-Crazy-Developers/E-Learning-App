import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ComparePlans from '../../components/ComparePlans';
import SubsTestimonials from '../../components/SubsTestimonials';

const Premium = () => {
  return (
    <div className="px-4 py-12 bg-gray-50 min-h-screen">
      {/* Main Card */}
      <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-yellow-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6">
          <h1 className="text-2xl font-bold text-center mb-1">Premium Plan</h1>
          <p className="text-sm text-center opacity-90">
            Go all-in with mentorship, certifications, and early access.
          </p>
        </div>

        {/* Features */}
        <div className="p-6 space-y-4">
          <h3 className="text-base font-semibold text-gray-800">What You’ll Get:</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              'Everything in Pro Plan',
              '1-on-1 mentor support',
              'Course certifications',
              'Early access to new content',
              'Premium support',
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
            className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg transition duration-300 mt-6"
          >
            Go Premium
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
  <div className="text-center mb-6">
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 inline-block">
      ⭐ Loved by Learners
    </h3>
    <p className="text-sm text-gray-600 mt-2">
      Hear what our Premium users have to say about their learning experience.
    </p>
  </div>

  {/* Optional: subtle animation wrapper */}
  <div className="animate-fade-in">
    <SubsTestimonials />
  </div>
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

export default Premium;
