import React from "react";
import styles from "./SingleUser.module.css";
import HexagonImage from "../../../../Hexagon/Hexagon";
import { useState } from "react";

const SingleUser = ({ img, name }) => {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className={styles.topUser}>
      <div className={styles.userImage}>
        <HexagonImage src={img} />
      </div>
      <p className={styles.userName}>{name}</p>
      <button
        className={styles.addFriend}
        onClick={() => setAddFriend((prev) => !prev)}
      >
        {addFriend ? "Request Send" : "Add Friend"}
      </button>
    </div>
  );
};

export default SingleUser;
