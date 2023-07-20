import React, { useState } from "react";
import { MdClose } from "react-icons/md";

import { useDataContext } from "../../Context";
import {
  coinbase,
  logo,
  metamask,
  walletConnect,
  connectWalletModalLogo,
  ethIcon,
  eth,
  ethereum,
  cardano,
  eternl,
} from "../../../images/image";
import styles from "./ConnectWalletModal.module.css";
import { useNavigate } from "react-router-dom";

const ConnectWalletModal = () => {
  const { setShowConnectWalletModal } = useDataContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ethereum");
  const goToSetUpyourProfile = () => {
    navigate("/connectWallet/setupProfile");
    setShowConnectWalletModal(false);
  };
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
          <div className={styles.tabContainer}>
            <button
              className={[
                styles.tab,
                activeTab.toLocaleLowerCase() === "ethereum" &&
                  styles.activeTab,
              ].join(" ")}
              onClick={() => setActiveTab("ethereum")}
            >
              <img src={ethereum} alt="#" className={styles.currencyIcon} />
              Ethereum
            </button>
            <button
              className={[
                styles.tab,
                activeTab.toLocaleLowerCase() === "cardano" && styles.activeTab,
              ].join(" ")}
              onClick={() => setActiveTab("cardano")}
            >
              <img src={cardano} alt="#" className={styles.currencyIcon} />
              Cardano
            </button>
          </div>
          {activeTab.toLowerCase() === "ethereum" && (
            <>
              <div className={styles.wallet} onClick={goToSetUpyourProfile}>
                <img src={metamask} alt="#" className={styles.icon} />
                <p className={styles.name}>Metamask</p>
                <p className={styles.text}>Connect to your Metamask Wallet</p>
              </div>{" "}
              <div className={styles.wallet} onClick={goToSetUpyourProfile}>
                <img src={coinbase} alt="#" className={styles.icon} />
                <p className={styles.name}>Coinbase Wallet</p>
                <p className={styles.text}>Connect to your Coinbase Wallet</p>
              </div>{" "}
              <div className={styles.wallet} onClick={goToSetUpyourProfile}>
                <img src={walletConnect} alt="#" className={styles.icon} />
                <p className={styles.name}>WalletConnect</p>
                <p className={styles.text}>
                  Connect to your WalletConnect Wallet
                </p>
              </div>
            </>
          )}
          {activeTab.toLowerCase() === "cardano" && (
            <div className={styles.wallet} onClick={goToSetUpyourProfile}>
              <img src={eternl} alt="#" className={styles.icon} />
              <p className={styles.name}>Eternl</p>
              <p className={styles.text}>Connect to your Eternl Wallet</p>
            </div>
          )}
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
