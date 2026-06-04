export const personalInfo = {
  name: 'Binay Rai',
  titles: ['Backend Developer', 'Django Developer', 'Software Engineer'],
  location: 'Kathmandu, Nepal',
  website: 'binayrai.com.np',
  email: 'raibinay421@gmail.com',
  github: 'https://github.com/shanks9876543210',
  linkedin: 'https://www.linkedin.com/in/binay-rai-3219b3181/',
  experience: '2+ Years',
  currentRole: 'Backend Developer at Fasto Nepal Pvt. Ltd.',
  summary:
    'Backend Developer with 2+ years of professional experience building scalable production systems using Django, Django REST Framework, PostgreSQL, Redis, Celery, and Docker. I architect and deliver systems that power real-world business operations — from quick commerce platforms to complex order management workflows.',
};

export const experiences = [
  {
    id: 1,
    title: 'Backend Developer',
    company: 'Fasto Nepal Pvt. Ltd.',
    period: 'July 2024 – Present',
    type: 'Full-Time',
    description:
      'Contributing to the development of core backend systems for a quick commerce platform serving thousands of users. Working across order management, inventory, vendor operations, rider workflows, promotions, and operational tools to support scalable business processes.',
    achievements: [
      'Designed and built core backend architecture for a production quick commerce platform',
      'Developed scalable REST APIs serving real-time order and inventory operations',
      'Implemented complete order lifecycle management with state-machine workflows',
      'Built inventory management systems with real-time stock synchronization',
      'Developed multi-vendor and rider management modules from the ground up',
      'Integrated GalliMap for location-based services and delivery routing',
      'Integrated SMS gateway for transactional notifications and OTP flows',
      'Implemented IRD (Inland Revenue Department) verification and billing compliance',
      'Built a flexible promotion engine supporting bundles, discounts, and campaigns',
      'Reduced third-party API dependency, improving reliability and cutting costs',
      'Handled production debugging and performance optimization of critical backend systems'
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'PostGIS'],
  },
  {
    id: 2,
    title: 'Backend Developer Intern',
    company: 'Fasto Nepal Pvt. Ltd.',
    period: 'April 2024 – July 2024',
    type: 'Internship',
    description:
      'Joined as an intern and rapidly demonstrated production-level capability. Within 3 months, transitioned to a full-time backend developer role based on the quality and impact of contributions.',
    achievements: [
      'Contributed to core backend feature development from day one',
      'Gained deep expertise in Django REST Framework and production API design',
      'Assisted in architecture decisions for key platform modules',
      'Promoted to full-time backend developer after 3 months',
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'Git'],
  },
];

