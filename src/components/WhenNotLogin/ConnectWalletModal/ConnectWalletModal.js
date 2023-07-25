import React, { useState } from "react";
import { MdClose } from "react-icons/md";

import { useDataContext } from "../../Context";
import {
  logo,
  metamask,
  walletConnect,
  connectWalletModalLogo,
  ethIcon,
  eth,
  ethereum,
  cardano,
  eternl,
  solana,
  coinbaseWallet,
  phantomWallet,
} from "../../../images/image";
import styles from "./ConnectWalletModal.module.css";

import SetUpYourProfile from "../SetUpYourProfile/SetUpYourProfile";
import ShareNft from "../SetUpYourProfile/StartSharingYourNft/ShareNft";

const ConnectWalletModal = () => {
  const { setShowConnectWalletModal } = useDataContext();

  const [activeTab, setActiveTab] = useState("ethereum");
  const goToSetUpyourProfile = () => {
    setShowSetupYourProfile(true);
  };
  const [showSetupYourProfile, setShowSetupYourProfile] = useState(false);
  const [showShareYourNft, setShowShareYourNft] = useState(false);
  return (
    <>
      {!showSetupYourProfile && !showShareYourNft && (
        <>
          {" "}
          <div
            className={[styles.modal, styles.wrapper, "grScrollbar"].join(" ")}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>Login to Continent</h2>
            </div>
            <div className={styles.logoContainer}>
              <p className={styles.logoText}>continent</p>
              <img
                src={connectWalletModalLogo}
                alt="#"
                className={styles.logo}
              />
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
                </button>
                <button
                  className={[
                    styles.tab,
                    activeTab.toLocaleLowerCase() === "solana" &&
                      styles.activeTab,
                  ].join(" ")}
                  onClick={() => setActiveTab("solana")}
                >
                  <img src={solana} alt="#" className={styles.currencyIcon} />
                </button>
                <button
                  className={[
                    styles.tab,
                    activeTab.toLocaleLowerCase() === "cardano" &&
                      styles.activeTab,
                  ].join(" ")}
                  onClick={() => setActiveTab("cardano")}
                >
                  <img src={cardano} alt="#" className={styles.currencyIcon} />
                </button>
              </div>
              {activeTab.toLowerCase() === "ethereum" && (
                <>
                  <div className={styles.wallet} onClick={goToSetUpyourProfile}>
                    <img src={metamask} alt="#" className={styles.icon} />
                    <p className={styles.name}>Metamask</p>
                    <p className={styles.text}>
                      Connect to your Metamask Wallet
                    </p>
                  </div>{" "}
                  <div className={styles.wallet} onClick={goToSetUpyourProfile}>
                    <img src={coinbaseWallet} alt="#" className={styles.icon} />
                    <p className={styles.name}>Coinbase Wallet</p>
                    <p className={styles.text}>
                      Connect to your Coinbase Wallet
                    </p>
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
              {activeTab.toLowerCase() === "solana" && (
                <div className={styles.wallet} onClick={goToSetUpyourProfile}>
                  <img src={phantomWallet} alt="#" className={styles.icon} />
                  <p className={styles.name}>Phantom</p>
                  <p className={styles.text}>Connect to your Phantom Wallet</p>
                </div>
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
          </div>{" "}
          <div
            className={styles.overlay}
            onClick={() => setShowConnectWalletModal((prev) => !prev)}
          ></div>
        </>
      )}

      {showSetupYourProfile && !showShareYourNft && (
        <SetUpYourProfile
          setShowShareYourNft={setShowShareYourNft}
          setShowSetupYourProfile={setShowSetupYourProfile}
        />
      )}
      {showShareYourNft && (
        <ShareNft setShowShareYourNft={setShowShareYourNft} />
      )}
    </>
  );
};

export default ConnectWalletModal;
