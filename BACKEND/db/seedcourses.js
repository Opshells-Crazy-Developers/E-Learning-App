const mysql = require('mysql2');

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pranav@1402',
  database: 'elearning_app'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('✅ Connected to the database');
});

// Structured course data
const courseData = [
  {
    name: 'React.js Full Course',
    description: 'Complete guide to learning React from scratch.',
    modules: [
      {
        title: 'Getting Started with React',
        description: 'Basics of React setup',
        lessons: [
          { title: 'Lesson 1: What is React?', content: 'An introduction to React and its ecosystem' },
          { title: 'Lesson 2: Creating a React App', content: 'Setup React using Vite or CRA' },
          { title: 'Lesson 3: JSX Explained', content: 'Understanding JSX syntax and usage' },
          { title: 'Lesson 4: Props and State', content: 'Managing data in React components' },
          { title: 'Lesson 5: useEffect Hook', content: 'Side effects and lifecycle in React' },
          { title: 'Lesson 6: useState Deep Dive', content: 'Using useState with arrays and objects' },
          { title: 'Lesson 7: Event Handling', content: 'Handling user events in React' },
          { title: 'Lesson 8: Conditional Rendering', content: 'Rendering based on logic' },
          { title: 'Lesson 9: Lists and Keys', content: 'Rendering arrays with keys' },
          { title: 'Lesson 10: Forms in React', content: 'Working with inputs and form data' },
          { title: 'Lesson 11: useRef and DOM', content: 'Accessing DOM nodes' },
          { title: 'Lesson 12: useReducer Hook', content: 'Using reducers for state management' },
          { title: 'Lesson 13: Context API', content: 'Global state without prop drilling' },
          { title: 'Lesson 14: Custom Hooks', content: 'Reusing logic across components' },
          { title: 'Lesson 15: Routing with React Router', content: 'Adding pages and navigation' },
          { title: 'Lesson 16: Fetching APIs', content: 'Data fetching with useEffect' },
          { title: 'Lesson 17: Error Boundaries', content: 'Handling UI errors gracefully' },
          { title: 'Lesson 18: Lazy Loading Components', content: 'Improving performance' },
          { title: 'Lesson 19: Deploying React App', content: 'Pushing project live with Netlify or Vercel' },
        ]
      }
    ]
  },
  {
    name: 'MySQL Full Course',
    description: 'Master MySQL from basics to advanced queries and optimization.',
    modules: [
      {
        title: 'MySQL Essentials',
        description: 'Introduction and basic SQL operations',
        lessons: Array.from({ length: 31 }, (_, i) => ({
          title: `Lesson ${i + 1}: MySQL Topic ${i + 1}`,
          content: `Detailed explanation of MySQL concept ${i + 1}`
        }))
      }
    ]
  }
];

const insertCourseData = () => {
  courseData.forEach(course => {
    const courseQuery = 'INSERT INTO courses (title, description) VALUES (?, ?)';
    db.query(courseQuery, [course.name, course.description], (err, courseResult) => {
      if (err) {
        console.error('❌ Error inserting course:', err);
        return;
      }
      const courseId = courseResult.insertId;
      console.log(`✅ Inserted course '${course.name}' with ID ${courseId}`);

      course.modules.forEach(module => {
const moduleQuery = 'INSERT INTO modules (course_id, title, description) VALUES (?, ?, ?)';
        db.query(moduleQuery, [courseId, module.title, module.description], (err, moduleResult) => {
          if (err) {
            console.error('❌ Error inserting module:', err);
            return;
          }
          const moduleId = moduleResult.insertId;
          console.log(`  📦 Inserted module '${module.title}' under course '${course.name}'`);

          module.lessons.forEach(lesson => {
            const lessonQuery = 'INSERT INTO lessons (module_id, title, content) VALUES (?, ?, ?)';
            db.query(lessonQuery, [moduleId, lesson.title, lesson.content], (err, lessonResult) => {
              if (err) {
                console.error('❌ Error inserting lesson:', err);
                return;
              }
              console.log(`    📘 Inserted lesson '${lesson.title}'`);
            });
          });
        });
      });
    });
  });
};

insertCourseData();
