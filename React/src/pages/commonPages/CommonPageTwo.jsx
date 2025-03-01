import React from "react";
import styles from "../DefaultPages.module.css";

function CommonPageOne() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Common Page One</h1>
        <p className={styles.message}>
          This is a general page accessible to all users.
        </p>
      </div>
    </div>
  );
}

export default CommonPageOne;
