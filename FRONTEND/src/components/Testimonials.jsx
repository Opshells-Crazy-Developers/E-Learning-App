// components/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aishwarya Patel',
    role: 'Frontend Developer',
    quote: 'learnity helped me land my first dev job! The frontend courses were clear, well-structured, and packed with projects that made my resume stand out.',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Rohan Mehta',
    role: 'Fullstack Engineer',
    quote: 'Amazing platform with hands-on projects. I especially loved the fullstack roadmap – it was detailed and aligned perfectly with real-world development needs.',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Neha Sharma',
    role: 'UI/UX Designer',
    quote: 'The design section is incredible. The content helped me sharpen my UI/UX skills and gain confidence to apply for remote internships. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Aditya Rao',
    role: 'DevOps Intern',
    quote: 'As someone new to DevOps, I found the tutorials super practical. They gave me the foundation I needed to crack my interview and get hands-on experience.',
    image: 'https://i.pravatar.cc/150?img=18',
  },
  {
    name: 'Sanya Kapoor',
    role: 'Backend Developer',
    quote: 'I loved how the backend content didn’t just stop at theory. From databases to APIs, every topic had a project that tied it all together beautifully.',
    image: 'https://i.pravatar.cc/150?img=39',
  },
  {
    name: 'Kunal Verma',
    role: 'Security Analyst',
    quote: 'learnity introduced me to system-level topics and Linux fundamentals. The real-world examples and easy explanations really helped me grasp concepts quickly.',
    image: 'https://i.pravatar.cc/150?img=49',
  },
];


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section className="bg-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our <span className='text-3xl font-bold mb-12 text-purple-600'>Students</span> Say
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white hover:shadow-xl shadow-md rounded-xl p-6 text-left transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">“{t.quote}”</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
