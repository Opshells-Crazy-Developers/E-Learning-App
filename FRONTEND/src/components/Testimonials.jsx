// components/Testimonials.js
import React from 'react';

const testimonials = [
  {
    name: 'Aishwarya Patel',
    role: 'Frontend Developer',
    quote: 'LearnSphere helped me land my first dev job!',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Rohan Mehta',
    role: 'Fullstack Engineer',
    quote: 'Amazing courses with hands-on projects. Loved it!',
    image: 'https://i.pravatar.cc/150?img=12',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Students Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
