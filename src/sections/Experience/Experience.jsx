import styles from './ExperienceStyles.module.css';

const experiences = [
    {
        role: 'Full Stack Software Engineer',
        company: 'VitoTech Solutions',
        period: '2023 — Present',
        description:
            'Leading full-stack development of enterprise web and mobile applications. Building scalable services with Spring Boot, React, and Flutter. Architecting cloud solutions on AWS and Firebase.',
        achievements: [
            'Built company website and mobile app from scratch',
            'Delivered enterprise solutions for multiple clients',
            'Implemented CI/CD pipelines with GitHub Actions',
        ],
    },
    {
        role: 'Software Developer',
        company: 'NARCO (National Ranching Company)',
        period: '2023',
        description:
            'Developed an Animal Management System for tracking livestock records, generating reports, and managing notifications across departments.',
        achievements: [
            'Designed and implemented full database schema',
            'Built role-based access control system',
            'Integrated notification and reporting modules',
        ],
    },
    {
        role: 'Mobile App Developer',
        company: 'Sombyo Financial Services',
        period: '2023',
        description:
            'Created the corporate website for a financial services company providing micro-loans to small businesses.',
        achievements: [
            'Designed responsive UI with modern web standards',
            'Implemented loan calculator and service pages',
            'Optimized for performance and SEO',
        ],
    },
    {
        role: 'Software Engineering Intern',
        company: 'University of Dar es Salaam',
        period: '2022 — 2023',
        description:
            'Developed an inclusive e-learning platform for children with hearing impairments, featuring separate student and instructor portals.',
        achievements: [
            'Built accessible UI following WCAG guidelines',
            'Implemented video-based learning modules',
            'Created instructor dashboard for content management',
        ],
    },
];

function Experience() {
    return (
        <section id="experience" className={styles.container}>
            <h1 className="sectionTitle">Experience</h1>

            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`${styles.timelineItem} animate-fadeInUp`}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className={styles.timelineDot}></div>
                        <div className={`${styles.card} glass-card`}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <p className={styles.company}>{exp.company}</p>
                                </div>
                                <span className={styles.period}>{exp.period}</span>
                            </div>
                            <p className={styles.description}>{exp.description}</p>
                            <ul className={styles.achievements}>
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>
                                        <span className={styles.achievementIcon}>▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
