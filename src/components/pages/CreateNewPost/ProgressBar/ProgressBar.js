import React from "react";
import styles from "./styles.module.css";

const ProgressBar = ({ progress }) => {
  const progressPercentage = progress + "%";

  const progressStyle = {
    width: progressPercentage,
  };

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={progressStyle} />
      </div>
    </div>
  );
};

export default ProgressBar;
