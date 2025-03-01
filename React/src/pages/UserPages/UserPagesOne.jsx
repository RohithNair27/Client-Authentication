import React from "react";
import styles from "../DefaultPages.module.css";

function UserPagesOne() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>User Page One</h1>
        <p className={styles.message}>
          This page is accessible to all registered users.
        </p>
      </div>
    </div>
  );
}

export default UserPagesOne;
