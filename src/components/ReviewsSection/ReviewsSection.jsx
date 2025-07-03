import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { reviews, reviewStats } from '../../data/reviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import styles from './ReviewsSection.module.scss';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const nextReview = () => {
    setCurrentIndex(prev => 
      (prev + reviewsPerPage) >= reviews.length ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex(prev => 
      prev === 0 ? reviews.length - reviewsPerPage : prev - 1
    );
  };

  const visibleReviews = reviews.slice(
    currentIndex, 
    currentIndex + reviewsPerPage
  );

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Students Say</h2>
          <div className={styles.ratingSummary}>
            <div className={styles.averageRating}>
              <span className={styles.ratingNumber}>{reviewStats.averageRating}</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < Math.floor(reviewStats.averageRating) ? styles.starFilled : styles.starEmpty}
                  />
                ))}
              </div>
              <span className={styles.totalReviews}>
                {reviewStats.totalReviews} reviews from {reviewStats.totalStudents} students
              </span>
            </div>
          </div>
        </div>

        <div className={styles.reviewsContainer}>
          <button 
            onClick={prevReview}
            className={styles.navButton}
            aria-label="Previous reviews"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.reviewsGrid}>
            {visibleReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <button 
            onClick={nextReview}
            className={styles.navButton}
            aria-label="Next reviews"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.dotsContainer}>
          {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${currentIndex === i * reviewsPerPage ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(i * reviewsPerPage)}
              aria-label={`Go to review set ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}