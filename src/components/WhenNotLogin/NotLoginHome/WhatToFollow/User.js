import React, { useState } from "react";
import HexagonImage from "../../../Hexagon/Hexagon";
import styles from "./styles.module.css";
import { useDataContext } from "../../../Context";

const User = ({ userImage, userName }) => {
  const { setShowConnectWalletModal } = useDataContext();
  return (
    <div className={styles.userContainer}>
      <div className={styles.uerImageAndName}>
        <div className={styles.userImage}>
          <HexagonImage src={userImage} />
        </div>
        <p className={styles.userName}>{userName}</p>
      </div>
      <button
        className={styles.addFriend}
        onClick={() => setShowConnectWalletModal(true)}
      >
        Add friend
      </button>
    </div>
  );
};

export default User;
