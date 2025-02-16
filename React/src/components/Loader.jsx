import React from "react";
import styles from "./Loader.module.css"; // Import the CSS module for the loader

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
