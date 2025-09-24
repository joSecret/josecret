/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
  {
    title: "Senior Frontend Drupal Developer",
    startDate: "2021-08-01",
    company: "Eau de Web",
    location: "Romania",
    description: "Developed and maintained web applications using Drupal CSS PostCSS.",
    goals: [
      "Collaborated with senior developers to design and implement web applications using Drupal",
      "Assisted in debugging and optimizing front-end code to ensure smooth user experiences",
      "Participated in code reviews and contributed to improving coding standards within the team",
      "Developing and maintaining web applications using Drupal, HTML, and CSS",
      "Collaborating with the team to implement new features and fix bugs",
    ],
    currentJob: true,
  },
  {
    title: "Team-lead, Senior Frontend Drupal Developer",
    startDate: "2022-01-01",
    endDate: "2025-04-10",
    company: "SELK",
    location: "Moldova",
    description: "Developed and maintained web applications using Drupal, CSS, Twig, JavaScript, PostCSS.",
    goals: [
      "Led frontend development initiatives in a hybrid work environment.",
      "Managed and mentored development teams, ensuring project delivery and code quality.",
      "Specialized in building Drupal-based solutions with a focus on performance and scalability.",
      "Designed and implemented clean, modular, and maintainable frontend architectures.",
      "Collaborated cross-functionally to align business goals with technical solutions.",
      "Technologies used: Drupal, HTML, PostCSS, CSS, Twig, JavaScript, Git, Astro.js.",
    ],
    currentJob: false,
  },
  {
    title: "Senior Frontend Drupal Developer",
    startDate: "2020-02-01",
    endDate: "2022-02-01",
    company: "Optasy",
    location: "Canada",
    description: "Developed and maintained web applications using Drupal, Twig, JavaScript, CSS, SASS, Bootstrap.",
    goals: [
      "Worked remotely as Senior Frontend Drupal Developer for Optasy, a company based in Toronto, Canada.",
    ],
    currentJob: false,
  },
  {
    title: "Senior Frontend Drupal Developer",
    startDate: "2017-11-01",
    endDate: "2020-04-01",
    company: "Insomiac Design / Brand Graphics",
    location: "Moldova",
    description: "Developed and maintained web applications using Drupal, Twig, JavaScript, CSS, SASS, Bootstrap.",
    goals: [
      "Assisted in developing client websites and applications",
      "Gained hands-on experience with front-end and back-end technologies",
      "Focused on creating responsive and user-friendly web experiences",
    ],
    currentJob: false,
  },
  {
    title: "Senior Frontend Drupal Developer",
    startDate: "2017-01-01",
    endDate: "2017-10-01",
    company: "Soft Tehnica",
    location: "Moldova",
    description: "Developed and maintained web applications using Drupal, HTML, Bootstrap, SASS, CSS, Twig, Git.",
    goals: [
      "Assisted in developing client websites and applications",
      "Gained hands-on experience with front-end and back-end technologies",
      "Worked on various client projects with modern web technologies",
    ],
    currentJob: false,
  },
  {
    title: "Mid-Senior Frontend Drupal Developer",
    startDate: "2016-01-01",
    endDate: "2017-01-01",
    company: "Deeplace",
    location: "Moldova",
    description: "Developed and maintained web applications using Drupal, HTML, Bootstrap, SASS, CSS, Git.",
    goals: [
      "Focused on developing and maintaining Drupal-based websites with modern frontend technologies. This role marked an important step in advancing my Drupal expertise and frontend development skills.",
    ],
    currentJob: false,
  },
  {
    title: "Development & Frontend Drupal Developer & Design",
    startDate: "2014-01-01",
    endDate: "2016-01-01",
    company: "Freelance",
    location: "Moldova",
    description: "Developed web applications using Drupal, HTML, Bootstrap, SASS, CSS, PHP, Git.",
    goals: [
      "This freelance period allowed me to work with diverse clients and projects, gaining valuable experience in project management, client communication, and delivering high-quality Drupal solutions.",
    ],
    currentJob: false,
  },
  {
    title: "Development & Frontend Drupal Developer & Design",
    startDate: "2013-01-01",
    endDate: "2014-01-01",
    company: "Camlab",
    location: "Moldova",
    description: "Developed web applications using Drupal, HTML, Bootstrap, SASS, CSS, PHP, Git.",
    goals: [
      "Early career position where I developed foundational skills in Drupal development and modern frontend technologies. This role was instrumental in building my expertise in content management systems and web development.",
    ],
    currentJob: false,
  },
  {
    title: "Graphic design",
    startDate: "2012-01-01",
    endDate: "2013-01-01",
    company: "IuniePrim",
    location: "Moldova",
    description: "Developed visual designs and layouts for print media using Adobe InDesign, Photoshop, Illustrator, and CorelDRAW applications.",
    goals: [
      "This role involved creating print designs and layouts for various publishing projects. Working with Adobe Creative Suite and other design tools, I developed strong visual design skills that later complemented my web development career.",
    ],
    currentJob: false,
  },
  {
    title: "Development, Frontend Development, Web Design, Graphic design",
    startDate: "2008-01-01",
    endDate: "2012-01-01",
    company: "DesignART",
    location: "Moldova",
    description: "HTML, CSS, PHP, Photoshop, Illustrator, InDesign, CorelDRAW, Microsoft Office, Word, Excel, WordPress, Joomla, FileZilla, XAMPP, Notepad++, Sublime Text, Dreamweaver.",
    goals: [
      "Worked on various web projects including www.farm.md and www.constructii.md (now offline)",
      "Gained foundational experience in web development and design",
      "Developed skills in HTML, CSS, and PHP that formed the basis of my web development career",
      "Collaborated with clients to create custom websites and web applications",
      "Primary role: graphic designer (print media)",
      "Created branding materials and marketing collateral (brochures, posters, business cards) to support client campaigns",
      "Optimized web assets (images, layouts, typography) for faster loading times and better user experience",
      "Introduced new design tools and workflows that improved efficiency in both print and web projects",
    ],
    currentJob: false,
  },
];
export default workExperience;
