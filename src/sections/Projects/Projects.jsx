import styles from "./ProjectsStyles.module.css";
import elearning from "../../assets/ekids.png";
//import elearning2 from "../../assets/loginn.png";
import sombyo from "../../assets/sombyo.png";
import vitotech from "../../assets/vito.png";
import roadSystem from "../../assets/trac1.png";
import animalSystem from "../../assets/narco1.png";
import ProjectCard from "../../common/ProjectCard";

function Projects({ src, images = [], h3, p, link }) {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={vitotech}
          h3="Our tech website offering software development services"
          p="Official website for VitoTech, showcasing our software development services and expertise. and expiriance team working on various projects."
        />
        <ProjectCard
          src={elearning}
          h3="Smart E-Learning for Kids with Hearing Impairments"
          p="An accessible learning platform with separate student and instructor portals. and is for kids with hearing impairments. visual and interactive learning experience."
          link="http://64.227.142.90/onboarding"
        />
        <ProjectCard
          src={sombyo}
          h3="Sombyo Website"
          p="financial services company offering loans for small business withing the society."
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
        
      </div>
    </section>
  );
}

export default Projects;
