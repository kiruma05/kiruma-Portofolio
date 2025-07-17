import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/kiruma.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Frank_Joseph_Kiruma_Full_CV_2025.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Frank Kiruma"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Frank Joseph
          <br />
          Kiruma
        </h1>
        <h2>Full Stack Software Engineer | React, Angular, Node.js & Spring Boot</h2>

        <span>
          <a href="https://twitter.com/kiruma05" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/kiruma05" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/frankkiruma" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
  I'm a detail-oriented Software Engineer specializing in full-stack web development, with hands-on experience in building robust and scalable applications using React, Angular, Node.js, and Spring Boot. I’ve contributed to real-world solutions ranging from e-learning platforms for children with hearing impairments to enterprise systems for government agencies. My technical toolkit extends to DevOps (Docker, Kubernetes, Jenkins), cloud integration (RESTful/GraphQL APIs), and database systems like PostgreSQL and MongoDB. I’m passionate about solving complex problems, writing clean and maintainable code, and continuously learning to stay ahead in fast-evolving tech ecosystems.
</p>

        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
