import CardOtherProjects from "./CardOtherProjects";
import { useTranslation } from "react-i18next";

const MoreProjects = () => {
  const { t } = useTranslation();

  const projects = [
    // {
    //   title: "SafePath",
    //   description: "text.otherProyect.description.one",
    //   tecnology: ["EJS"],
    //   gitHub: "https://github.com/codewithryry/safepath",
    // },
    // {
    //   title: "capstone-title-generator",
    //   description: "text.otherProyect.description.two",
    //   tecnology: ["JavaScript"],
    //   gitHub: "https://github.com/codewithryry/capstone-title-generator",
    // },
    // {
    //   title: "minsu-safepath",
    //   description: "text.otherProyect.description.three",
    //   tecnology: ["CSS"],
    //   gitHub: "https://github.com/codewithryry/minsu-safepath",
    // },
    {
      title: "activity-1-django---gaydetection",
      description: "text.otherProyect.description.four",
      tecnology: ["HTML"],
      gitHub: "https://github.com/codewithryry/activity-1-django---gaydetection",
    },
    {
      title: "simple-budget-app",
      description: "text.otherProyect.description.five",
      tecnology: ["JavaScript"],
      gitHub: "https://github.com/codewithryry/simple-budget-app",
    },
    {
      title: "limited-edition-merch-store",
      description: "text.otherProyect.description.six",
      tecnology: ["PHP"],
      gitHub: "https://github.com/codewithryry/limited-edition-merch-store",
    },
  ];

  return (
    <section className="containerOtherProjects">
      <div className="titleSection">
        <div className="titleandNumber">
          <span></span>
          <p>{t("text.otherProyect")}</p>
        </div>
        <div></div>
      </div>
      <main className="containerCardsOtherProjects">
        {projects.map((project, index) => (
          <CardOtherProjects key={index} project={project} />
        ))}
      </main>
    </section>
  );
};
export default MoreProjects;
