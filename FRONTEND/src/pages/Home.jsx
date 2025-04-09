import React from 'react';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import HeroSection from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import CourseCategories from '../components/CourseCategories';
import SubscriptionPlans from '../components/Subscriptions';

const Home = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <HeroSection/>
      <FeaturedCourses />
      <CourseCategories/>
      <SubscriptionPlans/>
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Home;
