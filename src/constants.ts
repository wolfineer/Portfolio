export const sectionIds = {
  top: 'top',
  summary: 'summary',
  experience: 'experience',
  skills: 'skills',
  education: 'education',
} as const

export const carouselSettings = {
  intervalMs: 5000,
} as const

export const storageKeys = {
  theme: 'portfolio-theme',
} as const

export const constants = {
  identity: {
    name: 'Nandeesh V',
    role: 'Full-Stack Developer',
    monogram: 'N',
  },
  navigation: {
    ariaLabel: 'Main navigation',
    links: [
      { label: 'About', href: `#${sectionIds.summary}` },
      { label: 'Experience', href: `#${sectionIds.experience}` },
      { label: 'Skills', href: `#${sectionIds.skills}` },
      { label: 'Education', href: `#${sectionIds.education}` },
    ],
  },
  theme: {
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
  },
  hero: {
    eyebrow: 'FULL-STACK DEVELOPER',
    introduction: 'Building enterprise web applications with Angular, React, Node.js, Python, TypeScript, REST APIs, and cloud technologies.',
    viewExperience: 'View experience',
    exploreSkills: 'Explore skills',
    scrollLabel: 'SCROLL TO EXPLORE',
    scrollAriaLabel: 'Scroll to professional summary',
  },
  carousel: {
    regionLabel: 'Featured project experience',
    heading: 'FEATURED EXPERIENCE',
    organization: 'CDW',
    chooseProject: 'Choose featured project',
    controls: 'Carousel controls',
    previousProject: 'Previous project',
    nextProject: 'Next project',
    play: 'Play automatic slides',
    pause: 'Pause automatic slides',
    slideLabelTemplate: '{{1}} of {{2}}: {{3}}',
    projectTechnologiesLabelTemplate: 'Technologies for {{1}}',
  },
  sections: {
    summary: {
      number: '01',
      label: 'PROFESSIONAL SUMMARY',
      titleStart: 'Full stack.',
      titleEnd: 'End to end.',
      firstParagraph: 'Full-stack developer experienced in enterprise applications, accessible responsive interfaces, backend services, REST APIs, databases, monitoring, and debugging.',
      secondParagraph: 'Comfortable owning features from requirements through delivery, collaborating with stakeholders, and using Microsoft Copilot to support development and code quality.',
      footnote: 'UI / SERVICES / DATA / DELIVERY',
    },
    experience: {
      number: '02',
      label: 'PROFESSIONAL EXPERIENCE · CDW',
      title: 'Project experience.',
      description: 'Enterprise products across travel, banking, advertising, HR, and sales.',
      titleId: 'experience-title',
    },
    skills: {
      number: '03',
      label: 'TECHNICAL SKILLS',
      title: 'Tools for the whole stack.',
      description: 'Languages, frameworks, platforms, and practices used across project delivery.',
    },
    education: {
      number: '04',
      label: 'EDUCATION & RECOGNITION',
      educationTitle: 'Education',
      awardsTitle: 'Awards',
      awardMark: '✳',
    },
  },
  footer: {
    roleSummary: 'FULL-STACK AI DEVELOPER · ANGULAR · REACT · NODE.JS · PYTHON',
    backToTop: 'BACK TO TOP',
  },
} as const