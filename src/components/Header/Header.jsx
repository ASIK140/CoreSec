import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
          <img src={logo} alt="CoreSec Logo" />
          </a>
        </div>
        <div className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="#course-section">Courses</a>
          <a href="#about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}