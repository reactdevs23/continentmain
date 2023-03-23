import React, { useState } from "react";
import { coinbase, walletConnect, metamask } from "../../../../images/image";
import ConnectUnsuccessFull from "../Modal/ConnectUnsuccessFull";

import SuccessFullyConnectedModal from "../Modal/SuccessFullyConnectedModal";
import styles from "./styles.module.css";

const ConnectWallet = () => {
  const [connectSuccess, setConnectSuccess] = useState(false);
  const [connectUnSuccess, setConnectUnSuccess] = useState(false);
  return (
    <>
      <section className={`${styles.connectWallet} wrapper marginTop`}>
        <h1 className={styles.heading}>CONNECT WALLET</h1>
        <p className={styles.text}>Choose a wallet to connect:</p>
        <div className={styles.walletContainer}>
          <button
            className={styles.button}
            onClick={() => setConnectSuccess(true)}
          >
            <img src={coinbase} alt="#" className={styles.walletIcon} />
            <span className={styles.text}>Coinbase Wallet</span>
          </button>
          <button
            className={styles.button}
            onClick={() => setConnectUnSuccess(true)}
          >
            <img src={walletConnect} alt="#" className={styles.walletIcon} />
            <span className={styles.text}>Walletconnect</span>
          </button>
          <button
            className={styles.button}
            onClick={() => setConnectSuccess(true)}
          >
            <img src={metamask} alt="#" className={styles.walletIcon} />
            <span className={styles.text}>Metamask</span>
          </button>
        </div>
        {/* <p className={`${styles.alerting} ${styles.text}`}>
          By using Continent, you agree to our Terms of Service and our Privacy
          Policy.
        </p>{" "} */}
      </section>

      {connectSuccess && (
        <SuccessFullyConnectedModal setModal={setConnectSuccess} />
      )}
      {connectUnSuccess && (
        <ConnectUnsuccessFull setModal={setConnectUnSuccess} />
      )}
    </>
  );
};
export default ConnectWallet;
