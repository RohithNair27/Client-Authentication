import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

import styles from "./DefaultPages.module.css";

import { deleteToken } from "../utils/LocalStorage";

function Unauthorized() {
  const navigate = useNavigate();
  let { setUserData } = useAuth();

  const handleLogout = () => {
    deleteToken();
    setUserData({ email: "", userName: "", roles: [] });
    navigate("/");
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
