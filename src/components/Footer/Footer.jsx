import styles from "./Footer.module.scss";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCourseClick = (e) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "course-section" } });
    }
  };
  const handleAboutClick = (e) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "about" } });
    }
  };
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h2>CoreSec</h2>
            <p>Let's connect with our socials</p>
            <div className={styles.socialLinks}>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/918436042649" target="_blank">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#course-section" onClick={handleCourseClick}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleAboutClick}>
                  About
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h3>Get in Touch</h3>
            <ul>
              <li>+91 8436898284</li>
              <li>+91 8436042649</li>
              <li>info@coresec.in</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <hr />
          <p>
            Copyright © 2025 CoreSec Pvt. Ltd.
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
