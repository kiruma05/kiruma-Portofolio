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
        <h2>Full Stack Software Engineer & Mobile App Developer | Flutter, React, Spring Boot
</h2>


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
  I'm a passionate Software Engineer with expertise in both full-stack and mobile application development.
  I build robust, scalable solutions using React, Angular, Node.js, and Spring Boot—and I also specialize in
  creating high-performance cross-platform mobile apps with Flutter (Dart), Java, and Firebase.  
  My portfolio includes real-world projects such as an inclusive e-learning platform for children with hearing
  impairments, enterprise systems for NARCO and FADEMO, and a car rental app with booking, role-based access,
  and cloud integration.  
  I’m experienced with technologies like SQLite, Hive, RESTful APIs, Firebase Authentication, and CI/CD for mobile.
  I enjoy solving meaningful problems through thoughtful code, great UI/UX, and scalable system design.
</p>


        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
