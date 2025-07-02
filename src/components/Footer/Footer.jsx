import styles from './Footer.module.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h2>CoreSec</h2>
            <p>Let's connect with our socials</p>
            <div className={styles.socialLinks}>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#course-section">Courses</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h3>Get in Touch</h3>
            <ul>
              <li>+91 8790653278</li>
              <li>+91 8790653278</li>
              <li>info@coreec.in</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <hr />
          <p>Copyright © 2025 CoreSec Pvt. Ltd.<br />All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}