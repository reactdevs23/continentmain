import React from "react";
import styles from "./MarketPlace.module.css";

const MarketPlace = () => {
  return (
    <div className={`${styles.marketPlace} marginTop wrapper `}>
      {" "}
      <h2 className={styles.heading}>COMING SOON</h2>
    </div>
  );
};

export default MarketPlace;
