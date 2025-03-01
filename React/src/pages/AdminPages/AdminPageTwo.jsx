import React from "react";
import styles from "../DefaultPages.module.css";

function AdminPageTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Admin Page Two</h1>
        <p className={styles.message}>Only admin users can access this page.</p>
      </div>
    </div>
  );
}
export default AdminPageTwo;
