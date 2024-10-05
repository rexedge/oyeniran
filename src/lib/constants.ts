export const siteConfig = {
  name: 'Oyeniran Ayobami Paul',
  nick: 'Paul.AI',
  title: 'Full-Stack Developer',
  description:
    'Passionate about creating elegant solutions to complex problems',
  url: 'https://oyeniran.vercel.app',
  ogImage: '/me/3.JPG',
  links: {
    github: 'https://github.com/rexedge',
    twitter: 'https://x.com/apoyeniran',
    linkedin: 'https://ng.linkedin.com/in/theoyeniran',
  },
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/projects', label: 'Projects' },
];

export const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'GraphQL', level: 65 },
  { name: 'Docker', level: 60 },
];

export const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2020 - Present',
    description:
      'Lead development of cutting-edge web applications using React, Node.js, and GraphQL.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2017 - 2020',
    description:
      'Developed and maintained various client projects using MERN stack and Python.',
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Ventures',
    period: '2015 - 2017',
    description:
      'Assisted in front-end development using HTML, CSS, and JavaScript.',
  },
];

export const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'Tech University',
    year: '2015',
  },
  {
    degree: 'B.S. in Software Engineering',
    school: 'State College',
    year: '2013',
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, Stripe, and a headless CMS.',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'Prisma'],
    demoLink: 'https://ecommerce-demo.johndoe.dev',
    githubLink: 'https://github.com/johndoe/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates using WebSockets.',
    technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    demoLink: 'https://taskmanager.johndoe.dev',
    githubLink: 'https://github.com/johndoe/task-manager',
  },
  {
    id: 3,
    title: 'AI-powered Chatbot',
    description:
      'An intelligent chatbot built with natural language processing capabilities.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'Docker'],
    demoLink: 'https://chatbot.johndoe.dev',
    githubLink: 'https://github.com/johndoe/ai-chatbot',
  },
];

export const blogCategories = [
  'Web Development',
  'Programming',
  'Software Engineering',
  'DevOps',
  'AI & Machine Learning',
  'Career Advice',
  'Tech Trends',
  'Cybersecurity',
] as const;
