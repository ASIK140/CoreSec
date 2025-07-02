import styles from './WhyChooseUs.module.scss';

const features = [
  {
    title: "Beginner Friendly",
    description: "We've got step-by-step learning paths tailored to your growth."
  },
  {
    title: "Recorded Class",
    description: "Access lessons anytime with our comprehensive video library."
  },
  {
    title: "Hands-On Learning",
    description: "Code real-world projects and sharpen your problem-solving skills."
  },
  {
    title: "Mentorship & Support",
    description: "Our mentors are here to guide you every step of the way."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.headingText}>Why Choose Us</h2>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}