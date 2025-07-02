import React, { useEffect, useState } from "react";
import styles from "./CertificateVerification.module.scss";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function CertificateVerification() {
  const [isVerified, setIsVerified] = useState(null);
  const [name, setName] = useState("");

  // Replace with your actual names or API check
  const validNames = ["JohnDoe", "JaneSmith", "AliceJohnson","AsikSk"];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryName = params.get("name");
    setName(queryName);

    if (queryName && validNames.includes(queryName)) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Certificate Verification</h1>

      {isVerified === null && <p className={styles.status}>Checking...</p>}

      {isVerified === true && (
        <div className={`${styles.result} ${styles.verified}`}>
          <FaCheckCircle size={48} />
          <p>Verified for {name}</p>
        </div>
      )}

      {isVerified === false && (
        <div className={`${styles.result} ${styles.unverified}`}>
          <FaTimesCircle size={48} />
          <p>Invalid Certificate</p>
        </div>
      )}
    </div>
  );
}
