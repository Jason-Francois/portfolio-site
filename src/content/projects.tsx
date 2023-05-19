import ProjectCard from "@/interfaces/ProjectCard";

const projects: ProjectCard[] = [
  {
    title: "IPTracker",
    description: "Identifies the location of IP addresses around the world",
    skills: "react;scss",
    backgroundImg: "IPTracker.png",
    githubUrl: "https://github.com/Jason-Francois/IP-Tracker",
    siteUrl: "https://ip-tracker-jason-francois.vercel.app/",
  },
  {
    title: "CountriesAPI",
    description:
      "Dashboard that consumes data from the rest-countries API and displays information about various countries",
    skills: "react;scss;nextJS;",
    backgroundImg: "countriesAPI.png",
    githubUrl: "https://github.com/Jason-Francois/countries-api",
    siteUrl: "https://countries-api-six-alpha.vercel.app/",
  },
];
export default projects;
