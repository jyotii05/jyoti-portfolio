// All portfolio content lives here. Edit this file to update the site.
// Only add information that is accurate. Leave links as null until they exist.

export const profile = {
  name: 'Jyoti Nagesh Jadhav',
  nameParts: ['Jyoti', 'Nagesh', 'Jadhav'],
  role: 'Software Developer',
  email: 'jyotijadhav0192@gmail.com',
  github: 'https://github.com/jyotii05',
  linkedin: 'https://www.linkedin.com/in/jyotii-jadhav',
  instagram: 'https://www.instagram.com/_jyotiijadhav/',
  photo: '/images/profile.jpg',
  resume: '/resume/Jyoti-Jadhav-Resume.pdf',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    "I'm a Software Developer with hands-on experience in Python development, web development, machine learning, UI/UX, databases and digital content creation.",
    'I enjoy building practical digital solutions and working across both technical and creative areas, from production code and database-backed applications to interface design and video.',
  ],
  facts: [
    { label: 'Currently', value: 'Software Developer Intern, SNSS Global Services' },
    { label: 'Degree', value: 'B.Sc. Information Technology, Mumbai University' },
    { label: 'Focus', value: 'Python, SQL & analytical thinking' },
  ],
  timeline: [
    { year: '2023', title: 'B.Sc. Information Technology begins', place: 'Thakur College of Science and Commerce' },
    { year: '2025', title: 'UI/UX Developer Internship', place: 'Aurify' },
    { year: '2026', title: 'B.Sc. Information Technology completed', place: 'Mumbai University' },
    { year: '2026', title: 'Software Developer Intern', place: 'SNSS Global Services' },
  ],
}

export const skillGroups = [
  { title: 'Programming', icon: 'code', items: ['Python', 'Java', 'C++', 'SQL', 'JavaScript'] },
  {
    title: 'Web & Database',
    icon: 'database',
    items: ['HTML5', 'CSS3', 'ASP.NET', 'MySQL', 'Database Design', 'SQL Queries'],
  },
  {
    title: 'AI / Machine Learning',
    icon: 'spark',
    items: ['Machine Learning', 'NLP', 'Logistic Regression', 'PassiveAggressiveClassifier', 'OpenCV', 'TensorFlow'],
  },
  { title: 'Tools', icon: 'tool', items: ['GitHub', 'VS Code', 'Visual Studio', 'Jupyter Notebook', 'MS Office'] },
  {
    title: 'Digital & Creative',
    icon: 'camera',
    items: ['SEO', 'Video Editing', 'Photography', 'Videography', 'Content Creation', 'Social Media Marketing'],
  },
  {
    title: 'Prompt Engineering',
    icon: 'prompt',
    items: ['Advanced Prompt Engineering', 'ChatGPT', 'AI-assisted content'],
  },
]

export const experience = [
  {
    role: 'Software Developer Intern + Video Editor',
    company: 'SNSS Global Services Pvt. Ltd.',
    period: 'June 2026 – Present',
    current: true,
    summary: 'Working across both development and creative content tasks.',
    groups: [
      {
        label: 'Engineering',
        points: [
          'Develop and maintain live production software applications using Python.',
          'Contribute directly to production codebases.',
          'Implement features and debug existing issues.',
          'Work on performance and reliability improvements.',
          "Worked on the company's quiz application.",
        ],
      },
      {
        label: 'Web & Creative',
        points: [
          'Redesigned the company website from scratch.',
          'Worked on SEO/GEO improvements for the website.',
          'Created and edited AI-generated training module videos for staff.',
        ],
      },
    ],
  },
  {
    role: 'UI/UX Developer Intern',
    company: 'Aurify',
    period: 'October 2025 – November 2025',
    current: false,
    groups: [
      {
        label: 'Design',
        points: [
          'Designed and improved user interfaces.',
          'Improved usability and visual consistency.',
          'Refined navigation and interaction patterns.',
          'Collaborated with team members to implement design improvements.',
        ],
      },
    ],
  },
]

// Add real URLs to `github` / `live` when available. Buttons only render when a link exists.
export const projects = [
  {
    title: 'AI Fake News Detection System',
    tech: ['Python', 'Machine Learning', 'NLP'],
    description:
      'A web application that classifies news articles as real or fake using Natural Language Processing.',
    highlights: [
      'Logistic Regression',
      'PassiveAggressiveClassifier',
      '88% classification accuracy',
      'Data preprocessing',
      'Text vectorisation',
      'Model inference',
      'Real-time web interface',
    ],
    github: null,
    live: 'https://fake-news-green.vercel.app',
  },
  {
    title: 'AI Weapons Detection System',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    description:
      'A real-time object detection system designed to identify weapons through a laptop camera feed.',
    highlights: [
      'OpenCV frame processing',
      'TensorFlow',
      'Computer vision',
      'Real-time detection',
      'Model performance optimisation',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Student Attendance Management System',
    tech: ['PHP / Java / Python', 'MySQL'],
    description:
      'A database-integrated attendance management system for recording, managing and reporting student attendance.',
    highlights: [
      'Normalised MySQL database',
      'Students',
      'Courses',
      'Attendance records',
      'CRUD / database operations',
      'Team-based development',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Hospital Management System',
    tech: ['Java', 'MySQL'],
    description: 'A desktop application designed to manage core hospital operations.',
    highlights: [
      'Patient records',
      'Doctor scheduling',
      'Billing',
      'MySQL relational database',
      'CRUD operations',
      'Structured user interface',
    ],
    github: null,
    live: null,
  },
  {
    title: 'SNSS Company Website Redesign',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Redesigned and developed the SNSS company website from scratch with a focus on modern UI, usability and professional presentation.',
    highlights: [
      'Website redesign',
      'React development',
      'UI/UX improvements',
      'Responsive design',
      'SEO/GEO considerations',
      'Production deployment',
    ],
    github: null,
    live: 'https://snss-new-website.vercel.app',
  },
]

export const education = [
  {
    title: 'B.Sc. Information Technology',
    institution: 'Thakur College of Science and Commerce',
    board: 'Mumbai University',
    period: 'June 2023 – March 2026',
    scoreLabel: 'Average CGPA',
    score: '6.6 / 10',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Thakur College of Science and Commerce',
    board: null,
    period: 'July 2021 – February 2023',
    scoreLabel: 'Percentage',
    score: '80.67%',
  },
]

export const certifications = [
  'Digital Marketing',
  'Advanced Prompt Engineering with ChatGPT',
  'Python Essentials 1',
  'Introduction to Cybersecurity',
  'Recent Trends in Ecological Modelling & Simulation',
  'C++ Programming',
  'Certificate of Extension Work',
]

export const beyondCode = [
  { title: 'Performance', icon: 'dance', items: ['Dance', 'Fashion shows'] },
  { title: 'Sport', icon: 'ball', items: ['Volleyball', 'Cricket'] },
  { title: 'Leadership', icon: 'people', items: ['Event coordination', 'Public relations'] },
  { title: 'Creative', icon: 'camera', items: ['Content creation', 'Photography', 'Videography'] },
]
