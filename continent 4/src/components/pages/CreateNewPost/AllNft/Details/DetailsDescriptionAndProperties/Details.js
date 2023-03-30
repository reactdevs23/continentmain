import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styles from "./styles.module.css";

const Details = () => {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header} style={{ border: !showDetails && "none" }}>
        <p className={styles.heading}>Details </p>
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
          <div className={`${styles.info} `}>
            <p className={`${styles.text} ${styles.title}`}>Contract Address</p>{" "}
            <p className={`${styles.text} ${styles.address}`}>0xb4...3bbb</p>{" "}
          </div>{" "}
          <div className={`${styles.info} `}>
            <p className={`${styles.text} ${styles.title}`}>Token ID</p>{" "}
            <p className={`${styles.text} `}>2595</p>{" "}
          </div>
          <div className={`${styles.info} `}>
            <p className={`${styles.text} ${styles.title}`}>Token standards</p>
            <p className={`${styles.text} `}>NONCOMPLIANT</p>
          </div>
          <div className={`${styles.info} `}>
            <p className={`${styles.text} ${styles.title}`}>Blockchain</p>
            <p className={`${styles.text} `}>Ethereum</p>{" "}
          </div>{" "}
          <div className={`${styles.info} `}>
            <p className={`${styles.text} ${styles.title}`}>Creator</p>{" "}
            <p className={`${styles.text} ${styles.address}`}>0xc3...e56a</p>{" "}
          </div>{" "}
          <div className={`${styles.info} `}>
            <p className={`${styles.text} ${styles.title}`}>Total supply</p>
            <p className={`${styles.text} `}>9,995 </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
