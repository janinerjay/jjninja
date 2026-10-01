// Single source of truth for the resume content. The page, the code view,
// the terminal and the console object all read from here.
import DeveloperResume from "./assets/Jay_Dev_Resume.pdf";
import Resume from "./assets/Jay_Resume.pdf";

export const name = "Janine Jay";
export const tagline = "Senior Software Engineer ~ UX/UI Engineer";

export const contact = {
  email: "janinerjay@icloud.com",
  github: "https://github.com/janinerjay",
  linkedin: "https://www.linkedin.com/in/janinerjay",
  website: "https://janinejay.ninja",
};

export const resumes = {
  dev: {
    href: DeveloperResume,
    filename: "Jay_Dev_Resume.pdf",
    label: "My Resume: Developer Version",
  },
  hr: {
    href: Resume,
    filename: "Jay_Resume.pdf",
    label: "My Resume: HR Version",
  },
};

export const experience = [
  {
    company: "Liberty Mutual Insurance",
    title: "Senior Software Engineer",
    location: "Boston, MA",
    dates: "September 2018-Present",
    bullets: [
      "Selected for Liberty Mutual's TechStart Leadership Development Program",
      "Delivered seven zero-defect annual compensation cycles: 320,000+ statements across 26 countries, while resolving data integrity defects upstream from our own applications",
      "Built reusable GitHub Copilot agents for UI migration, testing, and PR readiness, saving 20–30 minutes per PR and recovering 4–8 engineering hours monthly",
      "Modernized compensation workflows and data systems, including a bulk-override capability that replaced 4,200 manual edits with secure, auditable in-app operations",
      "Led security and resilience work for sensitive HR systems, including threat modeling, vulnerability remediation, data masking, transactional failure handling, and CI/CD modernization",
      "Placed third in two consecutive company-wide hackathons judged by C-suite leadership",
      "Mentored engineers and enabled contractors through standards, tooling, and onboarding",
      "Mentored seven colleagues through the Women in Technology Program; all received full-time offers at Liberty",
    ],
  },
  {
    company: "Cigna Inc.",
    title: "Technical Analyst Intern",
    location: "Bloomfield, CT",
    dates: "May-August 2017",
    bullets: [
      "Contributed to a team which rewrote a company website from AngularJS to Angular 2",
      "Designed a new user interface for a customer-facing website with Sketch",
      "Participated in an intern capstone project team by building the entire front end of a web application",
    ],
  },
  {
    company: "Houlihan Lawrence",
    title: "Assistant",
    location: "Greenwich, CT",
    dates: "May 2015-August 2016",
    bullets: [
      "Worked as an administrative assistant to two popular and highly regarded real estate agents",
      "Kept both agents' online listings up to date, maintained information in the local real estate database, created and managed online marketing, assisted in staging of homes, and interfaced with town administrators",
      "Utilized my design and computer skills to expand the agents' online presence as well as develop materials for print and distribution",
    ],
  },
  {
    company: "MakerBot Inc.",
    title: "Retail Operator (Summer 2014-January 2015), Intern (May-June 2014)",
    location: "Greenwich, CT",
    dates: "Seasonal: June 2014-January 2015",
    bullets: [
      "Taught classes to customers on software and hardware to increase understanding of 3-D printing and modeling",
      "Held community events to increase awareness of 3D printing and uses for schools, businesses, and homes",
      "Managed product sales and maintenance of store equipment to keep inventory current",
    ],
  },
];

export const education = {
  quinnipiac: {
    school: "Quinnipiac University, School of Engineering",
    degree: "BS Software Engineering",
    location: "Hamden, CT",
    graduation: "May 2018",
    honors: "Magna Cum Laude",
    notes: [
      "Minor in Mathematics",
      "Honors Program, Dean's List",
      "Recipient of QU Trustee's Award and Travelers Scholarship Award",
    ],
    courses: [
      "Programming and Problem Solving",
      "Object Oriented Design",
      "Data Structures and Analysis",
      "Introduction to Software Development",
      "Algorithm Design",
      "Software Design and Development",
      "Computer Networking",
      "Software and Healthcare",
      "Software Requirements Analysis",
      "Software Project Management",
      "Software Senior Capstone",
    ],
    organizations: [
      "Quinnipiac Computing Club ~ Founding Member & President",
      "Quinnipiac Honors Program ~ Member",
      "QU Engineering Student Organization ~ Member",
      "Alpha Delta Pi ~ Sister & Recruitment Information Manager",
      "University Innovation Fellows ~ Fellow",
      "Society of Women Engineers ~ Member",
    ],
  },
  queenMary: {
    school: "Queen Mary University of London",
    program: "Study Abroad ~ Software Engineering",
    location: "London, England",
    dates: "January 2017-June 2017",
    description:
      "During Spring of 2017, I studied in London, England and was privileged to travel around continental Europe",
    courses: ["Graphical User Interfaces"],
  },
};

