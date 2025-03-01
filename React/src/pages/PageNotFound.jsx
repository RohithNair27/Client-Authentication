import React from "react";
import { useNavigate } from "react-router";
import styles from "./DefaultPages.module.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.message}>
          The page you are looking for does not exist.
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={() => navigate("/")} className={styles.buttonBlue}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
