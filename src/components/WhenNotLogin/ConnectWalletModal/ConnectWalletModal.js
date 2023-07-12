import React from "react";
import { MdClose } from "react-icons/md";

import { useDataContext } from "../../Context";
import {
  coinbase,
  logo,
  metamask,
  walletConnect,
  connectWalletModalLogo,
} from "../../../images/image";
import styles from "./ConnectWalletModal.module.css";

const ConnectWalletModal = () => {
  const { setShowConnectWalletModal } = useDataContext();
  return (
    <>
      <div className={[styles.modal, styles.wrapper, "grScrollbar"].join(" ")}>
        <div className={styles.header}>
          <h2 className={styles.title}>Login to Continent</h2>
        </div>
        <div className={styles.logoContainer}>
          <p className={styles.logoText}>continent</p>
          <img src={connectWalletModalLogo} alt="#" className={styles.logo} />
        </div>

        <div className={styles.walletContainer}>
          <p className={styles.tagline}>Choose a wallet</p>
          <div className={styles.wallet}>
            <img src={metamask} alt="#" className={styles.icon} />
            <p className={styles.name}>Metamask</p>
            <p className={styles.text}>Connect to your Metamask Wallet</p>
          </div>{" "}
          <div className={styles.wallet}>
            <img src={coinbase} alt="#" className={styles.icon} />
            <p className={styles.name}>Coinbase Wallet</p>
            <p className={styles.text}>Connect to your Coinbase Wallet</p>
          </div>{" "}
          <div className={styles.wallet}>
            <img src={walletConnect} alt="#" className={styles.icon} />
            <p className={styles.name}>WalletConnect</p>
            <p className={styles.text}>Connect to your WalletConnect Wallet</p>
          </div>
        </div>

        <p className={styles.info}>
          By using Continent, you agree to our{" "}
          <span className={styles.highlight}>Terms of Service</span> and our
          <span className={styles.highlight}> Privacy Policy.</span>
        </p>
        <MdClose
          className={styles.close}
          onClick={() => setShowConnectWalletModal((prev) => !prev)}
        />
      </div>
      <div
        className={styles.overlay}
        onClick={() => setShowConnectWalletModal((prev) => !prev)}
      ></div>
    </>
  );
};

export default ConnectWalletModal;
