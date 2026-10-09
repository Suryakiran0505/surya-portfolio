/**
 * Central portfolio data — generated from Surya's resume (Surya_Kiran_N_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Surya Kiran N',
  displayName: 'Surya Kiran',
  firstName: 'SURYA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SURYA KIRAN ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Software Testing', 'Android'],
  intro:
    'A Computer Science graduate and full-stack developer building real-world web and Android applications with React.js, Node.js, Express.js, Python, Flask and Kotlin — with hands-on API, functional, performance, security and end-to-end testing.',
  location: 'Karnataka',
  email: 'abhisumithra8@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/surya-kiran-n-a5171b329/',
    github: 'https://github.com/Suryakiran0505',
  },
  resumePdf: '/assets/Surya_Kiran_N_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Surya Kiran N',
  },
  focusAreas: ['Full-Stack Web Development', 'Software Testing & QA', 'Android Development'],
};

export const education = [
  {
    school: 'Rajarajeshwari College of Engineering',
    place: 'Bengaluru',
    degree: 'Bachelor of Engineering — Computer Science',
    period: 'Dec 2022 – Jul 2026',
    score: 'CGPA 7.6',
  },
  {
    school: 'Nisarga Independent PU College',
    place: 'Kollegal',
    degree: 'Pre-University — PCMB',
    period: 'Mar 2020 – Apr 2022',
    score: 'Percentage 73.83%',
  },
  {
    school: 'Adarsha Vidhyalaya School',
    place: 'Kollegal',
    degree: 'SSLC',
    period: 'Mar 2019 – Apr 2020',
    score: 'Percentage 86.4%',
  },
];

export type Role = {
  company: string;
  role: string;
  period: string;
  /** Kicker on the role's poster in the Experience section. */
  label: string;
  /** Shows the live "Now streaming" badge. */
  current: boolean;
  logline: string;
  /** The tech line printed under the role on the resume. */
  stack: string[];
  points: string[];
  palette: Palette;
};

