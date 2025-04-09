import React from 'react';
import { Check, X } from 'lucide-react';

const plans = ['Free', 'Pro', 'Premium'];

const features = [
  {
    name: 'Access to Courses',
    availability: [true, true, true],
  },
  {
    name: 'Premium Courses',
    availability: [false, true, true],
  },
  {
    name: 'Downloadable Resources',
    availability: [false, true, true],
  },
  {
    name: 'Community Support',
    availability: ['Basic', 'Priority', 'Premium'],
  },
  {
    name: 'Certification',
    availability: [false, false, true],
  },
  {
    name: '1-on-1 Mentorship',
    availability: [false, false, true],
  },
  {
    name: 'Early Access to Content',
    availability: [false, false, true],
  },
];

const ComparePlans = () => {
  return (
    <div className="overflow-x-auto mt-16">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="text-left py-3 px-4 text-gray-500 font-semibold border-b">Features</th>
            {plans.map((plan, index) => (
              <th
                key={index}
                className="text-center py-3 px-4 text-purple-700 font-semibold border-b bg-gray-50"
              >
                {plan}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 transition">
              <td className="py-3 px-4 text-gray-700">{feature.name}</td>
              {feature.availability.map((value, i) => (
                <td key={i} className="text-center py-3 px-4">
                  {value === true ? (
                    <Check size={18} className="text-green-500 mx-auto" />
                  ) : value === false ? (
                    <X size={18} className="text-red-400 mx-auto" />
                  ) : (
                    <span className="text-sm text-gray-600">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparePlans;
