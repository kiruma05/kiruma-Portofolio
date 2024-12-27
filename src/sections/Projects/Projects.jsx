import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/narco1.png";
import freshBurger from "../../assets/temeasa2.png";
import hipsster from "../../assets/temesa3.png";
import fitLift from "../../assets/temesa1.jpg";
import trac1 from "../../assets/trac1.png";
import trac2 from "../../assets/trac2.png";
import trac3 from "../../assets/trac3.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={trac2}
          link="https://www.tractz.org/"
          h3="trac2"
          p="Road accident prevantation website"
        />
        <ProjectCard
          src={trac1}
          link="https://www.tractz.org/"
          h3="trac1"
          p="Fitness App"
        />
        <ProjectCard
          src={trac3}
          link="https://www.tractz.org/"
          h3="trac3"
          p="Road accident prevantation website its interface"
        />
        <ProjectCard
          src={viberr}
          //link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          //link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          //link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          //link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
        <ProjectCard
          src={fitLift}
          //link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
        <ProjectCard
          src={fitLift}
          //link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
