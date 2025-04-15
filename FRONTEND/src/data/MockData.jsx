// mockData.js
export const mockCourses = [
  { id: 1, title: 'Introduction to React', students: 145, revenue: 8700, rating: 4.7, 
    instructor: 'Jane Smith', status: 'active', completionRate: 78 },
  { id: 2, title: 'Advanced JavaScript', students: 98, revenue: 5880, rating: 4.8, 
    instructor: 'John Doe', status: 'active', completionRate: 65 },
  { id: 3, title: 'Python for Beginners', students: 210, revenue: 10500, rating: 4.5, 
    instructor: 'Alan Walker', status: 'active', completionRate: 82 },
  { id: 4, title: 'Data Science Fundamentals', students: 87, revenue: 6090, rating: 4.6, 
    instructor: 'Maria Garcia', status: 'draft', completionRate: 0 },
];

export const mockUsers = [
  { id: 1, name: 'Emma Johnson', email: 'emma@example.com', role: 'student', coursesEnrolled: 2, 
    lastActive: '2025-04-10', status: 'active' },
  { id: 2, name: 'Michael Clark', email: 'michael@example.com', role: 'student', coursesEnrolled: 1, 
    lastActive: '2025-04-12', status: 'active' },
  { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'instructor', coursesEnrolled: 0, 
    lastActive: '2025-04-13', status: 'active' },
  { id: 4, name: 'John Doe', email: 'john@example.com', role: 'instructor', coursesEnrolled: 0, 
    lastActive: '2025-04-11', status: 'active' },
];