import React from "react";
import styles from "../DefaultPages.module.css";

function CommonPageTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Common Page Two</h1>
        <p className={styles.message}>
          All users can access this page without restrictions.
        </p>
      </div>
    </div>
  );
}

export default CommonPageTwo;
