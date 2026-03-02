import styles from './ProjectCard.module.css';

function ProjectCard({ src, title, description, tags = [], link, index = 0 }) {
  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      className={`${styles.card} glass-card animate-fadeInUp`}
      style={{ animationDelay: `${index * 0.1}s` }}
      {...wrapperProps}
    >
      <div className={styles.imageContainer}>
        <img src={src} alt={title} className={styles.image} />
        <div className={styles.imageOverlay}>
          {link && (
            <span className={styles.viewBtn}>
              View Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

export default ProjectCard;
