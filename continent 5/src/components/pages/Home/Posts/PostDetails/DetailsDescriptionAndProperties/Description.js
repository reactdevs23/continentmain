import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styles from "./styles.module.css";

const Description = () => {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header} style={{ border: !showDetails && "none" }}>
        <p className={styles.heading}>Description </p>
        {showDetails ? (
          <BsChevronUp
            className={styles.arrow}
            onClick={() => setShowDetails((prev) => !prev)}
          />
        ) : (
          <BsChevronDown
            className={styles.arrow}
            onClick={() => setShowDetails((prev) => !prev)}
          />
        )}
      </div>

      {showDetails && (
        <div className={styles.infoContainer}>
          <p className={styles.text}>
            {" "}
            <span className={styles.title}>By</span>{" "}
            <span className={styles.address}>0xb4...3bbb</span>
          </p>
          <p className={styles.text}>
            CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and
            became one of the inspirations for the ERC-721 standard. They have
            been featured in places like The New York Times, Christie’s of
            London, Art|Basel Miami, and The PBS NewsHour.
          </p>
        </div>
      )}
    </div>
  );
};

export default Description;
