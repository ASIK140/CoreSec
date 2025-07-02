import styles from './About.module.scss';
import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <section className={styles.aboutUs} id="about">
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2>About CoreSec</h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.aboutDescription}>
            CoreSec is a premier technology education platform dedicated to
            bridging the gap between academic learning and industry requirements
            in the digital world.
          </p>

          <div className={styles.missionVision}>
            <div className={styles.mvItem}>
              <FaBullseye className={styles.icon} />
              <h3>Our Mission</h3>
              <p>
                To empower individuals with practical, industry-relevant tech
                skills through accessible and affordable education.
              </p>
            </div>
            <div className={styles.mvItem}>
              <FaEye className={styles.icon} />
              <h3>Our Vision</h3>
              <p>
                To become the most trusted career accelerator for tech aspirants
                in Eastern India by 2027.
              </p>
            </div>
          </div>

          <div className={styles.coreValues}>
            <h3>Our Core Values</h3>
            <ul>
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Student-first approach in all our programs
              </li>
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Practical, project-based learning methodology
              </li>
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Affordable pricing without compromising quality
              </li>
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Continuous curriculum updates based on industry trends
              </li>
              <li>
                <FaCheckCircle className={styles.checkIcon} />
                Bengali language support for better understanding
              </li>
            </ul>
          </div>

          <div className={styles.ctaBox}>
            <h3>Ready to start your tech journey?</h3>
            <p>
              Join hundreds of students who've transformed their careers with
              our programs
            </p>
            <a href="#course-section" className={styles.btn}>Explore Courses</a>
          </div>
        </div>
      </div>
    </section>
  );
}