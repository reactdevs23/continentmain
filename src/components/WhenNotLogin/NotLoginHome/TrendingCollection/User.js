import React, { useState } from "react";
import HexagonImage from "../../../Hexagon/Hexagon";
import styles from "./styles.module.css";

const User = ({ userImage, userName, amount }) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.uerImageAndName}>
        <div className={styles.userImage}>
          <HexagonImage src={userImage} />
        </div>
        <p className={styles.userName}>{userName}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>Volume</p>
        <p className={styles.amount}>{amount} ETH</p>
      </div>
    </div>
  );
};

export default User;
