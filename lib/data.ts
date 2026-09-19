export const profile = {
  name: 'Beermohamed K',
  role: 'Senior Frontend Engineer',
  location: 'Chennai, India',
  email: 'peerkamaal@gmail.com',
  linkedin: 'https://linkedin.com/in/beer-mohamed-7080b72b6',
  github: 'https://github.com/',
  availability: 'Immediate Joiner',
  experience: '6+ Years Experience',
  availabilityNote: 'Open to Remote / Hybrid / Onsite',
  headline: 'Turning Ideas Into Digital Experiences',
  heroDescription:
    'I build scalable and high-performance web applications using React.js, Next.js and TypeScript, delivering clean code and great user experiences.',
};

export const skills = [
  ['JavaScript', 'JS'],
  ['TypeScript', 'TS'],
  ['React.js', '⚛'],
  ['Next.js', 'N'],
  ['Tailwind CSS', '≋'],
  ['Shadcn/ui', '⌁'],
  ['Material UI', 'M'],
  ['Redux Toolkit', 'R'],
  ['Context API', '◉'],
  ['REST APIs', 'API'],
  ['Axios', '×'],
  ['React Hook Form', '✓'],
  ['Zod', 'Z'],
  ['Jest', 'J'],
  ['Git', '◆'],
  ['Figma', 'F'],
] as const;

export const experiences = [
  {
    period: 'Jan 2020 — Apr 2026',
    company: 'Poorvika Mobiles Pvt Ltd',
    role: 'Software Engineer',
    duration: '6.2 Years',
    summary:
      'Developed and maintained multiple web applications including Order Management System, E-commerce platform, Ticketing System and CRM.',
    details: 'Led a 5-member frontend team for internal applications.',
  },
];

export const projects = [
  {
    title: 'Order Management System',
    stack: ['Next.js', 'TypeScript', 'Redux'],
    description: 'Admin dashboard to manage orders, customers, inventory and more.',
    image: '/projects/oms-preview.jpg',
  },
  {
    title: 'E-Commerce Platform',
    stack: ['Next.js', 'Zustand', 'Tailwind'],
    description: 'Product listing, cart, checkout and order related workflows.',
    image: '/projects/ecommerce-preview.jpg',
  },
  {
    title: 'Ticketing System',
    stack: ['React', 'TypeScript', 'Context API'],
    description: 'Internal tool for issue tracking and approvals. Led a 5-member team.',
    image: '/projects/ticketing-preview.jpg',
  },
  {
    title: 'CRM Dashboard',
    stack: ['React', 'Redux', 'Tailwind'],
    description: 'Sales reports, dashboards and hierarchy-based analytics.',
    image: '/projects/crm-preview.jpg',
  },
];
