import React from "react";

import { connectWalletIcon } from "../../../images/image";
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
            <button className={styles.connectWalletButton}>
              <img src={connectWalletIcon} alt="#" className={styles.icon} />{" "}
              Connect with wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoginWallet;
