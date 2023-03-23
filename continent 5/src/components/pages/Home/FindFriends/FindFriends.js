import React, { useState } from "react";
import HexagonImage from "../../../Hexagon/Hexagon";
import { user } from "../../../../images/image";
import styles from "./styles.module.css";
import User from "./User";

const FindFrinds = ({ showWhotoFollow }) => {
  const [userNumber, setUserNumber] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const data = [
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
  ];
  return (
    <div
      className={`${styles.whotoFollow} ${
        showWhotoFollow && styles.showWhotoFollow
      } marginTop `}
    >
      <h4 className={styles.title}>Find Friends</h4>

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

export default FindFrinds;
