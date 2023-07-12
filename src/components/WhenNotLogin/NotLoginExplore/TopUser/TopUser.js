import React from "react";

import styles from "./TopUser.module.css";

import { user } from "../../../../images/image";
import SingleUser from "./SingleUser/SingleUser";

const TopUsers = () => {
  return (
    <div className={styles.findFriendsContainer}>
      <div className={`marginTop wrapper`}>
        <h3 className={styles.title}>Top Users</h3>
        <div className={`${styles.wrapper} `}>
          {Array(25)
            .fill({ img: user, name: "juanbautista.eth" })
            .map((el, i) => (
              <SingleUser {...el} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopUsers;
