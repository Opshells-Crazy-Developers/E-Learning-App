// components/Stats.js
import React from 'react';
import CountUp from 'react-countup';
import { Users, BookOpen, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Students Enrolled', value: 2500, suffix: '+', icon: Users },
  { label: 'Expert-Led Courses', value: 120, suffix: '+', icon: BookOpen },
  { label: 'Global Learners', value: 30, suffix: '+', icon: Globe },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why <span className='text-3xl font-bold mb-12 text-purple-600'>Learnity</span> ?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="bg-purple-50 rounded-xl p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <s.icon className="text-purple-600 mb-3" size={32} />
              <p className="text-2xl font-bold text-purple-700">
                {inView ? (
                  <CountUp
                    end={s.value}
                    duration={5}
                    separator=","
                    suffix={s.suffix || ''}
                  />
                ) : (
                  '0'
                )}
              </p>
              <p className="text-gray-600 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
