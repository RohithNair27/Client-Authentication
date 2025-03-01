import React from "react";
import styles from "../DefaultPages.module.css";

function UserPagesTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>User Page Two</h1>
        <p className={styles.message}>
          All authenticated users can view this page.
        </p>
      </div>
    </div>
  );
}

export default UserPagesTwo;
