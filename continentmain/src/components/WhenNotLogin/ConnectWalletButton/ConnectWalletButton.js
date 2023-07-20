import React from "react";
import { connectWalletIcon } from "../../../images/image";
import { useDataContext } from "../../Context";
import styles from "./ConnectWalletButton.module.css";

const ConnectWalletButton = () => {
  const { setShowConnectWalletModal } = useDataContext();
  return (
    <button
      className={styles.connectWalletButton}
      onClick={() => setShowConnectWalletModal(true)}
    >
      <img src={connectWalletIcon} alt="#" className={styles.icon} /> Connect
      with wallet
    </button>
  );
};

export default ConnectWalletButton;
