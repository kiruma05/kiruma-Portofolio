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
import CV from "../../assets/Frank_Joseph_Kiruma_Full_CV.pdf";
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
          Software Engineer passionate about building scalable full-stack web apps with React, Angular, Node.js, and Spring Boot. Enthusiastic about DevOps, Cloud APIs, and AI integration.
        </p>
        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
