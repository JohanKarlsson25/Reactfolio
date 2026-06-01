// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "x", // Social media name
    component: FaSquareXTwitter, // Twitter icon from react-icons
    link: "Your twitter link", // Replace with your actual Twitter URL
  },
  {
    name: "linkedIn", // Social media name
    component: FaLinkedin, // LinkedIn icon
    link: "Your linkedIn link", // Replace with your actual LinkedIn URL
  },
  {
    name: "facebook",
    component: FaFacebookSquare, // Facebook icon
    link: "Your facebook link",
  },
  {
    name: "instagram",
    component: FaInstagramSquare, // Instagram icon
    link: "Your instagram link",
  },
  {
    name: "github",
    component: IoLogoGithub, // GitHub icon
    link: "Your github link",
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "Johan Karlsson"; // Replace with your name or brand name
const imgLogo = null; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects"/*, "Contact"*/];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: "", // Your profile image link
  authorDescription:
    "Nyexaminerad datateknikingenjör från KTH med starkt intresse för fullstackutveckling, backendarkitektur och moderna webbapplikationer", // Short bio or description about yourself
  getInTouchUrl: "Your contact url", // URL for your contact or form page
  authorName: "Johan Karlsson", // Replace with your name
  profileImgTagLine: "Junior Fullstack Developer", // Your tagline or job title
  authorContactMail: "johankarlsson3125@gmail.com", // Your email address
  authorContactNumber: "070-755 98 28", // Your contact number (optional)
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
const EducationPage = [
  {
    graduationYear: 2026, // Year of graduation
    degreeType: "Bachelor's degree", // Type of degree
    institution: "KTH Royal Institute of Technology", // Institution name
    institutionUrl: "", // Institution website link (optional)
  },
  // Add more educational qualifications if needed
];

// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const CertificatesPage = [
  {
    img: "src/Screenshot 2026-06-01 210504.png", // Certificate image URL
    title: "Network Security", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "Cisco", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "src/Screenshot 2026-06-01 210605.png", // Certificate image URL
    title: "Enterprise Networking, Security, and Automation", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "Cisco", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "src/Screenshot 2026-06-01 211032.png", // Certificate image URL
    title: "Introduction to Networks", // Certificate title
    description: "", // Short description of the certification
    issuedBy: "Cisco", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  FaGitAlt,
  FaGithub,
  TbBrandCpp,
  FaJava,
  FaJs,
  TbBrandKotlin,
  FaPython,
  FaHtml5,
  BsFiletypeXml,
  FaCss3Alt,
];

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.
const projectsPage = [
  {
    projectName: "Bachelor Thesis Internship – CQRS vs CRUD", // Project name
    projectDescription: "", // Project description
    projectURL: "", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "CQRS, CRUD, MongoDB, Rest API, MySQL, Java, Spring", // Tech stack used in the project
    date: "Mar 2026 - Jun 2026", // Project duration
  },
  {
    projectName: "Festival Booking System", // Project name
    projectDescription: "", // Project description
    projectURL: "", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Java, React.js, SQL, Rest API, Spring, Typescript", // Tech stack used in the project
    date: "Mar 2025 - Jun 2025", // Project duration
  },
  {
    projectName: "Movie/TV Database App", // Project name
    projectDescription: "Personal Project for an Imdb Clone", // Project description
    projectURL: "", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "Java, React.js, SQL, Rest API, Spring, Typescript", // Tech stack used in the project
    date: "Dec 2024 - Jan 2025", // Project duration
  },
  // Add more projects or remove the ones you don't need
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
};