// `level` is out of 9 and only set for the skills rated on the developer resume.
export const SKILL_LEVEL_MAX = 9;
export const skills = [
  { name: "AWS", level: 7 },
  { name: "React", level: 7 },
  { name: "CI/CD", level: 6 },
  { name: "Security Engineering", level: 6 },
  { name: "JavaScript" },
  { name: "TypeScript", level: 7 },
  { name: "UX/UI Design" },
  { name: "GitHub Copilot / AI Engineering", level: 7 },
  { name: "Figma" },
  { name: "PostgreSQL", level: 7 },
  { name: "System Design" },
  { name: "Java" },
  { name: "Git" },
  { name: "TanStack Query", level: 6 },
  { name: "HTML/CSS" },
  { name: "Prompt Engineering" },
  { name: "Bootstrap" },
  { name: "Agile Methodologies" },
  { name: "Product Thinking" },
  { name: "Angular" },
  { name: "Object Oriented Design" },
  { name: "Scala" },
  { name: "Project Management" },
  { name: "Android SDK" },
  { name: "iOS" },
  { name: "MakerBot 3D Printers" },
  { name: "Microsoft Office" },
];

export const specialSkills = [
  "Makes a mean peach-blueberry pie",
  "Avid snowblader",
  "Can rock a dance floor for 5+ hours",
  "One of history's greatest minds in the construction of snow forts",
  'Can belt "Carry On My Wayward Son" at the top of my lungs',
  "Master with a soldering iron",
];

export const volunteering = [
  {
    org: "Beacon Hill Women's Forum",
    roles: [
      {
        title: "Co-President, former Treasurer",
        dates: "October 2022–Present",
        description:
          "The Women's Forum is an organization open to all women who live in the extended Beacon Hill community. It is a non-profit group that comes together to build community with a mission to connect, inspire, and enjoy!",
        bullets: [
          "Lead operations, financial stewardship, and membership growth for a 200-member Boston nonprofit",
          "Increased organizational reach by 30% while managing annual nonprofit budgets",
          "Successfully ran entire non-profit on a board of volunteers, encompassing program, marketing, finance, event planning, and more",
          "Maintained diligent records of budgets, revenues, and expenses for distribution to our board and accountant",
          "Revamped the Treasurer role with no finance background so that any member could feel comfortable taking on the role in the future",
        ],
      },
    ],
  },
  {
    org: "Quinnipiac University Advisory Board",
    roles: [
      {
        title: "Advisory Board Member",
        dates: "January 2026–Present",
        bullets: [
          "Advising on the Software Engineering curriculum to align academic programs with current industry practices",
          "Bridging talent pipeline opportunities between the university and Liberty Mutual recruiting teams",
        ],
      },
    ],
  },
  {
    org: "Boston SPARK Council",
    roles: [
      {
        title: "Council Member",
        dates: "September 2022–September 2023",
        description:
          "The SPARK Council is an appointed position that serves as the Mayor's ambassadors to the rest of Boston's large and diverse population of 20-35 year olds.",
        bullets: [
          "Acted as an ambassador representing Boston to our various 'sister cities'",
          "Attended city meetings and reported back minutes to general council to promote civic engagement",
          "Volunteered at voter registration booths and encouraged community gathering",
        ],
      },
    ],
  },
  {
    org: "Beacon Hill Civic Association",
    roles: [
      {
        title: "Green Committee ~ Chair",
        description:
          "The Green Committee aims to support and encourage sustainable living for Beacon Hill residents and businesses.",
        bullets: [
          "Advocated for a residential curbside composting through the City of Boston which is now starting a pilot program",
          "Educated residents on recycling right and responsible consumerism through a weekly newsletter column",
          "Ran a table at a local festival with an interactive exhibit to educate local children about composting",
          "Most recent initiative is working to encourage zero-waste packaging for local businesses, particularly those in the food and beverage industry",
        ],
      },
      {
        title: "Young Friends ~ Chair",
        description:
          "Young Friends is an organization where we host monthly meetups for young professionals in the neighborhood.",
        bullets: [
          "Through consistent outreach, as well as welcoming interactions at our meetups, our attendance is up by 50% in the last two years",
          "Our online meetups during Covid were well attended due to their engaging atmosphere",
        ],
      },
      {
        title: "Streets & Sidewalks ~ Co-Chair",
        description:
          "The Streets & Sidewalks committee aims to recognize and address issues of maintenance and cleanliness of the historic district of Beacon Hill, and work with the city of Boston officials to rectify any problems.",
        bullets: [
          "Created the 'Brick By Brick' initiative, a cleanup effort, as a grassroots effort around the neighborhood",
          "Advocated to change trash days from Monday/Friday to Monday/Thursday to be more spread out in the week",
        ],
      },
    ],
  },
];
