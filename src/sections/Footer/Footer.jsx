import styles from './FooterStyles.module.css';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Footer() {
  const { theme } = useTheme();

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <a href="#hero" className={styles.logo}>
            FK<span className={styles.logoDot}>.</span>
          </a>

          <nav className={styles.links}>
            <a href="#hero">Home</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.socials}>
            <a href="https://twitter.com/kiruma05" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://github.com/kiruma05" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <img src={githubIcon} alt="Github" />
            </a>
            <a href="https://linkedin.com/in/frankkiruma" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Frank Kiruma. All rights reserved.</p>
          <p className={styles.builtWith}>
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
