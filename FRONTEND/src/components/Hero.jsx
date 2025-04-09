import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-md px-4 py-1 rounded-full mb-4">
        <Flame size={20} />
        Ignite Your Learning Journey
      </div>
      <h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-800">
        Welcome to <span className="text-purple-600">Learnity</span>
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        Discover high-quality courses, learn from experts, and level up your tech skills — all in one place.
      </p>
      <Link
        to="/courses"
        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Explore now
      </Link>
    </motion.section>
  );
};

export default HeroSection;
