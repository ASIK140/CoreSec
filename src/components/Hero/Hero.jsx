import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Launch Your<br />Tech Career<br />
          <span>Today.</span>
        </h1>
        <p>
          Industry-ready courses in programming, cybersecurity, and web
          development to help you thrive in the digital world.
        </p>
        <a href="#course-section" className={styles.btn}>Explore Courses</a>
      </div>
    </section>
  );
}