import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { coinbase, walletConnect, metamask } from "../../../../images/image";
import styles from "./WalletConnect.module.css";

const WalletConnect = ({ setModal, setConnecting }) => {
  const handleConnecting = () => {
    setConnecting(true);
    setModal(false);
  };
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <div className={styles.header}>
          <div className={styles.headingAndText}>
            <h2 className={styles.heading}>Connect Wallet</h2>
            <p className={styles.text}>Choose a wallet to connect:</p>
          </div>
          <MdOutlineClose
            className={styles.close}
            onClick={() => setModal(false)}
          />
        </div>
        <div className={styles.walletContainer}>
          <button className={styles.button} onClick={handleConnecting}>
            <img src={coinbase} alt="#" className={styles.walletIcon} />
            <span className={styles.text}>Coinbase Wallet</span>
          </button>
          <button className={styles.button} onClick={handleConnecting}>
            <img src={walletConnect} alt="#" className={styles.walletIcon} />
            <span className={styles.text}>Walletconnect</span>
          </button>
          <button className={styles.button} onClick={handleConnecting}>
            <img src={metamask} alt="#" className={styles.walletIcon} />
            <span className={styles.text}>Metamask</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WalletConnect;
