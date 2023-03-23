import React from "react";

import { AiOutlineClose } from "react-icons/ai";

import styles from "./styles.module.css";

const ThanksForReport = ({ setModal }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Thank you</p>
        <AiOutlineClose
          className={styles.close}
          onClick={() => setModal(false)}
        />
      </div>

      <p className={styles.text}>
        Your feedback is important to help us keep the Continent community a
        safe place to be{" "}
      </p>
    </div>
  );
};

export default ThanksForReport;
