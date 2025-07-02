import styles from './Courses.module.scss';
import { courses } from '../../data/courses';
import CourseCard from "../CourseCard/CourseCard"
export default function WhyChooseUs() {
  return (
    <section className={styles.Courses}>
      <div className={styles.container}>
        <h2 className={styles.headingText}>Courses Offered</h2>
        <div className={styles.features}>
              {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
        </div>
      </div>
    </section>
  );
}