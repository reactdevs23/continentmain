import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { walletIcon } from "../../../../images/image";
import HexagonImage from "../../../Hexagon/Hexagon";
import styles from "./styles.module.css";

const ChooseWallet = () => {
  const [showWallets, setShowWallets] = useState();
  const [selectedWallet, setSelectedWallet] = useState(0);
  const wallets = [
    {
      icon: walletIcon,
      name: "Wallet name",
      address: "0xrg47s58xria456vq890a1",
    },
    {
      icon: walletIcon,
      name: "Wallet name1",
      address: "0xrg47s58xria456vq890a1",
    },
    {
      icon: walletIcon,
      name: "Wallet name2",
      address: "0xrg47s58xria456vq890a1",
    },
    {
      icon: walletIcon,
      name: "Wallet name2",
      address: "0xrg47s58xria456vq890a1",
    },
  ];
  return (
    <div className={styles.chooseWallet}>
      <div className={styles.wallet}>
        <div className={styles.imageContainer}>
          <HexagonImage src={wallets[selectedWallet].icon} />
        </div>
        <div className={styles.nameAndAddress}>
          <p className={styles.name}>{wallets[selectedWallet].name}</p>
          <p className={styles.address}>{wallets[selectedWallet].address}</p>
        </div>
      </div>
      {showWallets ? (
        <BsChevronUp
          className={styles.arrow}
          onClick={() => setShowWallets((prev) => !prev)}
        />
      ) : (
        <BsChevronDown
          className={styles.arrow}
          onClick={() => setShowWallets((prev) => !prev)}
        />
      )}
      {showWallets && (
        <div className={styles.allWallet}>
          {" "}
          {wallets.map((wallet, i) => (
            <div
              className={styles.wallet}
              key={i}
              onClick={() => {
                setSelectedWallet(i);
                setShowWallets(false);
              }}
            >
              <div className={styles.imageContainer}>
                <HexagonImage src={wallet.icon} />
              </div>

              <p className={styles.name}>{wallet.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChooseWallet;
