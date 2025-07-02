import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaLanguage,
  FaRupeeSign,
  FaChalkboardTeacher,
  FaChevronDown,
} from "react-icons/fa";
import { courses } from "../../data/courses";
import styles from "./CourseDetails.module.scss";

export default function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedWeek, setExpandedWeek] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const foundCourse = courses.find((c) => c.id === courseId);
        if (!foundCourse) throw new Error("Course not found");
        setCourse(foundCourse);
        // Expand first week by default
        if (foundCourse?.syllabus?.length > 0) {
          setExpandedWeek(0);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [courseId]);

  const toggleWeek = (index) => {
    setExpandedWeek(expandedWeek === index ? null : index);
  };

  if (loading) return <div className={styles.loadingContainer}>Loading...</div>;
  if (error) return <div className={styles.errorContainer}>{error}</div>;

  return (
    <div className={styles.courseDetails}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumb}>
        <Link to="/">Home</Link> &gt;
        <Link to="/courses">Courses</Link> &gt;
        <span>{course.title}</span>
      </div>
      {/* Course Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.thumbnailContainer}>
          <img
            src={course.thumbnail}
            alt={course.title}
            className={styles.thumbnail}
            loading="lazy"
          />
          {course.isFeatured && (
            <div className={styles.featuredBadge}>Featured</div>
          )}
        </div>

        <div className={styles.heroContent}>
          <h1>{course.title}</h1>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <FaRupeeSign className={styles.metaIcon} />
              <span>{course.price.toLocaleString()}</span>
            </div>
            <div className={styles.metaItem}>
              <FaLanguage className={styles.metaIcon} />
              <span>{course.language}</span>
            </div>
            <div className={styles.metaItem}>
              <FaClock className={styles.metaIcon} />
              <span>{course.duration}</span>
            </div>
            <div className={styles.metaItem}>
              <FaChalkboardTeacher className={styles.metaIcon} />
              <span>{course.instructor.name}</span>
            </div>
          </div>

          <p className={styles.shortDescription}>{course.shortDescription}</p>

          <div className={styles.actionButtons}>
            <button className={styles.enrollBtn}>Enroll Now</button>
          </div>
        </div>
      </div>
      {/* Main Content Area */}
      <div className={styles.contentGrid}>
        {/* Left Column - Main Content */}
        <div className={styles.mainContent}>
          <section className={styles.section}>
            <h2>Course Description</h2>
            <p>{course.description}</p>
          </section>

          <section className={styles.section}>
            <h2>What You'll Learn</h2>
            <ul className={styles.learningPoints}>
              {course.learningOutcomes.map((point, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.checkIcon} />
                  {point}
                </li>
              ))}
            </ul>
          </section>
          {/* Syllabus Section */}
          <section className={styles.section}>
            <h2>Course Syllabus</h2>
            <div className={styles.accordion}>
              {course.syllabus.map((week, index) => (
                <div key={index} className={styles.accordionItem}>
                  <button
                    className={`${styles.accordionHeader} ${
                      expandedWeek === index ? styles.active : ""
                    }`}
                    onClick={() => toggleWeek(index)}
                    aria-expanded={expandedWeek === index}
                    aria-controls={`syllabus-content-${index}`}
                  >
                    <span>
                      Week {index + 1}: {week.title}
                    </span>
                    {/* <FaChevronDown className={styles.accordionIcon} /> */}
                  </button>
                  <div
                    id={`syllabus-content-${index}`}
                    className={`${styles.accordionContent} ${
                      expandedWeek === index ? styles.active : ""
                    }`}
                  >
                    <ul>
                      {week.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>Course Features</h3>
            <ul className={styles.featuresList}>
              {course.features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.featureIcon} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarCard}>
            <h3>Instructor</h3>
            <div className={styles.instructorCard}>
              <img
                src={course.instructor.image}
                alt={course.instructor.name}
                className={styles.instructorImage}
              />
              <h4>{course.instructor.name}</h4>
              <p className={styles.instructorBio}>{course.instructor.bio}</p>
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h3>Course Includes</h3>
            <ul className={styles.includesList}>
              <li>🕒 {course.totalHours} hours of content</li>
              <li>📝 {course.assignments} assignments</li>
              <li>🎥 {course.lectures} video lectures</li>
              <li>📚 Downloadable resources</li>  
              <li>📜 Certificate of completion</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Related Courses Section */}
      <section className={styles.relatedCourses}>
        <h2>You Might Also Like</h2>
        <div className={styles.relatedGrid}>
          {/* You would map through related courses here */}
        </div>
      </section>

      {/* ... (rest of the component) ... */}
    </div>
  );
}
