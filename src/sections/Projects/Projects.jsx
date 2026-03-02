import styles from './ProjectsStyles.module.css';
import elearning from '../../assets/ekids.png';
import sombyo from '../../assets/sombyo.png';
import vitotech from '../../assets/vito.png';
import vitotech1 from '../../assets/mobile1.jpeg';
import roadSystem from '../../assets/trac1.png';
import animalSystem from '../../assets/narco1.png';
import ProjectCard from '../../common/ProjectCard';

const projects = [
  {
    src: vitotech1,
    title: 'VitoTech Mobile App',
    description:
      'Official mobile application for VitoTech offering rating services and showcasing our software development expertise.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  },
  {
    src: vitotech,
    title: 'VitoTech Company Website',
    description:
      'Corporate website showcasing VitoTech\'s software development services, team expertise, and portfolio.',
    tags: ['React', 'Node.js', 'CSS3'],
    link: 'https://vitohub.org/',
  },
  {
    src: elearning,
    title: 'E-Learning for Hearing Impaired',
    description:
      'Inclusive learning platform with student and instructor portals, designed for children with hearing impairments.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Accessibility'],
    link: 'http://64.227.142.90/onboarding',
  },
  {
    src: sombyo,
    title: 'Sombyo Financial Platform',
    description:
      'Financial services website for micro-loan management serving small businesses within the community.',
    tags: ['Next.js', 'Tailwind', 'Node.js'],
    link: 'https://www.sombyo.co.tz/',
  },
  {
    src: roadSystem,
    title: 'Road Safety Awareness System',
    description:
      'Public awareness platform with accident tracking, educational resources, and interactive interface.',
    tags: ['React', 'Vercel', 'REST API', 'Maps'],
    link: 'https://artz-seven.vercel.app/',
  },
  {
    src: animalSystem,
    title: 'NARCO Animal Management',
    description:
      'Enterprise system for managing livestock records, notifications, and department-level reporting at NARCO.',
    tags: ['Spring Boot', 'PostgreSQL', 'Java', 'REST API'],
    link: 'https://github.com/kiruma05/Animal-Management-Sytem',
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
