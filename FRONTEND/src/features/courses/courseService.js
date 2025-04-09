export const allCourses = [
  {
    id: 1,
    title: "JavaScript Essentials",
    description: "Understand JavaScript fundamentals from scratch.",
    instructor: "Instructor A",
    category: "Programming",
    duration: "5 hours",
    level: "Beginner",
    price: 499,
    originalPrice: 1999,
    rating: 4.4,
    ratingCount: 1500,
    learners: 9500,
    thumbnail_url: "https://via.placeholder.com/300x180?text=JavaScript"
  },
  {
    id: 2,
    title: "UI/UX for Beginners",
    description: "Learn modern design principles and tools.",
    instructor: "Instructor B",
    category: "Design",
    duration: "4 hours",
    level: "Beginner",
    price: 699,
    originalPrice: 2499,
    rating: 4.7,
    ratingCount: 2100,
    learners: 12000,
    thumbnail_url: "https://via.placeholder.com/300x180?text=UI%2FUX"
  },
  {
    id: 3,
    title: "AWS Cloud Bootcamp",
    description: "Master the basics of cloud infrastructure on AWS.",
    instructor: "Instructor C",
    category: "Cloud",
    duration: "6 hours",
    level: "Intermediate",
    price: 799,
    originalPrice: 2999,
    rating: 4.6,
    ratingCount: 3800,
    learners: 18000,
    thumbnail_url: "https://via.placeholder.com/300x180?text=AWS"
  },
  {
    id: 4,
    title: "Cybersecurity 101",
    description: "Get started with security fundamentals.",
    instructor: "Instructor D",
    category: "Security",
    duration: "3.5 hours",
    level: "Beginner",
    price: 499,
    originalPrice: 1999,
    rating: 4.3,
    ratingCount: 900,
    learners: 4500,
    thumbnail_url: "https://via.placeholder.com/300x180?text=Security"
  },
  {
    id: 5,
    title: "React Crash Course",
    description: "Build modern UIs with React.",
    instructor: "Instructor E",
    category: "Programming",
    duration: "6 hours",
    level: "Beginner",
    price: 0,
    originalPrice: 1499,
    rating: 4.8,
    ratingCount: 5200,
    learners: 21000,
    thumbnail_url: "https://via.placeholder.com/300x180?text=React"
  },
  {
    id: 6,
    title: "Mastering JavaScript",
    description: "Deep dive into modern JavaScript with ES6+, async, and more.",
    instructor: "Instructor F",
    category: "Programming",
    duration: "8 hours",
    level: "Intermediate",
    price: 2490,          // 29.99 USD → ₹2490 approx
    originalPrice: 8290,  // 99.99 USD → ₹8290 approx
    rating: 4.5,
    ratingCount: 3300,
    learners: 10500,
    thumbnail_url: "https://via.placeholder.com/300x180?text=JavaScript+Pro"
  },
  {
    id: 7,
    title: "Linux for Beginners",
    description: "Learn essential Linux commands and workflows.",
    instructor: "Instructor G",
    category: "DevOps",
    duration: "4 hours",
    level: "Beginner",
    price: 1660,          // 19.99 USD → ₹1660 approx
    originalPrice: 7450,  // 89.99 USD → ₹7450 approx
    rating: 4.2,
    ratingCount: 1200,
    learners: 7500,
    thumbnail_url: "https://via.placeholder.com/300x180?text=Linux"
  }
];

// Optional helper to fetch one by ID
export const getCourseById = (id) =>
  allCourses.find((course) => course.id === parseInt(id));
