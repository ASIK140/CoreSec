import { Link } from 'react-router-dom';
import styles from './CourseCard.module.scss';

export default function CourseCard({ id, title, price, thumbnail, language }) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseThumbnail}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={styles.courseInfo}>
        <h3>{title}</h3>
        <div className={styles.courseMeta}>
          <span className={styles.live}>LIVE CLASS</span>
          <span className={styles.language}>{language}</span>
        </div>
        <div className={styles.coursePrice}>Rs. {price} /-</div>
        <Link to={`/courses/${id}`} className={styles.courseBtn}>
          View Details
        </Link>
      </div>
    </div>
  );
}