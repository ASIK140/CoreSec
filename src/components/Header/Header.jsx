import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
  const location = useLocation();

  const handleCourseClick = (e) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'course-section' } });
    }
  };
    const handleAboutClick = (e) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'about' } });
    }
  };
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
          <a href="/#course-section" onClick={handleCourseClick}>Courses</a>
          <a href="#about" onClick={handleAboutClick}>About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}