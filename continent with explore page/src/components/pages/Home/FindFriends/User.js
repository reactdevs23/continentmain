import React, { useState } from "react";
import HexagonImage from "../../../Hexagon/Hexagon";
import styles from "./styles.module.css";

const User = ({ userImage, userName }) => {
  const [friendRequestSent, setFriendRequestSent] = useState(false);
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
        onClick={() => setFriendRequestSent((prev) => !prev)}
      >
        {friendRequestSent ? "Request Sent" : "Add friend"}
      </button>
    </div>
  );
};

export default User;
