import styles from './NavbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import { useState } from 'react';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const themeIcon = theme === 'light' ? sun : moon;

    const navLinks = [
        { href: '#hero', label: 'Home' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <a href="#hero" className={styles.logo}>
                    FK<span className={styles.logoDot}>.</span>
                </a>

                <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                        <img src={themeIcon} alt="Theme toggle" />
                    </button>
                </div>

                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
