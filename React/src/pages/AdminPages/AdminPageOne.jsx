import React from "react";
import styles from "../DefaultPages.module.css";

function AdminPageOne() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Admin Page One</h1>
        <p className={styles.message}>
          This is a restricted page for administrators only.
        </p>
      </div>
      <button className={styles.buttonRed}>Log Out</button>
    </div>
  );
}

export default AdminPageOne;
