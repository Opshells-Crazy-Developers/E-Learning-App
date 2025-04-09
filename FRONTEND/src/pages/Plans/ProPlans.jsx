import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ComparePlans from '../../components/ComparePlans';

const Pro = () => {
  return (
    <div className="px-4 py-12 bg-gray-50 min-h-screen">
      {/* Main Card */}
      <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-purple-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6">
          <h1 className="text-2xl font-bold text-center mb-1">Pro Plan</h1>
          <p className="text-sm text-center opacity-90">
            Unlock full access to premium content and exclusive resources.
          </p>
        </div>

        {/* Features */}
        <div className="p-6 space-y-4">
          <h3 className="text-base font-semibold text-gray-800">What You’ll Get:</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              'Everything in Free Plan',
              'Access to all premium courses',
              'Downloadable learning resources',
              'Priority community support',
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
            className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 rounded-lg transition duration-300 mt-6"
          >
            Subscribe Now
          </Link>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Compare Plans</h3>
        <ComparePlans />
      </div>

      {/* Why Upgrade Section - Interactive */}
      <div className="max-w-5xl mx-auto mt-20 px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 inline-block">
            💡 Why Upgrade?
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Hear what Pro users have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "The Pro Plan gave me access to real-world resources I couldn't find elsewhere.",
              name: "Aarav M.",
            },
            {
              quote: "Priority support and premium content made learning much smoother.",
              name: "Megha P.",
            },
            {
              quote: "The downloadable materials were a game-changer for my prep!",
              name: "Rahul S.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-purple-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <p className="text-purple-700 text-sm font-medium leading-relaxed italic transition-colors duration-200">
                  “{testimonial.quote}”
                </p>
                <p className="text-right text-gray-600 font-semibold text-sm">
                  — {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back CTA */}
      <div className="text-center mt-16">
        <Link
          to="/subscriptions"
          className="inline-block text-purple-600 hover:underline font-medium text-sm"
        >
          ← Back to Subscription Plans
        </Link>
      </div>
    </div>
  );
};

export default Pro;
