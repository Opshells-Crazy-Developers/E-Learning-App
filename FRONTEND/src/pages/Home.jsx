import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CourseCard from '../components/coursecards';
import { BookOpen, Flame } from 'lucide-react';

// New sections
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the basics of React.js and build interactive UIs.',
    },
    {
      id: 2,
      title: 'Node.js Essentials',
      description: 'Understand backend with Node.js and Express.',
    },
    {
      id: 3,
      title: 'Fullstack Web Dev',
      description: 'Master frontend and backend development together.',
    },
  ];

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-4 py-1 rounded-full mb-4">
          <Flame size={16} />
          Ignite Your Learning Journey
        </div>
        <h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-800">
          Welcome to <span className="text-purple-600">LearnSphere</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Discover high-quality courses, learn from experts, and level up your web development skills — all in one place.
        </p>
        <Link
          to="/courses"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Browse Courses
        </Link>
      </motion.section>

      {/* Featured Courses */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-purple-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Featured Courses</h2>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Platform Stats */}
      <Stats />

      {/* Student Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;
