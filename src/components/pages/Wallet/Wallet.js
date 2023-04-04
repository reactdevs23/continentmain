import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
// import { MdSwapVert } from "react-icons/md";
// import { RiShareCircleFill } from "react-icons/ri";
import { user } from "../../../images/image";
import Nfts from "./Posts/Nfts/NFts";

import styles from "./styles.module.css";
import HexagonImage from "../../Hexagon/Hexagon";
import WalletConnect from "./WalletConnect/WalletConnect";
import Connecting from "./WalletConnect/Connecting";

const Wallet = () => {
  const [nfts, setNfts] = useState(true);
  const [selectedWallet, setSelectedWallet] = useState(0);
  const [showAllWallet, setShowallWallet] = useState(false);
  const [addAnotherWallet, setAddAnotherWallet] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const activeNft = () => {
    setNfts(true);
  };
  const wallets = [
    { img: user, address: "0X553F...5F96" },
    { img: user, address: "0x11a9...9797c" },
  ];
  return (
    <>
      <div className={`${styles.wrapper} marginTop`}>
        <div className={`${styles.pageContainer} wrapper `}>
          {" "}
          <h4 className={styles.title}>Portfolio</h4>
          <div className={styles.profileHeader}>
            <div className={styles.userInfo}>
              <div className={styles.user}>
                <HexagonImage src={wallets[selectedWallet].img} />
              </div>

              <div className={styles.priceAndAddress}>
                {" "}
                <div className={styles.addressContainer}>
                  <span className={`${styles.text} ${styles.address}`}>
                    {wallets[selectedWallet].address}
                  </span>
                  <BiChevronDown
                    className={styles.downArrow}
                    onClick={() => setShowallWallet((prev) => !prev)}
                  />
                </div>
                <p className={styles.price}>100,00 US$</p>
                {showAllWallet && (
                  <div className={styles.allWallets}>
                    {wallets.map((el, i) => (
                      <div
                        className={[
                          styles.wallets,
                          selectedWallet === i && styles.selectedWallet,
                        ].join(" ")}
                        key={i}
                        onClick={() => setSelectedWallet(i)}
                      >
                        <div className={styles.walletImage}>
                          <HexagonImage src={el.img} />
                        </div>
                        <p className={`${styles.text} ${styles.wallet}`}>
                          {el.address}
                        </p>
                      </div>
                    ))}
                    <button
                      className={styles.addAnotherWallet}
                      onClick={() => {
                        setAddAnotherWallet((prev) => !prev);
                        setShowallWallet(false);
                      }}
                    >
                      Add another wallet
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.postCategoryContainer}>
            <div className={styles.postCategory}>
              <div
                className={`${styles.post} ${nfts && styles.activePost}`}
                onClick={activeNft}
              >
                <span className={styles.text}>NFTs</span>
              </div>{" "}
            </div>
          </div>{" "}
          <Nfts />
        </div>
      </div>
      {connecting && <Connecting setModal={setConnecting} />}
      {addAnotherWallet && (
        <WalletConnect
          setModal={setAddAnotherWallet}
          setConnecting={setConnecting}
        />
      )}
    </>
  );
};

export default Wallet;
