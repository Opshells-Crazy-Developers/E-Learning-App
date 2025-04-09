import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import CourseCards from '../components/CourseCard';

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 101,
      title: "Mastering JavaScript",
      description: "Deep dive into modern JavaScript with ES6+, async, and more.",
      instructor: "Utkkarsh Deshpande",
      duration: "8 hours",
      level: "Intermediate",
      price: 29.99,
      thumbnail_url: "https://via.placeholder.com/300x180?text=JavaScript"
    },
    {
      id: 102,
      title: "React for Beginners",
      description: "Build interactive UIs with React from scratch.",
      instructor: "Pranav Joshi",
      duration: "6 hours",
      level: "Beginner",
      price: 0.00,
      thumbnail_url: "https://via.placeholder.com/300x180?text=React"
    },
    {
      id: 103,
      title: "Linux for Developers",
      description: "Learn essential Linux commands and workflows.",
      instructor: "Jane Smith",
      duration: "4 hours",
      level: "Beginner",
      price: 19.99,
      thumbnail_url: "https://via.placeholder.com/300x180?text=Linux"
    }
  ];

  return (
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
        {featuredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <CourseCards course={course} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedCourses;
