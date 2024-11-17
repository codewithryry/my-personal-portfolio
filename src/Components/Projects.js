import CardProjects from "./CardProyects";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  
  // Define the projects based on the list provided
  const projects = [
    {
      title: "SafePath",
      description: "SafePath is a Node.js-based web application designed to empower students to anonymously report bullying incidents and receive immediate support through an integrated chatbot that utilizes sentiment analysis.",
      tecnology: ["EJS",
                  "Node.js",
                  "Express.js",
                  "MySQL",
                  "Wit.ai",
                  "Bootstrap"],
      gitHubLink: "https://github.com/codewithryry/SafePath",
    },
    {
      title: "Job Portal Website Template",
      description: "This is a responsive and modern job portal website template. It provides a clean and user-friendly interface for job seekers and employers to interact. The template includes job listings, filters, job applications, and user authentication forms for both job seekers and employers",
      tecnology: [],
      gitHubLink: "https://github.com/codewithryry/JobEntry-job-portal-website-template.git",
    },
    {
      title: "notehub",
      description: "Notehub is a private project that was created using CSS. It was last updated a week ago, showcasing your skills in styling and layout design.",
      tecnology: ["CSS"],
    },
    {
      title: "netsight",
      description: "It focuses on providing users with real-time insights and analytics through an intuitive interface. The project leverages JavaScript to handle dynamic content updates and interactions, ensuring a smooth and responsive user experience.",
      tecnology: ["JavaScript"],
    },
    {
      title: "capstone-title-generator",
      description: "is a tool designed to help users generate creative and unique titles for their capstone projects. This project uses a combination of algorithms and predefined patterns to produce a variety of title options based on user inputs. It's a useful tool for students and professionals alike who are looking for inspiration or need help coming up with the perfect title for their final project.",
      tecnology: ["JavaScript"],
      gitHubLink: "https://github.com/codewithryry/capstone-title-generator",
    },
    {
      title: "minsu-safepath",
      description: "serves as the main prototype for the SafePath project, which is a web application designed to provide a safe and anonymous platform for students to report bullying incidents. The project aims to promote student safety and well-being by allowing users to submit complaints and receive support through a built-in chatbot feature.",
      tecnology: ["CSS"],
      gitHubLink: "https://github.com/codewithryry/minsu-safepath",
    },
    // Add more entries based on the repositories you want to display
  ];

  return (
    <section id="projects" className="projectContainer">
      <div className="titleSection">
        <div className="titleandNumber">
          <span>.03</span>
          <p>{t("text.proyect")}</p>
        </div>
        <div></div>
      </div>
      <main>
        {projects.map((project, index) => (
          <CardProjects key={index} project={project} />
        ))}
      </main>
    </section>
  );
};

export default Projects;
