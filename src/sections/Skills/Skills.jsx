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
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Angular.js" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap CSS" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
      </div>
      <hr />

      {/* Backend & Frameworks */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Spring Boot" />
        <SkillList src={checkMarkIcon} skill="Laravel" />
      </div>
      <hr />

      {/* Databases */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
      <hr />

      {/* DevOps & Tools */}
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
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="RESTful APIs" />
        <SkillList src={checkMarkIcon} skill="GraphQL APIs" />
        <SkillList src={checkMarkIcon} skill="Cloud & Storage APIs" />
        <SkillList src={checkMarkIcon} skill="Payment & Billing APIs" />
        <SkillList src={checkMarkIcon} skill="Communication APIs" />
        <SkillList src={checkMarkIcon} skill="AI & ML APIs" />
      </div>
      <hr />

      {/* AI & Data */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Data Science" />
        <SkillList src={checkMarkIcon} skill="Big Data Analytics" />
        <SkillList src={checkMarkIcon} skill="Data Mining" />
        <SkillList src={checkMarkIcon} skill="Data Warehousing" />
      </div>
    </section>
  );
}

export default Skills;
