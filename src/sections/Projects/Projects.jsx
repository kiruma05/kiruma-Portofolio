import styles from "./ProjectsStyles.module.css";
/import elearning from "../../assets/elearning.png";
import sombyo from "../../assets/sombyo.png";
import vitotech from "../../assets/vitotech.png";
import roadSystem from "../../assets/trac1.png";
import animalSystem from "../../assets/narco1.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={elearning}
          h3="Smart E-Learning for Kids with Hearing Impairments"
          p="An accessible learning platform with separate student and instructor portals."
          link="http://64.227.142.90/onboarding"
        />
        <ProjectCard
          src={sombyo}
          h3="Sombyo Website"
          p="A clean, modern marketing site for a traditional medicine company."
          link="https://www.sombyo.co.tz/"
        />
        <ProjectCard
          src={vitotech}
          h3="VitoTech Company Website"
          p="Corporate site for VitoTech – showcasing services and products."
          link="https://vitohub.org/"
        />
        <ProjectCard
          src={roadSystem}
          h3="Road Accident Prevention System"
          p="A public awareness website with tracking and educational interface."
          link="https://artz-seven.vercel.app/"
        />
        <ProjectCard
          src={animalSystem}
          h3="Animal Management System"
          p="Software for managing animal records and notifications – built at NARCO."
          link="https://github.com/kiruma05/Animal-Management-Sytem"
        />
        <ProjectCard
          src={vitotech}
          h3="Online Pizza Delivery"
          p="A responsive food ordering system with full cart and checkout flow."
        />
      </div>
    </section>
  );
}

export default Projects;
