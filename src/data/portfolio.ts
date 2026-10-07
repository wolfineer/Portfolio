export interface FeaturedProject {
  label: string
  title: string
  steps: string[]
  technologies: string
  period: string
}

export interface Experience {
  project: string
  dates: string
  featured: FeaturedProject
  highlights: string[]
  stack: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Education {
  degree: string
  institution: string
  abbreviation: string
}

export interface Award {
  title: string
  description: string
}

export const experience: Experience[] = [
  {
    project: 'Airline Kiosk Management System',
    dates: 'July 2025 — Present',
    featured: {
      label: 'CDW / AIRLINE SYSTEMS',
      title: 'Kiosk Management',
      steps: ['Kiosk Runtime', 'Bag Tag Printing', 'Document Verification', 'Biometeric Authentication'],
      technologies: 'ANGULAR / TYPESCRIPT / DYNATRACE',
      period: 'Jul 2025—NOW',
    },
    highlights: [
      'Develop and enhance Angular interfaces for self-service kiosks, covering passenger processing, bags, boarding, documents, and kiosk interactions, improving passenger experience and reducing transaction time.',
      'Own features from requirements through implementation, testing, debugging, demonstrations, and delivery; build reusable UI with TypeScript, RxJS, and REST APIs.',
      'Improve traceability with Dynatrace monitoring, resolve complex edge cases, and collaborate with onshore stakeholders using Microsoft Copilot for development and refactoring.',
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'HTML/CSS', 'Dynatrace', 'Microsoft Copilot'],
  },
  {
    project: 'Banking Deposit Solutions Platform',
    dates: 'Feb 2025 — Aug 2025',
    featured: {
      label: 'CDW / BANKING PLATFORM',
      title: 'Banking operations',
      steps: ['Deposits', 'Job Scheduling', 'Fund sweeps', 'Reports Generation'],
      technologies: 'PYTHON / POSTGRESQL / ALEMBIC',
      period: 'Feb 2025 — Aug 2025',
    },
    highlights: [
      'Built Python REST APIs for deposit management, liquidity tracking, and financial-system integrations.',
      'Created scheduled jobs for fund sweeps, data synchronization, and report generation; modeled data and managed migrations with PostgreSQL, SQLAlchemy, and Alembic.',
      'Produced regulatory and business reports with attention to data accuracy and financial standards.',
    ],
    stack: ['Python', 'REST APIs', 'PostgreSQL', 'SQLAlchemy', 'Alembic'],
  },
  {
    project: 'Advertising Platform',
    dates: 'Dec 2024 — Jan 2025',
    featured: {
      label: 'CDW / ADVERTISING',
      title: 'Digital content',
      steps: ['Authoring', 'Publishing', 'Responsive UI', 'Quality'],
      technologies: 'AEM / RESPONSIVE UI',
      period: 'Dec 2024 — Jan 2025',
    },
    highlights: [
      'Authored and maintained AEM pages with consistent design, responsive behavior, and strong UI quality.',
      'Resolved functional and interface edge cases and shared technical insights to improve team delivery.',
    ],
    stack: ['AEM', 'Responsive UI', 'Web development'],
  },
  {
    project: 'Human Resources Management System',
    dates: 'Jul 2024 — Dec 2024',
    featured: {
      label: 'CDW / HUMAN RESOURCES',
      title: 'People platform',
      steps: ['Requirements', 'Web app', 'Data model', 'Delivery'],
      technologies: 'NODE.JS / REACT / DATABASES',
      period: 'Jul 2024 — Dec 2024',
    },
    highlights: [
      'Developed Node.js and React features, led development activities, gathered requirements with stakeholders, and demonstrated completed work.',
      'Designed database schemas, reviewed code, and coordinated codebase merges.',
      'Owned backend development and served as the primary technical contact for backend questions.',
    ],
    stack: ['Node.js', 'React', 'Database design', 'Code reviews'],
  },
  {
    project: 'Sales Management System',
    dates: 'Aug 2023 — Feb 2024',
    featured: {
      label: 'CDW / SALES SYSTEMS',
      title: 'Ecommerce',
      steps: ['Real-time Data', 'Multi-language Support', 'Order Catalogs', 'Websockets'],
      technologies: 'ANGULAR / IONIC / AWS',
      period: 'Aug 2023 — Feb 2024',
    },
    highlights: [
      'Built responsive web and mobile interfaces with Angular and Ionic.',
      'Integrated AWS Lambda, DynamoDB, and CloudWatch for APIs, storage, logging, and monitoring; added WebSocket communication and Strapi internationalization.',
      'Resolved defects and partnered with designers to improve usability and UI quality.',
    ],
    stack: ['Angular', 'Ionic', 'AWS Lambda', 'DynamoDB', 'CloudWatch', 'WebSocket', 'Strapi'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'jQuery', 'Ionic', 'Bootstrap', 'Tailwind CSS', 'AEM UI', 'Responsive Design', 'Accessibility'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'RESTful APIs', 'WebSocket'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'SQLAlchemy', 'Alembic'],
  },
  {
    title: 'Cloud & Monitoring',
    items: ['AWS', 'Lambda', 'CloudWatch', 'Dynatrace'],
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Docker', 'Postman', 'Microsoft Copilot', 'Agile', 'Code Reviews', 'Debugging', 'Testing'],
  },
  {
    title: 'AI Certifications',
    items: ['Claude Certified Developer Foundations - (CCDV-F)', 'Microsoft Azure AI Fundamentals (AI-901)'],
  }
]

export const education: Education[] = [
  {
    degree: 'Master of Computer Applications',
    institution: 'B.M.S. Institute of Technology',
    abbreviation: 'MCA',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Reva University',
    abbreviation: 'BCA',
  },
]

export const awards: Award[] = [
  {
    title: 'Pat on the Back',
    description: 'Recognized for outstanding contributions to a client project.',
  },
  {
    title: 'Spot Award',
    description: 'Recognized for outstanding contributions to a client project.',
  },
]