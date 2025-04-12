import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { Filter } from 'lucide-react';
import { getCourses } from '../features/courses/courseService';

const categories = [
  "Programming",
  "Design",
  "Cloud",
  "Security",
  "Data Science",
  "DevOps",
  "AI/ML"
];

const CourseCategories = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryCategory = queryParams.get('category')?.toLowerCase() || '';
  const querySearch = queryParams.get('search')?.toLowerCase() || '';

  const [selectedCategory, setSelectedCategory] = useState("Programming");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        console.error('Failed to fetch courses', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (queryCategory) {
      const found = categories.find(
        (cat) => cat.toLowerCase() === queryCategory
      );
      if (found) setSelectedCategory(found);
    }
  }, [queryCategory]);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      course.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = querySearch
      ? course.title.toLowerCase().includes(querySearch) ||
        course.description.toLowerCase().includes(querySearch) ||
        course.instructor.toLowerCase().includes(querySearch)
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          <Filter className="inline-block text-purple-600 mr-2" />
          Filter by Category
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border shadow-sm transition-all duration-200 ${
              selectedCategory === category
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-purple-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading courses...</p>
      ) : filteredCourses.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No courses found for this category.
        </p>
      )}
    </section>
  );
};

export default CourseCategories;
