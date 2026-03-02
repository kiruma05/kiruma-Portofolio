import styles from './SkillsStyles.module.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '⟨/⟩',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'C++', 'C#', 'PHP'],
  },
  {
    title: 'Mobile',
    icon: '📱',
    skills: ['Flutter', 'Android (Java)', 'Firebase', 'SQLite', 'Hive', 'Provider', 'Material Design'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'Sass', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'PHP', 'Laravel', 'REST APIs', 'GraphQL', 'FastAPI'],
  },
  {
    title: 'Data Engineering',
    icon: '🔧',
    skills: ['Apache NiFi', 'Apache Spark', 'Apache Airflow', 'Marquez', 'Apache Ranger', 'Apache Superset', 'MinIO', 'MLflow', 'Griffin', 'FastAPI'],
  },
  {
    title: 'Payment Gateways',
    icon: '💳',
    skills: ['Stripe', 'PayPal', 'M-Pesa', 'Flutterwave', 'Paystack', 'Razorpay'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis', 'SQLite', 'Oracle'],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Jenkins', 'CI/CD', 'Git'],
  },
  {
    title: 'AI & Data',
    icon: '🧠',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Science', 'Big Data', 'Data Mining'],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Tech Stack</h1>

      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`${styles.category} glass-card animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
            <div className={styles.skillChips}>
              {category.skills.map((skill, i) => (
                <span key={i} className={styles.chip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
