// components/Stats.js
import React from 'react';
import { Users, BookOpen, Globe } from 'lucide-react';

const stats = [
  { label: 'Students Enrolled', value: '2,400+', icon: Users },
  { label: 'Expert-Led Courses', value: '120+', icon: BookOpen },
  { label: 'Global Learners', value: '30+', icon: Globe },
];

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Why LearnSphere?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-purple-50 rounded-xl p-6 flex flex-col items-center"
            >
              <s.icon className="text-purple-600 mb-3" size={32} />
              <p className="text-2xl font-bold text-purple-700">{s.value}</p>
              <p className="text-gray-600 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
