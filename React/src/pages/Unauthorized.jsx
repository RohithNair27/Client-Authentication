import React from "react";
import { useNavigate } from "react-router";
import styles from "./DefaultPages.module.css";

function Unauthorized() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear auth token, reset state)
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Unauthorized Access</h1>
        <p className={styles.message}>
          You do not have permission to view this page.
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={() => navigate(-1)} className={styles.buttonBlue}>
            Go Back
          </button>
          <button onClick={handleLogout} className={styles.buttonRed}>
            Log Out & Retry
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
