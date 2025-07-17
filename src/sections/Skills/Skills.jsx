import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {/* Programming Languages */}
      <h2 className="sectionTitle">Programming Languages</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="C#" />
        
      </div>
      <hr />

      {/* Frontend */}
      <h2 className="sectionTitle">Frontend Technologies</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Angular.js" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap CSS" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Sass" />
        <SkillList src={checkMarkIcon} skill="jQuery" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Next.js" />
        <SkillList src={checkMarkIcon} skill="Vue.js" />
       
      </div>
      <hr />

      {/* Backend & Frameworks */}
      <h2 className="sectionTitle">Backend & Frameworks</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Spring Boot" />
        <SkillList src={checkMarkIcon} skill="Laravel" />
      </div>
      <hr />

      {/* Databases */}
      <h2 className="sectionTitle">Databases</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Firebase" />
        <SkillList src={checkMarkIcon} skill="Redis" />
        <SkillList src={checkMarkIcon} skill="SQLite" />
        <SkillList src={checkMarkIcon} skill="Oracle Database" />

      </div>
      <hr />

      {/* DevOps & Tools */}
      <h2 className="sectionTitle">DevOps & Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git & GitHub" />
        <SkillList src={checkMarkIcon} skill="GitLab" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="Jenkins" />
        <SkillList src={checkMarkIcon} skill="Gradle & Groovy" />
        <SkillList src={checkMarkIcon} skill="TeamViewer" />
        <SkillList src={checkMarkIcon} skill="AnyDesk" />
      </div>
      <hr />

      {/* APIs & Cloud */}
      <h2 className="sectionTitle">APIs & Cloud Services</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="RESTful APIs" />
        <SkillList src={checkMarkIcon} skill="GraphQL APIs" />
        <SkillList src={checkMarkIcon} skill="Cloud & Storage APIs" />
        <SkillList src={checkMarkIcon} skill="Payment & Billing APIs" />
        <SkillList src={checkMarkIcon} skill="Communication APIs" />

        <SkillList src={checkMarkIcon} skill="AI & ML APIs" />
        <SkillList src={checkMarkIcon} skill="Cloud Platforms (AWS, Azure, GCP)" />

      </div>
      <hr />

      {/* AI & Data */}
      <h2 className="sectionTitle">AI & Data Technologies</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Data Science" />
        <SkillList src={checkMarkIcon} skill="Big Data Analytics" />
        <SkillList src={checkMarkIcon} skill="Data Mining" />
        <SkillList src={checkMarkIcon} skill="Data Warehousing" />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="Deep Learning" />
        <SkillList src={checkMarkIcon} skill="Natural Language Processing" />

      </div>
    </section>
  );
}

export default Skills;
