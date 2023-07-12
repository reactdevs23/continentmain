import React from "react";
import ConnectWalletButton from "../../ConnectWalletButton/ConnectWalletButton";
import styles from "./BuildYourField.module.css";

const BuildYourFeed = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Build out your feed</h2>
      <p className={styles.text}>
        Start building your personal feed by connecting your wallet.
      </p>
      <ConnectWalletButton />
    </div>
  );
};

export default BuildYourFeed;
