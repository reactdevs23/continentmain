import React from "react";

import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";

import styles from "./NotLoginWallet.module.css";

const NotLoginWallet = () => {
  return (
    <>
      <div className={`marginTop `}>
        <div className="wrapper">
          {" "}
          <h4 className={styles.heading}>Portfolio</h4>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Build out your feed</h2>
            <p className={styles.text}>
              Start building your personal feed by connecting your wallet.
            </p>
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoginWallet;
