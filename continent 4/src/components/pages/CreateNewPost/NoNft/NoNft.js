import React from "react";
import styles from "./styles.module.css";

const NoNft = () => {
  return (
    <div className={styles.noNft}>
      <p className={styles.text}>You don’t have NFT’s in this wallet</p>
    </div>
  );
};

export default NoNft;
