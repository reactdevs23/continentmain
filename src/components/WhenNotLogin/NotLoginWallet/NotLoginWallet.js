import React from "react";

import { connectWalletIcon } from "../../../images/image";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";

import ConnectWalletModal from "../ConnectWalletModal/ConnectWalletModal";
import { useDataContext } from "../../Context";
import styles from "./NotLoginWallet.module.css";

const NotLoginWallet = () => {
  const { showConnectWalletModal } = useDataContext();
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
      {showConnectWalletModal && <ConnectWalletModal />}
    </>
  );
};

export default NotLoginWallet;