export const experience: Role[] = [
  {
    company: 'Electrobtech Innovations Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: 'Present',
    label: 'Current role',
    current: true,
    logline: 'Building, testing and shipping features on a real-world production application — from React.js components to Express.js and MongoDB APIs.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Postman', 'Playwright', 'Apache JMeter'],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    points: [
      'Developed and enhanced frontend and backend features, integrated REST APIs, implemented responsive UI components, and worked with database-driven application workflows.',
      'Performed comprehensive testing including Functional, UI/UX, Responsive, API, Accessibility, Security, Performance, Integration, and End-to-End testing using Postman, Playwright, Apache JMeter, and Chrome DevTools.',
      'Gained hands-on experience working on a real-world production application, collaborating with developers, debugging issues, validating features, optimizing performance, and contributing to overall application quality and release readiness.',
      'Developed reusable and responsive components using React.js and integrated frontend functionality with backend REST APIs for seamless data flow.',
      'Worked with MongoDB and Express.js to support backend operations, API development, data handling, and debugging of application workflows.',
    ],
  },
  {
    company: 'Mind Matrix',
    role: 'Android App Developer Intern',
    period: 'Feb 2026 – May 2026',
    label: 'Internship',
    current: false,
    logline: 'Real-world Android development — responsive Kotlin and Jetpack Compose interfaces on an MVVM architecture with local and remote data.',
    stack: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'MVVM', 'Room Database', 'Retrofit', 'OkHttp'],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    points: [
      'Developed Android applications using Kotlin and Jetpack Compose, implementing responsive and user-friendly mobile interfaces.',
      'Implemented application features using MVVM architecture and Room Database, with API integration for efficient data communication and local data management.',
      'Gained hands-on experience in real-world Android application development, including UI development, debugging, testing, API integration, and application optimization.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Short platform label shown on the card badge (the resume gives no project dates). */
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'skill-swap',
    title: 'Skill Swap',
    year: 'Web',
    genre: 'Full-Stack • Flask • Collaboration',
    logline: 'A full-stack skill-exchange platform with real-time chat, video conferencing and community forums for collaborative learning.',
    stack: ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'Pandas', 'NumPy'],
    build: [
      'Developed a full-stack web application using HTML, CSS, and JavaScript for the frontend and Flask (Python) for the backend.',
      'Integrated PostgreSQL for efficient data management, including user profiles and skill listings. Built and connected RESTful APIs for authentication, skill sharing, and user interactions.',
      'Implemented real-time chat, video conferencing, and community forums to enhance collaborative learning experiences.',
    ],
    features: [
      'User profiles & skill listings',
      'REST APIs for authentication, skill sharing & user interactions',
      'Real-time chat',
      'Video conferencing',
      'Community forums',
    ],
    metrics: [
      { value: '3', label: 'ways to collaborate — chat, video & forums' },
      { value: 'REST', label: 'APIs for auth, skill sharing & interactions' },
      { value: 'Flask', label: 'Python backend' },
      { value: 'SQL', label: 'PostgreSQL for profiles & skill listings' },
      { value: 'Auth', label: 'user authentication' },
    ],
    github: 'https://github.com/Suryakiran0505/Skill-Swap',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'namma-kathey',
    title: 'Namma-Kathey',
    year: 'Android',
    genre: 'Android • Culture • Learning',
    logline: "National Pride — an Android storytelling app that brings Karnataka's district-wise hero stories to life in Kannada and English.",
    stack: ['Kotlin', 'Android Studio', 'XML', 'MVVM', 'JSON', 'Google Maps API'],
    build: [
      "Developed an Android educational storytelling application that promotes Karnataka's cultural heritage through district-wise hero stories in Kannada and English.",
      'Implemented interactive swipe-based storybooks, Text-to-Speech narration, quizzes, and Heritage Badge rewards to enhance user engagement and learning.',
      'Designed an offline-first architecture using local JSON storage and Google Maps integration for hero memorial and statue location tracking.',
    ],
    features: [
      'District-wise hero stories in Kannada & English',
      'Swipe-based interactive storybooks',
      'Text-to-Speech narration',
      'Quizzes & Heritage Badge rewards',
      'Offline-first local JSON storage',
      'Google Maps for hero memorials & statues',
    ],
    metrics: [
      { value: '2', label: 'languages — Kannada & English' },
      { value: 'TTS', label: 'Text-to-Speech narration' },
      { value: 'Offline', label: 'first, with local JSON storage' },
      { value: 'Maps', label: 'hero memorial & statue locations' },
      { value: 'Badges', label: 'Heritage Badge rewards & quizzes' },
    ],
    github: 'https://github.com/Suryakiran0505/NAMMA-KATHEY',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'electrobtech',
    title: 'Full Stack Developer',
    org: 'Electrobtech Innovations',
    detail: 'Building and testing features on a real-world production application with React.js, Node.js, Express.js and MongoDB.',
    laurel: 'Industry Role',
  },
  {
    id: 'mind-matrix',
    title: 'Android Intern',
    org: 'Mind Matrix',
    detail: 'Built Android apps with Kotlin, Jetpack Compose, MVVM and Room Database, February – May 2026.',
    laurel: 'Internship',
  },
  {
    id: 'graduate',
    title: 'CS Graduate',
    org: 'B.E. Computer Science',
    detail: 'Rajarajeshwari College of Engineering, Bengaluru — CGPA 7.6 / 10.',
    laurel: 'Graduate',
  },
  {
    id: 'testing',
    title: 'Full-Spectrum QA',
    org: 'Postman • Playwright • JMeter',
    detail: 'Functional, UI/UX, responsive, API, accessibility, security, performance, integration and end-to-end testing.',
    laurel: 'Testing & QA',
  },
  {
    id: 'cross-platform',
    title: 'Web + Android',
    org: 'Two Originals',
    detail: 'Skill Swap, a full-stack Flask web app, and Namma-Kathey, a native Kotlin Android app.',
    laurel: 'Cross-Platform',
  },
];

