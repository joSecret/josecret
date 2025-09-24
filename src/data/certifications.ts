interface Certification {
    name: string;
    issuer: string;
    date: string;
    description: string;
    show: boolean;
}

const certifications: Certification[] = [
  {
    name: "Frontend Developer Certification",
    issuer: "FreeCodeCamp",
    date: "2020",
    description: "Comprehensive frontend development certification covering HTML, CSS, JavaScript, and React",
    show: true
  },
  {
    name: "Drupal 8 Site Building",
    issuer: "Acquia",
    date: "2020",
    description: "Advanced Drupal site building and theming certification",
    show: true
  },
  {
    name: "Acquia Certified Front-End Specialist",
    issuer: "Acquia",
    date: "2020",
    description: "Advanced Drupal site building and theming certification",
    show: true
  },
  {
    name: "Adobe Certified Expert (ACE)",
    issuer: "Adobe§",
    date: "2020",
    description: "Advanced Adobe tools and technologies certification",
    show: true
  },
  {
    name: "Web Accessibility Fundamentals",
    issuer: "W3C",
    date: "2021",
    description: "Web accessibility standards and implementation best practices",
    show: true
  }
];

export default certifications;
