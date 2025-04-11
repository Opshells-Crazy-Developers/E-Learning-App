const allCourses = [
  {
    "id": 1,
    "title": "JavaScript Essentials",
    "description": "Understand JavaScript fundamentals from scratch.",
    "instructor": "Instructor A",
    "category": "Programming",
    "duration": "5 hours",
    "level": "Beginner",
    "price": 499,
    "originalPrice": 1999,
    "rating": 4.4,
    "ratingCount": 1500,
    "learners": 9500,
    "thumbnail_url": "https://via.placeholder.com/300x180?text=JavaScript",
    "modules": [
      {
        "title": "Module 1: Getting Started",
        "lessons": [
          { "id": 101, "title": "Introduction to JavaScript", "duration": "15:30", "videoSrc": "/videos/js-essentials/module1/intro.mp4" },
          { "id": 102, "title": "Setting up Your Environment", "duration": "10:45", "videoSrc": "/videos/js-essentials/module1/setup.mp4" },
          { "id": 103, "title": "Basic Syntax", "duration": "20:00", "videoSrc": "/videos/js-essentials/module1/syntax.mp4" }
        ]
      },
      {
        "title": "Module 2: Core Concepts",
        "lessons": [
          { "id": 201, "title": "Variables and Data Types", "duration": "18:15", "videoSrc": "/videos/js-essentials/module2/variables.mp4" },
          { "id": 202, "title": "Operators", "duration": "12:00", "videoSrc": "/videos/js-essentials/module2/operators.mp4" },
          { "id": 203, "title": "Control Flow", "duration": "25:45", "videoSrc": "/videos/js-essentials/module2/control-flow.mp4" }
        ]
      }
      // Add more modules and lessons as needed
    ],
    "notes": [
      { "id": 1, "title": "Key Concepts - Module 1", "content": "Remember the difference between let, const, and var." },
      { "id": 2, "title": "Best Practices - Variables", "content": "Use descriptive names for your variables." }
      // Add more notes as needed
    ]
  },
  {
    "id": 2,
    "title": "UI/UX for Beginners",
    "description": "Learn modern design principles and tools.",
    "instructor": "Instructor B",
    "category": "Design",
    "duration": "4 hours",
    "level": "Beginner",
    "price": 699,
    "originalPrice": 2499,
    "rating": 4.7,
    "ratingCount": 2100,
    "learners": 12000,
    "thumbnail_url": "https://via.placeholder.com/300x180?text=UI%2FUX",
    "modules": [
      {
        "title": "Module 1: Introduction to UI/UX",
        "lessons": [
          { "id": 301, "title": "What is UI/UX?", "duration": "12:00", "videoSrc": "/videos/ui-ux/module1/intro.mp4" },
          { "id": 302, "title": "User-Centered Design", "duration": "18:45", "videoSrc": "/videos/ui-ux/module1/ucd.mp4" }
        ]
      },
      {
        "title": "Module 2: Design Principles",
        "lessons": [
          { "id": 401, "title": "Typography Basics", "duration": "15:30", "videoSrc": "/videos/ui-ux/module2/typography.mp4" },
          { "id": 402, "title": "Color Theory", "duration": "10:15", "videoSrc": "/videos/ui-ux/module2/colors.mp4" },
          { "id": 403, "title": "Layout and Hierarchy", "duration": "22:00", "videoSrc": "/videos/ui-ux/module2/layout.mp4" }
        ]
      }
      // Add more modules and lessons
    ],
    "notes": [
      { "id": 3, "title": "Key Principles - UI", "content": "Consistency is crucial in UI design." },
      { "id": 4, "title": "Understanding UX", "content": "Focus on the user's needs and pain points." }
      // Add more notes
    ]
  },
  {
    "id": 3,
    "title": "AWS Cloud Bootcamp",
    "description": "Master the basics of cloud infrastructure on AWS.",
    "instructor": "Instructor C",
    "category": "Cloud",
    "duration": "6 hours",
    "level": "Intermediate",
    "price": 799,
    "originalPrice": 2999,
    "rating": 4.6,
    "ratingCount": 3800,
    "learners": 18000,
    "thumbnail_url": "https://via.placeholder.com/300x180?text=AWS",
    "modules": [
      {
        "title": "Module 1: Introduction to AWS",
        "lessons": [
          { "id": 501, "title": "What is Cloud Computing?", "duration": "14:00", "videoSrc": "/videos/aws/module1/intro.mp4" },
          { "id": 502, "title": "AWS Core Services", "duration": "20:30", "videoSrc": "/videos/aws/module1/services.mp4" }
        ]
      },
      {
        "title": "Module 2: Setting Up Your AWS Account",
        "lessons": [
          { "id": 601, "title": "Account Creation", "duration": "10:00", "videoSrc": "/videos/aws/module2/account.mp4" },
          { "id": 602, "title": "IAM Basics", "duration": "18:15", "videoSrc": "/videos/aws/module2/iam.mp4" }
        ]
      }
      // Add more modules and lessons
    ],
    "notes": [
      { "id": 5, "title": "AWS Terminology", "content": "Familiarize yourself with terms like EC2, S3, VPC." },
      { "id": 6, "title": "Security Best Practices", "content": "Always enable Multi-Factor Authentication (MFA)." }
      // Add more notes
    ]
  },
  {
    "id": 4,
    "title": "Cybersecurity 101",
    "description": "Get started with security fundamentals.",
    "instructor": "Instructor D",
    "category": "Security",
    "duration": "3.5 hours",
    "level": "Beginner",
    "price": 499,
    "originalPrice": 1999,
    "rating": 4.3,
    "ratingCount": 900,
    "learners": 4500,
    "thumbnail_url": "https://via.placeholder.com/300x180?text=Security",
    "modules": [
      {
        "title": "Module 1: Introduction to Cybersecurity",
        "lessons": [
          { "id": 701, "title": "The Importance of Security", "duration": "16:45", "videoSrc": "/videos/cybersecurity/module1/intro.mp4" },
          { "id": 702, "title": "Common Threats", "duration": "22:15", "videoSrc": "/videos/cybersecurity/module1/threats.mp4" }
        ]
      },
      {
        "title": "Module 2: Basic Security Measures",
        "lessons": [
          { "id": 801, "title": "Password Management", "duration": "11:30", "videoSrc": "/videos/cybersecurity/module2/passwords.mp4" },
          { "id": 802, "title": "Understanding Firewalls", "duration": "19:00", "videoSrc": "/videos/cybersecurity/module2/firewalls.mp4" }
        ]
      }
      // Add more modules and lessons
    ],
    "notes": [
      { "id": 7, "title": "Password Tips", "content": "Use a combination of uppercase, lowercase, numbers, and symbols." },
      { "id": 8, "title": "Staying Safe Online", "content": "Be cautious of phishing attempts." }
      // Add more notes
    ]
  },
  {
    "id": 5,
    "title": "React Crash Course",
    "description": "Build modern UIs with React.",
    "instructor": "Instructor E",
    "category": "Programming",
    "duration": "6 hours",
    "level": "Beginner",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "ratingCount": 5200,
    "learners": 21000,
    "thumbnail_url": "https://via.placeholder.com/300x180?text=React",
    "modules": [
      {
        "title": "Module 1: Introduction to React",
        "lessons": [
          { "id": 901, "title": "What is React?", "duration": "13:00", "videoSrc": "/videos/react/module1/intro.mp4" },
          { "id": 902, "title": "Setting Up Your First Project", "duration": "17:45", "videoSrc": "/videos/react/module1/setup.mp4" },
          { "id": 903, "title": "JSX Basics", "duration": "21:30", "videoSrc": "/videos/react/module1/jsx.mp4" }
        ]
      },
      {
        "title": "Module 2: Components and Props",
        "lessons": [
          { "id": 1001, "title": "Functional Components", "duration": "16:00", "videoSrc": "/videos/react/module2/functional.mp4" },
          { "id": 1002, "title": "Props in React", "duration": "19:15", "videoSrc": "/videos/react/module2/props.mp4" }
        ]
      }
      // Add more modules and lessons
    ],
    "notes": [
      { "id": 9, "title": "React Fundamentals", "content": "Components are the building blocks of React applications." },
      { "id": 10, "title": "Working with Props", "content": "Props are read-only and used to pass data down." }
      // Add more notes
    ]
  },
  {
    "id": 6,
    "title": "Mastering JavaScript",
    "description": "Deep dive into modern JavaScript with ES6+, async, and more.",
    "instructor": "Instructor F",
    "category": "Programming",
    "duration": "8 hours",
    "level": "Intermediate",
    "price": 2490,
    "originalPrice": 8290,
    "rating": 4.5,
    "ratingCount": 3300,
    "learners": 10500,
    "thumbnail_url": "https://via.placeholder.com/300x180?text=JavaScript+Pro",
    "modules": [
      {
        "title": "Module 1: ES6+ Features",
        "lessons": [
          { "id": 1101, "title": "Let and Const", "duration": "12:45", "videoSrc": "/videos/js-mastering/module1/let-const.mp4" },
          { "id": 1102, "title": "Arrow Functions", "duration": "15:30", "videoSrc": "/videos/js-mastering/module1/arrow-functions.mp4" },
          { "id": 1103, "title": "Destructuring", "duration": "18:00", "videoSrc": "/videos/js-mastering/module1/destructuring.mp4" }
        ]
      },
      {
        "title": "Module 2: Asynchronous JavaScript",
        "lessons": [
          { "id": 1201, "title": "Promises", "duration": "20:15", "videoSrc": "/videos/js-mastering/module2/promises.mp4" },
          { "id": 1202, "title": "Async/Await", "duration": "24:00", "videoSrc": "/videos/js-mastering/module2/async-await.mp4" }
        ]
      }
      // Add more modules and lessons
    ],
    "notes": [
      { "id": 11, "title": "ES6+ Highlights", "content": "Understand the benefits of new ES6+ features." },
      { "id": 12, "title": "Asynchronous Patterns", "content": "Learn how to handle asynchronous operations effectively." }
      // Add more notes
    ]
  },
  {
    "id": 7,
    "title": "Linux for Beginners",
    "description": "Learn essential Linux commands and workflows.",
    "instructor": "Instructor G",
    "category": "DevOps",
    "duration": "4 hours",
    "level": "Beginner",
    "price": 1660,
    "originalPrice": 7450,
    "rating": 4.2,
    "ratingCount": 1200,
    "learners": 7500,
    "thumbnail_url": "https://via.placeholder.com/300x180?text=Linux",
    "modules": [
      {
        "title": "Module 1: Introduction to Linux",
        "lessons": [
          { "id": 1301, "title": "What is Linux?", "duration": "11:00", "videoSrc": "/videos/linux/module1/intro.mp4" },
          { "id": 1302, "title": "Basic Terminal Commands", "duration": "23:30", "videoSrc": "/videos/linux/module1/commands.mp4" }
        ]
      },
      {
        "title": "Module 2: File System and Navigation",
        "lessons": [
          { "id": 1401, "title": "Understanding the File System", "duration": "17:15", "videoSrc": "/videos/linux/module2/filesystem.mp4" },
          { "id": 1402, "title": "Navigating Directories", "duration": "14:45", "videoSrc": "/videos/linux/module2/navigation.mp4" }
        ]
      }
      // Add more modules and lessons
    ],
    "notes": [
      { "id": 13, "title": "Essential Commands", "content": "Memorize basic commands like ls, cd, mkdir." },
      { "id": 14, "title": "Working with Files", "content": "Learn how to create, edit, and delete files." }
      // Add more notes
    ]
  }
]


export const getCourseById = (id) => {
  return courses.find((course) => course.id === id);
};

export default allCourses;