/** `issuer` is the short tag shown above each credential (the resume names only Grow AI as an issuer). */
export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Python', name: 'Python Using AI', link: 'https://drive.google.com/file/d/1kEUU9GqlqxbplJ92pQL1BR1A_EJ2USUl/view?usp=drivesdk' },
  { issuer: 'Grow AI', name: 'Data Analytics Course', link: 'https://drive.google.com/file/d/1isf2gi8WYslWu8uCF_pYQiiRLJAXcOxL/view?usp=drivesdk' },
  { issuer: 'Workshop', name: 'AI Tools Workshop', link: 'https://drive.google.com/file/d/1rNnDsclpBMvCiLIVg2odQgOQfFkEpoTk/view?usp=drivesdk' },
  { issuer: 'Gen AI', name: 'Gen AI Powered by Data Analytics', link: 'https://drive.google.com/file/d/1BTt4Iei7tDX835cDtQ3BhSXDgOeIlwp5/view?usp=drivesdk' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'The core toolkit',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'SQL', mono: 'Sq' },
      { name: '.NET', mono: 'Nt' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic & APIs',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'android',
    title: 'Android',
    subtitle: 'Native mobile apps',
    skills: [
      { name: 'Kotlin', mono: 'Kt' },
      { name: 'Jetpack Compose', mono: 'Jc' },
      { name: 'MVVM', mono: 'Mv' },
      { name: 'Room Database', mono: 'Rm' },
      { name: 'Retrofit', mono: 'Rf' },
      { name: 'OkHttp', mono: 'Ok' },
      { name: 'Android Studio', mono: 'As' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data & storage',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'DBMS Concepts', mono: 'Db' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    subtitle: 'API, UI, performance & E2E',
    skills: [
      { name: 'Postman', mono: 'Pm' },
      { name: 'Playwright', mono: 'Pw' },
      { name: 'Apache JMeter', mono: 'Jm' },
      { name: 'Chrome DevTools', mono: 'Dt' },
    ],
  },
  {
    id: 'libraries',
    title: 'Libraries',
    subtitle: 'Data & machine learning',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Scikit-learn', mono: 'Sk' },
    ],
  },
  {
    id: 'process',
    title: 'Tools & Process',
    subtitle: 'How the work gets shipped',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Jira', mono: 'Ji' },
      { name: 'Agile', mono: 'Ag' },
      { name: 'Scrum', mono: 'Sc' },
      { name: 'SDLC', mono: 'Sd' },
      { name: 'Sprint Planning', mono: 'Sp' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, experience or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Skill Swap', 'Python Using AI'],
  JavaScript: ['Skill Swap', 'Electrobtech Innovations'],
  'React.js': ['Electrobtech Innovations'],
  HTML: ['Skill Swap'],
  CSS: ['Skill Swap'],
  'Node.js': ['Electrobtech Innovations'],
  'Express.js': ['Electrobtech Innovations'],
  Flask: ['Skill Swap'],
  'REST APIs': ['Skill Swap', 'Electrobtech Innovations', 'Mind Matrix'],
  Kotlin: ['Namma-Kathey', 'Mind Matrix'],
  'Jetpack Compose': ['Mind Matrix'],
  MVVM: ['Namma-Kathey', 'Mind Matrix'],
  'Room Database': ['Mind Matrix'],
  Retrofit: ['Mind Matrix'],
  OkHttp: ['Mind Matrix'],
  'Android Studio': ['Namma-Kathey', 'Mind Matrix'],
  MongoDB: ['Electrobtech Innovations'],
  PostgreSQL: ['Skill Swap'],
  Postman: ['Electrobtech Innovations'],
  Playwright: ['Electrobtech Innovations'],
  'Apache JMeter': ['Electrobtech Innovations'],
  'Chrome DevTools': ['Electrobtech Innovations'],
  Pandas: ['Skill Swap'],
  NumPy: ['Skill Swap'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2019 – 2022',
    synopsis: 'School and Pre-University years in Kollegal — SSLC, then Physics, Chemistry, Mathematics and Biology.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'SSLC at Adarsha Vidhyalaya School, Kollegal — finishing with 86.4%.',
        tags: ['SSLC', '86.4%'],
        runtime: 'Mar 2019 – Apr 2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Science Track',
        description: 'Pre-University in PCMB at Nisarga Independent PU College, Kollegal — finishing with 73.83%.',
        tags: ['PCMB', 'Pre-University'],
        runtime: 'Mar 2020 – Apr 2022',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Science',
    period: '2022 – 2026',
    synopsis: 'Bachelor of Engineering in Computer Science at Rajarajeshwari College of Engineering, Bengaluru.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Engineering in Computer Science — CGPA 7.6 / 10.',
        tags: ['B.E.', 'Computer Science', 'CGPA 7.6'],
        runtime: 'Dec 2022 – Jul 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Toolkit',
        description: 'Python, JavaScript, TypeScript and SQL, with Pandas, NumPy and Scikit-learn, plus DBMS concepts.',
        tags: ['Python', 'JavaScript', 'SQL'],
        runtime: 'Foundations',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Originals',
    period: 'Web & Android',
    synopsis: 'Two Originals — a full-stack skill-exchange platform and a cultural-heritage Android app.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Web Builder',
        description: 'Skill Swap — a Flask and PostgreSQL web app with REST APIs, real-time chat, video conferencing and community forums.',
        tags: ['Python', 'Flask', 'PostgreSQL'],
        runtime: 'Web',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Storyteller',
        description: "Namma-Kathey — Karnataka's district-wise hero stories in Kannada and English, with Text-to-Speech, quizzes and Heritage Badges.",
        tags: ['Kotlin', 'MVVM', 'Google Maps API'],
        runtime: 'Android',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'The Android Arc',
    period: 'Feb – May 2026',
    synopsis: 'Android App Developer Intern at Mind Matrix — real-world Android application development.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Intern',
        description: 'Developed Android applications with Kotlin and Jetpack Compose — responsive, user-friendly mobile interfaces.',
        tags: ['Kotlin', 'Jetpack Compose'],
        runtime: 'Feb 2026 – May 2026',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'The Architect',
        description: 'Implemented features with MVVM and Room Database, with API integration through Retrofit and OkHttp.',
        tags: ['MVVM', 'Room', 'Retrofit', 'OkHttp'],
        runtime: 'Mind Matrix',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'In Production',
    period: 'Now streaming',
    synopsis: 'Full Stack Developer at Electrobtech Innovations Pvt. Ltd. — building, testing and shipping a real-world production application.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Full-Stack Developer',
        description: 'Frontend and backend features, REST API integration and reusable, responsive React.js components backed by Express.js and MongoDB.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        runtime: 'Present',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Tester',
        description: 'Functional, UI/UX, responsive, API, accessibility, security, performance, integration and end-to-end testing.',
        tags: ['Postman', 'Playwright', 'Apache JMeter', 'DevTools'],
        runtime: 'Electrobtech',
        palette: ocean,
      },
      {
        code: 'S05 E03',
        title: 'The Release',
        description: 'Collaborating with developers — debugging issues, validating features, optimizing performance and getting releases ready.',
        tags: ['Debugging', 'Performance', 'Release readiness'],
        runtime: 'Electrobtech',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Full Stack Developer', detail: 'Electrobtech Innovations Pvt. Ltd.', palette: crimson },
  { label: 'The web Original', title: 'Skill Swap', detail: 'Flask • PostgreSQL • real-time chat', palette: amber },
  { label: 'The Android Original', title: 'Namma-Kathey', detail: 'Kannada & English • Text-to-Speech', palette: jade },
  { label: 'Internship', title: 'Mind Matrix', detail: 'Android App Developer Intern', palette: violet },
  { label: 'Frontend', title: 'React.js', detail: 'Reusable, responsive components', palette: ocean },
  { label: 'Backend', title: 'Node.js', detail: 'with Express.js & MongoDB', palette: amber },
  { label: 'Testing arsenal', title: 'Playwright', detail: 'with Postman, JMeter & DevTools', palette: crimson },
  { label: 'Mobile stack', title: 'Kotlin', detail: 'Jetpack Compose • MVVM • Room', palette: jade },
  { label: 'Academics', title: 'B.E. CSE', detail: 'CGPA 7.6 • Rajarajeshwari College', palette: violet },
  { label: 'Certified', title: '4 Certificates', detail: 'Python • Data Analytics • Gen AI', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · Computer Science',
    lines: ['Rajarajeshwari College of Engineering, Bengaluru', 'December 2022 – July 2026'],
    chips: ['CGPA 7.6'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack first.',
    lines: ['React.js, Node.js, Express.js · Python, Flask', 'MongoDB, PostgreSQL · REST APIs · Kotlin'],
    chips: ['React.js', 'Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB'],
  },
  {
    kicker: 'Experience',
    title: 'In Production',
    lines: ['Full Stack Developer · Electrobtech Innovations Pvt. Ltd.', 'Features, REST APIs and responsive React.js components', 'Tested with Postman · Playwright · Apache JMeter'],
  },
  {
    kicker: 'Internship',
    title: 'The Android Arc',
    lines: ['Android App Developer Intern · Mind Matrix', 'February 2026 – May 2026', 'Kotlin · Jetpack Compose · MVVM · Room · Retrofit'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['Skill Swap — skill exchange with chat, video & forums', "Namma-Kathey — Karnataka's heroes in Kannada & English"],
  },
  {
    kicker: 'Quality',
    title: 'Tested end to end.',
    lines: ['Functional · UI/UX · Responsive · API · Accessibility', 'Security · Performance · Integration · End-to-End'],
  },
  {
    kicker: 'Certified',
    title: '4 Certifications',
    lines: ['Python Using AI · Data Analytics (Grow AI)', 'AI Tools Workshop · Gen AI Powered by Data Analytics'],
  },
];

export type ProfileId = 'surya' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'experience' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'surya',
    name: 'Surya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'experience', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'experience', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'experience', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'experience', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  experience: { nav: 'Experience', card: 'My Experience', meta: `${experience.length} Roles • Now streaming`, palette: ocean },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • ${projects.map((p) => p.year).join(' & ')}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Highlights', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
