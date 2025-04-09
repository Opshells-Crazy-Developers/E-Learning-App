import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    title: 'Free',
    price: '₹0',
    features: ['Access to free courses', 'Basic community support', 'Limited content'],
    button: 'Start Free',
    badge: '',
    link: '/plans/free',
  },
  {
    title: 'Pro',
    price: '₹499/month',
    features: ['All Free Plan features', 'Access to premium courses', 'Priority support', 'Downloadable resources'],
    button: 'Subscribe Now',
    badge: 'Recommended',
    link: '/plans/pro',
  },
  {
    title: 'Premium',
    price: '₹999/month',
    features: [
      'All Pro Plan features',
      '1-on-1 mentor support',
      'Certification',
      'Early access to new content',
    ],
    button: 'Go Premium',
    badge: 'Best Value',
    link: '/plans/premium',
  },
];

const SubscriptionPlans = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Choose Your Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] flex flex-col justify-between"
          >
            {/* Badge */}
            {plan.badge && (
              <span className="absolute -top-3 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow">
                {plan.badge}
              </span>
            )}

            {/* Title & Price */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold text-purple-700 mb-4">{plan.price}</p>

              {/* Features */}
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <Check size={16} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Button */}
            <Link to={plan.link} className="w-full ">
              <button
                className={`w-full py-2 rounded-full font-semibold text-sm transition duration-300 cursor-pointer ${
                  plan.title === 'Free'
                    ? 'border border-purple-400 text-purple-600 hover:bg-purple-50'
                    : plan.title === 'Pro'
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90'
                }`}
              >
                {plan.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