export const skills = {
  Languages: [
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 70 },
    { name: 'SQL', level: 85 },
    { name: 'HTML/CSS', level: 75 },
  ],
  Frameworks: [
    { name: 'Django', level: 95 },
    { name: 'Django REST Framework', level: 95 },
    { name: 'React', level: 54 },
    { name: 'Celery', level: 85 },
  ],
  Databases: [
    { name: 'PostgreSQL', level: 90 },
    { name: 'PostGIS', level: 80 },
    { name: 'Redis', level: 85 },
    { name: 'MySQL', level: 70 },
  ],
  'DevOps & Tools': [
    { name: 'Docker', level: 85 },
    { name: 'Git / GitHub', level: 90 },
    { name: 'Linux', level: 80 },
    { name: 'Postman', level: 90 },
  ],
  Concepts: [
    { name: 'REST API Design', level: 95 },
    { name: 'System Design', level: 80 },
    { name: 'Async Processing', level: 85 },
    { name: 'Performance Optimization', level: 80 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Fasto Quick Commerce Platform',
    description:
      'Production-grade quick commerce platform where I contributed to the design and development of core backend systems including order management, inventory operations, vendor workflows, rider management, promotions, and business automation features.',

    longDescription:
      'As part of the backend team at Fasto Nepal, I worked on designing and developing scalable backend systems powering day-to-day commerce operations. My contributions included order lifecycle management, inventory synchronization, promotion engines, rider operations, location-based services, billing integrations, and performance optimization.',

    tech: [
      'Django',
      'DRF',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Docker',
      'PostGIS',
    ],

    highlights: [
      'Designed and built core backend architecture components',
      'Implemented complete order lifecycle management',
      'Built inventory management and stock synchronization systems',
      'Developed vendor and rider management modules',
      'Integrated GalliMap for location-based services',
      'Implemented SMS notifications and OTP workflows',
      'Built flexible promotion and discount engines',
      'Integrated IRD verification and billing compliance',
      'Optimized system performance and reduced third-party API dependency',
      'Handled production debugging and issue resolution',
    ],

    status: 'Production',
    github: null,
    demo: 'https://fasto.com.np',
    featured: true,
  },

  {
    id: 2,
    title: 'Room Finder Platform',
    description:
      'Personal project built using Django to help users discover rental rooms based on location, pricing, and available amenities.',

    longDescription:
      'A location-based room discovery platform allowing users to browse rental properties, filter by location and amenities, and connect with property owners. Built as a personal project to strengthen backend development and database design skills.',

    tech: ['Django', 'PostgreSQL', 'Python'],

    highlights: [
      'Location-based room search',
      'Category and location filtering',
      'Property listing management',
      'Responsive user interface',
      'Django-powered backend architecture',
    ],

    status: 'Personal',
    github: 'https://github.com/shanks9876543210/room-finder',
    demo: null,
    featured: false,
  },

  // {
  //   id: 3,
  //   title: 'Personal Portfolio Website',
  //   description:
  //     'Modern developer portfolio showcasing professional experience, technical skills, projects, and achievements.',

  //   longDescription:
  //     'Built using React, TypeScript, Tailwind CSS, and Framer Motion. Designed with performance, responsiveness, and user experience in mind while highlighting backend engineering experience and professional work.',

  //   tech: [
  //     'React',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'Framer Motion',
  //     'Vite',
  //   ],

  //   highlights: [
  //     'Responsive design',
  //     'Modern UI/UX',
  //     'SEO optimized',
  //     'Performance focused',
  //     'Cloudflare deployment',
  //   ],

  //   status: 'Personal',
  //   github: null,
  //   demo: 'https://binayrai.com.np',
  //   featured: false,
  // },
  {
  id: 3,
  title: 'Blog Management Platform',

  description:
    'Personal blogging platform built with Django Templates featuring article publishing, categories, comments, likes, search, and content management.',

  longDescription:
    'Developed a blogging platform using Django and Django Templates. Users can browse articles, filter content by category, interact through likes and comments, and search for posts. Includes an administrative interface for managing content and users.',

  tech: [
    'Django',
    'SQLite',
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript'
  ],

  highlights: [
    'Article publishing and management',
    'Category filtering',
    'Like and comment system',
    'Search functionality',
    'User authentication',
    'Admin dashboard',
    'Responsive design'
  ],

  status: 'Personal',

  github: 'https://github.com/shanks9876543210/Blogpost',

  demo: 'null',

  featured: false,
}
];

export const achievements = [
  {
    id: 1,
    title: 'National Chess Player',
    subtitle: 'Nepal Chess Association',
    description:
      'Competed at the national level in competitive chess. Chess sharpens analytical thinking, strategic planning, and the ability to evaluate complex decision trees under pressure — all directly transferable to software architecture and system design.',
    skills: ['Strategic Thinking', 'Pattern Recognition', 'Decision Making', 'Analytical Depth'],
    icon: '♟',
  },
  {
    id: 2,
    title: 'Outstanding Team Player Award',
    subtitle: 'Fasto Nepal Pvt. Ltd.',
    description:
      'Recognized by leadership for exceptional contribution to team productivity, cross-functional collaboration, and consistently delivering high-quality backend systems on time.',
    skills: ['Collaboration', 'Reliability', 'Delivery', 'Communication'],
    icon: '🏆',
  },
];

export const stats = [
{ label: 'Years Experience', value: '2+' },
{ label: 'Technologies Used', value: '10+' },
{ label: 'Production Work', value: 'Fasto' },
{ label: 'National Chess Player', value: '♟️' },
];
