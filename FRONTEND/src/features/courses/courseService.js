// courseService.js
export const getCourses = async () => {
  const allCourses = [
    // Existing courses
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
      thumbnail_url: "https://via.placeholder.com/300x180?text=JavaScript",
      modules: [
        {
          title: "Module 1: Getting Started",
          lessons: [
            { id: 101, title: "Introduction to JavaScript", duration: "15:30", videoSrc: "/videos/js-essentials/module1/intro.mp4" },
            { id: 102, title: "Setting up Your Environment", duration: "10:45", videoSrc: "/videos/js-essentials/module1/setup.mp4" },
            { id: 103, title: "Basic Syntax", duration: "20:00", videoSrc: "/videos/js-essentials/module1/syntax.mp4" }
          ]
        },
        {
          title: "Module 2: Core Concepts",
          lessons: [
            { id: 201, title: "Variables and Data Types", duration: "18:15", videoSrc: "/videos/js-essentials/module2/variables.mp4" },
            { id: 202, title: "Operators", duration: "12:00", videoSrc: "/videos/js-essentials/module2/operators.mp4" },
            { id: 203, title: "Control Flow", duration: "25:45", videoSrc: "/videos/js-essentials/module2/control-flow.mp4" }
          ]
        }
      ],
      notes: [
        { id: 1, title: "Key Concepts - Module 1", content: "Remember the difference between let, const, and var." },
        { id: 2, title: "Best Practices - Variables", content: "Use descriptive names for your variables." }
      ]
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
      thumbnail_url: "https://via.placeholder.com/300x180?text=UI%2FUX",
      modules: [
        {
          title: "Module 1: Introduction to UI/UX",
          lessons: [
            { id: 301, title: "What is UI/UX?", duration: "12:00", videoSrc: "/videos/ui-ux/module1/intro.mp4" },
            { id: 302, title: "User-Centered Design", duration: "18:45", videoSrc: "/videos/ui-ux/module1/ucd.mp4" }
          ]
        },
        {
          title: "Module 2: Design Principles",
          lessons: [
            { id: 401, title: "Typography Basics", duration: "15:30", videoSrc: "/videos/ui-ux/module2/typography.mp4" },
            { id: 402, title: "Color Theory", duration: "10:15", videoSrc: "/videos/ui-ux/module2/colors.mp4" },
            { id: 403, title: "Layout and Hierarchy", duration: "22:00", videoSrc: "/videos/ui-ux/module2/layout.mp4" }
          ]
        }
      ],
      notes: [
        { id: 3, title: "Key Principles - UI", content: "Consistency is crucial in UI design." },
        { id: 4, title: "Understanding UX", content: "Focus on the user's needs and pain points." }
      ]
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
      thumbnail_url: "https://via.placeholder.com/300x180?text=AWS",
      modules: [
        {
          title: "Module 1: Introduction to AWS",
          lessons: [
            { id: 501, title: "What is Cloud Computing?", duration: "14:00", videoSrc: "/videos/aws/module1/intro.mp4" },
            { id: 502, title: "AWS Core Services", duration: "20:30", videoSrc: "/videos/aws/module1/services.mp4" }
          ]
        },
        {
          title: "Module 2: Setting Up Your AWS Account",
          lessons: [
            { id: 601, title: "Account Creation", duration: "10:00", videoSrc: "/videos/aws/module2/account.mp4" },
            { id: 602, title: "IAM Basics", duration: "18:15", videoSrc: "/videos/aws/module2/iam.mp4" }
          ]
        }
      ],
      notes: [
        { id: 5, title: "AWS Terminology", content: "Familiarize yourself with terms like EC2, S3, VPC." },
        { id: 6, title: "Security Best Practices", content: "Always enable Multi-Factor Authentication (MFA)." }
      ]
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
      thumbnail_url: "https://via.placeholder.com/300x180?text=Security",
      modules: [
        {
          title: "Module 1: Introduction to Cybersecurity",
          lessons: [
            { id: 701, title: "The Importance of Security", duration: "16:45", videoSrc: "/videos/cybersecurity/module1/intro.mp4" },
            { id: 702, title: "Common Threats", duration: "22:15", videoSrc: "/videos/cybersecurity/module1/threats.mp4" }
          ]
        },
        {
          title: "Module 2: Basic Security Measures",
          lessons: [
            { id: 801, title: "Password Management", duration: "11:30", videoSrc: "/videos/cybersecurity/module2/passwords.mp4" },
            { id: 802, title: "Understanding Firewalls", duration: "19:00", videoSrc: "/videos/cybersecurity/module2/firewalls.mp4" }
          ]
        }
      ],
      notes: [
        { id: 7, title: "Cyber Hygiene", content: "Update software regularly and use antivirus." },
        { id: 8, title: "Recognizing Phishing", content: "Don't click on suspicious links." }
      ]
    },
    
    // Additional courses for more categories
    {
      id: 5,
      title: "Python for Data Science",
      description: "Learn Python programming for data analysis and visualization.",
      instructor: "Sarah Johnson",
      category: "Data Science",
      duration: "8 hours",
      level: "Beginner",
      price: 599,
      originalPrice: 2499,
      rating: 4.8,
      ratingCount: 3200,
      learners: 21500,
      thumbnail_url: "https://via.placeholder.com/300x180?text=Python+DS",
      modules: [
        {
          title: "Module 1: Python Basics for Data Science",
          lessons: [
            { id: 901, title: "Introduction to Python", duration: "22:45", videoSrc: "/videos/python-ds/module1/intro.mp4" },
            { id: 902, title: "Data Structures in Python", duration: "18:30", videoSrc: "/videos/python-ds/module1/data-structures.mp4" },
            { id: 903, title: "NumPy Fundamentals", duration: "25:15", videoSrc: "/videos/python-ds/module1/numpy.mp4" }
          ]
        },
        {
          title: "Module 2: Data Analysis with Pandas",
          lessons: [
            { id: 1001, title: "Pandas Basics", duration: "20:30", videoSrc: "/videos/python-ds/module2/pandas-basics.mp4" },
            { id: 1002, title: "Data Cleaning", duration: "24:45", videoSrc: "/videos/python-ds/module2/data-cleaning.mp4" },
            { id: 1003, title: "Data Visualization", duration: "28:15", videoSrc: "/videos/python-ds/module2/visualization.mp4" }
          ]
        }
      ],
      notes: [
        { id: 9, title: "Python Environment Setup", content: "Use Anaconda distribution for an easier setup process." },
        { id: 10, title: "Data Science Libraries", content: "Familiarize yourself with NumPy, Pandas, Matplotlib, and Seaborn." }
      ]
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      description: "Master core concepts and algorithms in machine learning.",
      instructor: "Dr. Alex Chen",
      category: "AI/ML",
      duration: "10 hours",
      level: "Intermediate",
      price: 899,
      originalPrice: 3499,
      rating: 4.9,
      ratingCount: 2800,
      learners: 15600,
      thumbnail_url: "https://via.placeholder.com/300x180?text=ML+Fundamentals",
      modules: [
        {
          title: "Module 1: Introduction to Machine Learning",
          lessons: [
            { id: 1101, title: "What is Machine Learning?", duration: "15:30", videoSrc: "/videos/ml-fundamentals/module1/intro.mp4" },
            { id: 1102, title: "Supervised vs Unsupervised Learning", duration: "18:15", videoSrc: "/videos/ml-fundamentals/module1/learning-types.mp4" },
            { id: 1103, title: "Model Evaluation", duration: "22:45", videoSrc: "/videos/ml-fundamentals/module1/evaluation.mp4" }
          ]
        },
        {
          title: "Module 2: Core Algorithms",
          lessons: [
            { id: 1201, title: "Linear Regression", duration: "25:00", videoSrc: "/videos/ml-fundamentals/module2/linear-regression.mp4" },
            { id: 1202, title: "Decision Trees", duration: "21:30", videoSrc: "/videos/ml-fundamentals/module2/decision-trees.mp4" },
            { id: 1203, title: "Support Vector Machines", duration: "28:15", videoSrc: "/videos/ml-fundamentals/module2/svm.mp4" }
          ]
        }
      ],
      notes: [
        { id: 11, title: "Mathematics Prerequisites", content: "Review linear algebra and statistics concepts before starting this course." },
        { id: 12, title: "Python for ML", content: "Ensure you're comfortable with Python before diving into machine learning algorithms." }
      ]
    },
    {
      "id": 7,
      "title": "Intro to React",
      "description": "Learn the fundamentals of React, including components, state, and props, to build interactive web applications.",
      "instructor": "Jane Doe",
      "category": "Programming",
      "duration": "4 hours",
      "level": "Beginner",
      "price": 499,
      "originalPrice": 1499,
      "rating": 4.5,
      "ratingCount": 850,
      "learners": 12000,
      "thumbnail_url": "https://via.placeholder.com/300x180?text=Intro+to+React",
      "modules": [
        {
          "title": "Module 1: React Basics",
          "lessons": [
            { "id": 1001, "title": "Introduction to React", "duration": "15:00", "videoSrc": "/videos/intro-react/module1/intro.mp4" },
            { "id": 1002, "title": "Understanding Components", "duration": "18:00", "videoSrc": "/videos/intro-react/module1/components.mp4" },
            { "id": 1003, "title": "JSX and Rendering", "duration": "20:00", "videoSrc": "/videos/intro-react/module1/jsx.mp4" }
          ]
        },
        {
          "title": "Module 2: State and Props",
          "lessons": [
            { "id": 1101, "title": "State in React", "duration": "22:00", "videoSrc": "/videos/intro-react/module2/state.mp4" },
            { "id": 1102, "title": "Props in React", "duration": "18:00", "videoSrc": "/videos/intro-react/module2/props.mp4" },
            { "id": 1103, "title": "Handling Events", "duration": "19:00", "videoSrc": "/videos/intro-react/module2/events.mp4" }
          ]
        }
      ],
      "notes": [
        { "id": 21, "title": "Prerequisites", "content": "Basic understanding of HTML, CSS, and JavaScript is recommended before taking this course." },
        { "id": 22, "title": "What You'll Learn", "content": "You will learn how to create React components, manage state and props, and handle events to build interactive applications." }
      ]
    }
    ,
    {
      id: 8,
      title: "Docker & Kubernetes for DevOps",
      description: "Learn containerization and orchestration for modern application deployment.",
      instructor: "Emily Rodriguez",
      category: "DevOps",
      duration: "9 hours",
      level: "Intermediate",
      price: 849,
      originalPrice: 3299,
      rating: 4.8,
      ratingCount: 2100,
      learners: 12800,
      thumbnail_url: "https://via.placeholder.com/300x180?text=Docker+K8s",
      modules: [
        {
          title: "Module 1: Docker Fundamentals",
          lessons: [
            { id: 1501, title: "Introduction to Containerization", duration: "15:45", videoSrc: "/videos/docker-k8s/module1/intro.mp4" },
            { id: 1502, title: "Dockerfile Best Practices", duration: "22:30", videoSrc: "/videos/docker-k8s/module1/dockerfiles.mp4" },
            { id: 1503, title: "Docker Compose", duration: "18:15", videoSrc: "/videos/docker-k8s/module1/compose.mp4" }
          ]
        },
        {
          title: "Module 2: Kubernetes Essentials",
          lessons: [
            { id: 1601, title: "Kubernetes Architecture", duration: "24:00", videoSrc: "/videos/docker-k8s/module2/architecture.mp4" },
            { id: 1602, title: "Deployments and Services", duration: "26:30", videoSrc: "/videos/docker-k8s/module2/deployments.mp4" },
            { id: 1603, title: "ConfigMaps and Secrets", duration: "19:45", videoSrc: "/videos/docker-k8s/module2/configmaps.mp4" }
          ]
        }
      ],
      notes: [
        { id: 15, title: "Environment Setup", content: "Make sure Docker Desktop is installed and configured properly on your machine." },
        { id: 16, title: "Kubernetes Knowledge", content: "Understanding networking concepts will help you grasp Kubernetes more easily." }
      ]
    },
    {
      id: 9,
      title: "Web Design Masterclass",
      description: "Create stunning web designs with modern tools and techniques.",
      instructor: "Lisa Wong",
      category: "Design",
      duration: "6.5 hours",
      level: "Intermediate",
      price: 649,
      originalPrice: 2499,
      rating: 4.6,
      ratingCount: 1850,
      learners: 11200,
      thumbnail_url: "https://via.placeholder.com/300x180?text=Web+Design",
      modules: [
        {
          title: "Module 1: Design Principles",
          lessons: [
            { id: 1701, title: "Visual Hierarchy", duration: "16:15", videoSrc: "/videos/web-design/module1/hierarchy.mp4" },
            { id: 1702, title: "Color Theory for Web", duration: "21:30", videoSrc: "/videos/web-design/module1/color.mp4" },
            { id: 1703, title: "Typography in Web Design", duration: "18:45", videoSrc: "/videos/web-design/module1/typography.mp4" }
          ]
        },
        {
          title: "Module 2: Tools and Implementation",
          lessons: [
            { id: 1801, title: "Figma Essentials", duration: "24:30", videoSrc: "/videos/web-design/module2/figma.mp4" },
            { id: 1802, title: "Responsive Design", duration: "22:15", videoSrc: "/videos/web-design/module2/responsive.mp4" },
            { id: 1803, title: "Design to Code", duration: "25:45", videoSrc: "/videos/web-design/module2/design-to-code.mp4" }
          ]
        }
      ],
      notes: [
        { id: 17, title: "Design Tools", content: "Figma is recommended for this course, but Adobe XD can also be used." },
        { id: 18, title: "Web Technologies", content: "Basic knowledge of HTML and CSS will help you implement your designs." }
      ]
    },
    {
      id: 10,
      title: "Advanced Security Testing",
      description: "Learn professional techniques for finding and exploiting security vulnerabilities.",
      instructor: "Robert Johnson",
      category: "Security",
      duration: "8.5 hours",
      level: "Advanced",
      price: 999,
      originalPrice: 3999,
      rating: 4.9,
      ratingCount: 1200,
      learners: 6800,
      thumbnail_url: "https://via.placeholder.com/300x180?text=Security+Testing",
      modules: [
        {
          title: "Module 1: Ethical Hacking Fundamentals",
          lessons: [
            { id: 1901, title: "Introduction to Ethical Hacking", duration: "20:15", videoSrc: "/videos/security-testing/module1/intro.mp4" },
            { id: 1902, title: "Reconnaissance Techniques", duration: "25:30", videoSrc: "/videos/security-testing/module1/recon.mp4" },
            { id: 1903, title: "Vulnerability Scanning", duration: "28:45", videoSrc: "/videos/security-testing/module1/scanning.mp4" }
          ]
        },
        {
          title: "Module 2: Web Application Security",
          lessons: [
            { id: 2001, title: "Common Web Vulnerabilities", duration: "26:00", videoSrc: "/videos/security-testing/module2/vulnerabilities.mp4" },
            { id: 2002, title: "Cross-Site Scripting (XSS)", duration: "22:15", videoSrc: "/videos/security-testing/module2/xss.mp4" },
            { id: 2003, title: "SQL Injection", duration: "24:30", videoSrc: "/videos/security-testing/module2/sql-injection.mp4" }
          ]
        }
      ],
      notes: [
        { id: 19, title: "Legal Considerations", content: "Only test systems you have permission to access." },
        { id: 20, title: "Security Tools", content: "Set up a proper testing environment with tools like Burp Suite and Metasploit." }
      ]
    },
    {
      id: 11,
      title: "Google Cloud Platform Fundamentals",
      description: "Master essential services and architecture of Google Cloud.",
      instructor: "James Wilson",
      category: "Cloud",
      duration: "7 hours",
      level: "Beginner",
      price: 699,
      originalPrice: 2899,
      rating: 4.5,
      ratingCount: 1600,
      learners: 8900,
      thumbnail_url: "https://via.placeholder.com/300x180?text=GCP",
      modules: [
        {
          title: "Module 1: GCP Basics",
          lessons: [
            { id: 2101, title: "Introduction to Google Cloud", duration: "17:30", videoSrc: "/videos/gcp/module1/intro.mp4" },
            { id: 2102, title: "GCP Console and Cloud Shell", duration: "19:45", videoSrc: "/videos/gcp/module1/console.mp4" },
            { id: 2103, title: "Projects and IAM", duration: "21:15", videoSrc: "/videos/gcp/module1/iam.mp4" }
          ]
        },
        {
          title: "Module 2: Core GCP Services",
          lessons: [
            { id: 2201, title: "Compute Engine", duration: "23:00", videoSrc: "/videos/gcp/module2/compute.mp4" },
            { id: 2202, title: "Cloud Storage", duration: "18:30", videoSrc: "/videos/gcp/module2/storage.mp4" },
            { id: 2203, title: "Google Kubernetes Engine", duration: "25:45", videoSrc: "/videos/gcp/module2/gke.mp4" }
          ]
        }
      ],
      notes: [
        { id: 21, title: "GCP Free Tier", content: "Use the GCP free tier to practice without incurring costs." },
        { id: 22, title: "Cloud Basics", content: "Understanding basic cloud concepts will help you grasp GCP more easily." }
      ]
    },
    {
      id: 12,
      title: "Data Analysis with R",
      description: "Learn statistical analysis and data visualization using R programming.",
      instructor: "Dr. Maria Garcia",
      category: "Data Science",
      duration: "6.5 hours",
      level: "Intermediate",
      price: 749,
      originalPrice: 2999,
      rating: 4.7,
      ratingCount: 1450,
      learners: 7800,
      thumbnail_url: "https://via.placeholder.com/300x180?text=R+Analysis",
      modules: [
        {
          title: "Module 1: R Programming Fundamentals",
          lessons: [
            { id: 2301, title: "Introduction to R", duration: "18:15", videoSrc: "/videos/r-analysis/module1/intro.mp4" },
            { id: 2302, title: "Data Structures in R", duration: "22:30", videoSrc: "/videos/r-analysis/module1/data-structures.mp4" },
            { id: 2303, title: "Data Manipulation with dplyr", duration: "24:45", videoSrc: "/videos/r-analysis/module1/dplyr.mp4" }
          ]
        },
        {
          title: "Module 2: Data Visualization with ggplot2",
          lessons: [
            { id: 2401, title: "ggplot2 Basics", duration: "20:00", videoSrc: "/videos/r-analysis/module2/ggplot2-basics.mp4" },
            { id: 2402, title: "Advanced Plotting", duration: "25:15", videoSrc: "/videos/r-analysis/module2/advanced-plotting.mp4" },
            { id: 2403, title: "Interactive Visualizations", duration: "23:30", videoSrc: "/videos/r-analysis/module2/interactive.mp4" }
          ]
        }
      ],
      notes: [
        { id: 23, title: "R Environment", content: "Install RStudio for the best R development experience." },
        { id: 24, title: "Statistics Knowledge", content: "Basic understanding of statistics will be helpful for this course." }
      ]
    },
    {
      id: 13,
      title: "Deep Learning with TensorFlow",
      description: "Build and deploy neural networks using TensorFlow and Keras.",
      instructor: "Dr. David Kim",
      category: "AI/ML",
      duration: "9.5 hours",
      level: "Advanced",
      price: 999,
      originalPrice: 3999,
      rating: 4.8,
      ratingCount: 1850,
      learners: 9200,
      thumbnail_url: "https://via.placeholder.com/300x180?text=TensorFlow",
      modules: [
        {
          title: "Module 1: Deep Learning Fundamentals",
          lessons: [
            { id: 2501, title: "Neural Networks Basics", duration: "24:30", videoSrc: "/videos/tensorflow/module1/nn-basics.mp4" },
            { id: 2502, title: "TensorFlow and Keras Intro", duration: "22:15", videoSrc: "/videos/tensorflow/module1/tf-intro.mp4" },
            { id: 2503, title: "Building Your First Neural Network", duration: "28:45", videoSrc: "/videos/tensorflow/module1/first-nn.mp4" }
          ]
        },
        {
          title: "Module 2: Advanced Models",
          lessons: [
            { id: 2601, title: "Convolutional Neural Networks", duration: "30:00", videoSrc: "/videos/tensorflow/module2/cnn.mp4" },
            { id: 2602, title: "Recurrent Neural Networks", duration: "26:30", videoSrc: "/videos/tensorflow/module2/rnn.mp4" },
            { id: 2603, title: "Transfer Learning", duration: "25:15", videoSrc: "/videos/tensorflow/module2/transfer-learning.mp4" }
          ]
        }
      ],
      notes: [
        { id: 25, title: "Hardware Requirements", content: "A GPU is recommended for training deep learning models efficiently." },
        { id: 26, title: "Prerequisites", content: "Understanding of Python and basic machine learning concepts is required." }
      ]
    },
    {
      id: 14,
      title: "CI/CD Pipeline Implementation",
      description: "Set up automated testing and deployment pipelines for your applications.",
      instructor: "Thomas Lee",
      category: "DevOps",
      duration: "7 hours",
      level: "Intermediate",
      price: 799,
      originalPrice: 2999,
      rating: 4.6,
      ratingCount: 1350,
      learners: 7500,
      thumbnail_url: "https://via.placeholder.com/300x180?text=CI%2FCD",
      modules: [
        {
          title: "Module 1: CI/CD Concepts",
          lessons: [
            { id: 2701, title: "Introduction to CI/CD", duration: "16:45", videoSrc: "/videos/cicd/module1/intro.mp4" },
            { id: 2702, title: "Build Automation", duration: "19:30", videoSrc: "/videos/cicd/module1/build.mp4" },
            { id: 2703, title: "Test Automation", duration: "22:15", videoSrc: "/videos/cicd/module1/testing.mp4" }
          ]
        },
        {
          title: "Module 2: Pipeline Implementation",
          lessons: [
            { id: 2801, title: "Jenkins Setup", duration: "23:00", videoSrc: "/videos/cicd/module2/jenkins.mp4" },
            { id: 2802, title: "GitHub Actions", duration: "25:30", videoSrc: "/videos/cicd/module2/github-actions.mp4" },
            { id: 2803, title: "Deployment Strategies", duration: "21:15", videoSrc: "/videos/cicd/module2/deployment.mp4" }
          ]
        }
      ],
      notes: [
        { id: 27, title: "DevOps Culture", content: "CI/CD is not just about tools, but also about collaboration and culture." },
        { id: 28, title: "Version Control", content: "Strong understanding of Git is essential for implementing CI/CD pipelines." }
      ]
    },
    {
      id: 15,
      title: "Mobile App Design",
      description: "Create intuitive and beautiful mobile app interfaces.",
      instructor: "Sophia Martinez",
      category: "Design",
      duration: "5 hours",
      level: "Intermediate",
      price: 599,
      originalPrice: 2499,
      rating: 4.7,
      ratingCount: 1280,
      learners: 8600,
      thumbnail_url: "https://via.placeholder.com/300x180?text=App+Design",
      modules: [
        {
          title: "Module 1: Mobile Design Principles",
          lessons: [
            { id: 2901, title: "Mobile-First Design", duration: "15:30", videoSrc: "/videos/app-design/module1/mobile-first.mp4" },
            { id: 2902, title: "Navigation Patterns", duration: "18:45", videoSrc: "/videos/app-design/module1/navigation.mp4" },
            { id: 2903, title: "Gesture-Based Interfaces", duration: "20:15", videoSrc: "/videos/app-design/module1/gestures.mp4" }
          ]
        },
        {
          title: "Module 2: Design Implementation",
          lessons: [
            { id: 3001, title: "Figma for Mobile Design", duration: "22:30", videoSrc: "/videos/app-design/module2/figma-mobile.mp4" },
            { id: 3002, title: "Prototyping Interactions", duration: "24:15", videoSrc: "/videos/app-design/module2/prototyping.mp4" },
            { id: 3003, title: "Design System Creation", duration: "21:45", videoSrc: "/videos/app-design/module2/design-system.mp4" }
          ]
        }
      ],
      notes: [
        { id: 29, title: "Platform Guidelines", content: "Familiarize yourself with iOS and Android design guidelines." },
        { id: 30, title: "User Testing", content: "Always test your designs with real users for best results." }
      ]
    }
  ]
  return Promise.resolve(allCourses);
};


