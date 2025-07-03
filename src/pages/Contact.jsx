import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Contact Us</h1>
          <p>Have questions? Get in touch with our team today.</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className={styles.contactContainer}>
        {/* Contact Info Card */}
        <div className={styles.contactInfo}>
          <h2>Our Contact Information</h2>

          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <FaPhone />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+91 8436898284</p>
              <p>+91 8436042649</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <FaWhatsapp />
            </div>
            <div>
              <h3>Chat with Us</h3>
              <a href="https://wa.me/918436898284" target="_blank">+91 8436898284</a> <br />
              <a href="https://wa.me/918436042649" target="_blank">+91 8436042649</a>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <FaEnvelope />
            </div>
            <div>
              <h3>Email</h3>
              <p>info@coresec.in</p>
              <p>support@coresec.in</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3>Address</h3>
              <p>123 Tech Park, Sector V</p>
              <p>Kolkata, West Bengal 700091</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>

          {submitSuccess ? (
            <div className={styles.successMessage}>
              <h3>Thank You!</h3>
              <p>
                Your message has been sent successfully. We'll get back to you
                within 24 hours.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className={styles.backButton}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? styles.errorInput : ""}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.errorInput : ""}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Course Information">Course Information</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? styles.errorInput : ""}
                ></textarea>
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Embedded Map */}
      {/* <div className={styles.mapContainer}>
        <iframe
          title="CoreSec Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.016396094616!2d88.43323731538438!3d22.57278538518011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e4a541a4e!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
    </div>
  );
}
