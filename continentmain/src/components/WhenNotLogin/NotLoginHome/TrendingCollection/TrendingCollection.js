import React, { useState } from "react";

import { user } from "../../../../images/image";
import styles from "./styles.module.css";
import User from "./User";

const TrendingCollection = ({ showComponent }) => {
  const [userNumber, setUserNumber] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const data = [
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
    {
      userImage: user,
      userName: "Grails III Mint Pass",
      amount: 2.65,
    },
  ];
  return (
    <div className={`${styles.whotoFollow}  `}>
      <h4 className={styles.title}>Trending collections</h4>

      <div className={`${styles.userWrapper} grScrollbar`}>
        {data.slice(0, userNumber).map((el, i) => (
          <User key={i} {...el} />
        ))}
      </div>
      <p
        className={styles.showMore}
        onClick={() => {
          setShowMore((prev) => !prev);
          if (showMore) {
            setUserNumber(data.length);
          } else setUserNumber(3);
        }}
      >
        {showMore ? "Show more" : "  Show less"}
      </p>
    </div>
  );
};

export default TrendingCollection;
