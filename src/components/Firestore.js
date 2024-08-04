const users = [
  {
    "uid": "user_1",
    "role": "Student",
    "displayName": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "uid": "user_2",
    "role": "Student",
    "displayName": "Assala Msl",
    "email": "assalamsl@example.com"
  },
  {
    "uid": "user_3",
    "role": "Instructor",
    "displayName": "Alice Smith",
    "email": "alice.smith@example.com"
  },
  {
    "uid": "user_4",
    "role": "Admin",
    "displayName": "Bob Johnson",
    "email": "bob.johnson@example.com"
  }
];

const courses = [
  {
    "courseId": "course_1",
    "title": "Introduction to Web Development",
    "description": "Learn the basics of HTML, CSS, and JavaScript.",
    "syllabus": "Module 1: HTML Basics\nModule 2: CSS Basics\nModule 3: JavaScript Basics",
    "instructor": {
      "uid": "user_3",
      "displayName": "Alice Smith"
    },
    "studentsEnrolled": ["user_1", "user_2"],
    "content": [
      {
        "module": "Module 1",
        "materials": [
          { "type": "video", "link": "https://www.w3schools.com/html/" },
          { "type": "document", "link": "https://www.w3schools.com/html/html_intro.asp" }
        ],
        "quizzes": [
          { "title": "HTML Basics Quiz", "link": "https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML" }
        ]
      },
      {
        "module": "Module 2",
        "materials": [
          { "type": "video", "link": "https://www.w3schools.com/css/" },
          { "type": "document", "link": "https://www.w3schools.com/css/css_intro.asp" }
        ],
        "quizzes": [
          { "title": "CSS Basics Quiz", "link": "https://www.w3schools.com/quiztest/quiztest.asp?qtest=CSS" }
        ]
      }
    ]
  },
  {
    "courseId": "course_2",
    "title": "Advanced React",
    "description": "Deep dive into React.js and learn advanced concepts.",
    "syllabus": "Module 1: React Hooks\nModule 2: Context API\nModule 3: Advanced Patterns",
    "instructor": {
      "uid": "user_3",
      "displayName": "Alice Smith"
    },
    "studentsEnrolled": ["user_1"],
    "content": [
      {
        "module": "Module 1",
        "materials": [
          { "type": "video", "link": "https://www.w3schools.com/react/" },
          { "type": "document", "link": "https://www.w3schools.com/react/react_hooks.asp" }
        ],
        "quizzes": [
          { "title": "React Hooks Quiz", "link": "https://www.w3schools.com/quiztest/quiztest.asp?qtest=React" }
        ]
      },
      {
        "module": "Module 2",
        "materials": [
          { "type": "video", "link": "https://www.w3schools.com/react/react_context.asp" },
          { "type": "document", "link": "https://www.w3schools.com/react/react_context.asp" }
        ],
        "quizzes": [
          { "title": "Context API Quiz", "link": "https://www.w3schools.com/quiztest/quiztest.asp?qtest=Context" }
        ]
      }
    ]
  }
];

export { users, courses };
