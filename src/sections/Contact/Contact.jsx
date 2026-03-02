import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Get In Touch</h1>
      <p className={styles.subtitle}>
        Have a project in mind or want to collaborate? I'd love to hear from you.
      </p>

      <div className={`${styles.formCard} glass-card animate-fadeInUp`}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📧</span>
            <div>
              <h3>Email</h3>
              <p>kirumafrank05@gmail.com</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📍</span>
            <div>
              <h3>Location</h3>
              <p>Dar es Salaam, Tanzania</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>💼</span>
            <div>
              <h3>Status</h3>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
