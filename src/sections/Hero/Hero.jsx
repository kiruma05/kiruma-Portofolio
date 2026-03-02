import styles from './HeroStyles.module.css';
import heroImg from '../../assets/kiruma.jpeg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Frank_Joseph_Kiruma_Full_CV_2025.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme } = useTheme();

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.bgGlow}></div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={`${styles.badge} animate-fadeInUp`}>
            <span className={styles.badgeDot}></span>
            Available for Opportunities
          </div>

          <h1 className={`${styles.headline} animate-fadeInUp delay-1`}>
            Hi, I'm{' '}
            <span className={styles.gradientText}>Frank Kiruma</span>
          </h1>

          <h2 className={`${styles.subtitle} animate-fadeInUp delay-2`}>
            Full Stack Engineer & Mobile Developer
          </h2>

          <p className={`${styles.description} animate-fadeInUp delay-3`}>
            Building scalable solutions with React, Flutter, and Spring Boot.
            From inclusive e-learning platforms to enterprise systems — I craft
            software that solves real-world problems with clean architecture
            and exceptional user experiences.
          </p>

          <div className={`${styles.actions} animate-fadeInUp delay-4`}>
            <a href={CV} download>
              <button className="btn-primary">
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
            </a>
            <a href="#contact">
              <button className="btn-secondary">Let's Talk</button>
            </a>
          </div>

          <div className={`${styles.socials} animate-fadeInUp delay-5`}>
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

        <div className={`${styles.imageWrapper} animate-fadeIn delay-2`}>
          <div className={styles.imageRing}>
            <img
              src={heroImg}
              className={styles.heroImage}
              alt="Frank Kiruma"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
