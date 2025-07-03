import { FaStar, FaRegStar, FaCheckCircle } from 'react-icons/fa';
import styles from './ReviewCard.module.scss';

export default function ReviewCard({ review }) {
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      i < review.rating ? 
        <FaStar key={i} className={styles.starFilled} /> : 
        <FaRegStar key={i} className={styles.starEmpty} />
    ));
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.avatarContainer}>
          <img 
            src={review.avatar} 
            alt={review.studentName} 
            className={styles.avatar}
            loading="lazy"
          />
          {review.verified && <FaCheckCircle className={styles.verifiedBadge} />}
        </div>
        <div className={styles.studentInfo}>
          <h4>{review.studentName}</h4>
          <p className={styles.courseName}>{review.course}</p>
          <div className={styles.ratingContainer}>
            {renderStars()}
            <span className={styles.ratingNumber}>{review.rating}.0</span>
          </div>
        </div>
      </div>
      <div className={styles.reviewContent}>
        <p className={styles.comment}>"{review.comment}"</p>
        <time dateTime={review.date} className={styles.date}>
          {new Date(review.date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </time>
      </div>
    </div>
  );
}