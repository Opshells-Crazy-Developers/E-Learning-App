import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { Filter } from 'lucide-react';
import { getCourses } from '../features/courses/courseService';

const categories = [
  "All",
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
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const urlCategory = queryParams.get('category') || 'All';
  const search = queryParams.get('search')?.toLowerCase() || '';

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (urlCategory && categories.includes(urlCategory)) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  // Update query params on category change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set('category', selectedCategory);
    navigate({ search: params.toString() }, { replace: true });
  }, [selectedCategory, navigate, location.search]);

  // Filtered courses based on category and search
  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;

    const matchesSearch = search
      ? course.title.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search) ||
        course.instructor.toLowerCase().includes(search)
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <Filter className="text-purple-600" />
        <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
      </div>

      <div className="flex gap-10">
        {/* Sidebar Filter */}
        <aside className="w-60 flex-shrink-0">
          <div className="sticky top-0 bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium border border-transparent transition-all duration-200 hover:bg-purple-100 hover:text-purple-600 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Course List */}
        <div className="flex-1">
          {/* Displaying Courses */}
          {loading ? (
            <p className="text-center text-gray-500 mt-10">Loading courses...</p>
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
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
