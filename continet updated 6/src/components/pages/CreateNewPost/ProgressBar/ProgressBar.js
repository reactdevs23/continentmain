import React from "react";
import { useDataContext } from "../../../Context";
import styles from "./styles.module.css";

const ProgressBar = () => {
  const { uploadingProgress } = useDataContext();
  const progressPercentage = uploadingProgress + "%";

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
