import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdSwapVert } from "react-icons/md";
import { RiShareCircleFill } from "react-icons/ri";
import { user } from "../../../images/image";
import Nfts from "./Posts/Nfts/NFts";

import styles from "./styles.module.css";
import HexagonImage from "../../Hexagon/Hexagon";

const Wallet = () => {
  const [nfts, setNfts] = useState(true);
  // const [tokens, setTokens] = useState(false);
  // const [transaction, setTransaction] = useState(false);
  const activeNft = () => {
    setNfts(true);
    // setTokens(false);
    // setTransaction(false);
  };
  // const activeTokens = () => {
  //   setTokens(true);
  //   setNfts(false);

  //   setTransaction(false);
  // };
  // const activeTransaction = () => {
  //   setTransaction(true);
  //   setNfts(false);
  //   setTokens(false);
  // };
  return (
    <div className={`${styles.wrapper} marginTop`}>
      <div className={`${styles.pageContainer} wrapper `}>
        <div className={styles.profileHeader}>
          <div className={styles.userInfo}>
            <div className={styles.user}>
              <HexagonImage src={user} />
            </div>

            <div className={styles.priceAndAddress}>
              {" "}
              <div className={styles.addressContainer}>
                <span className={`${styles.text} ${styles.address}`}>
                  0xe0c6...1db9
                </span>
                <BiChevronDown className={styles.downArrow} />
              </div>
              <p className={styles.price}>100,00 US$</p>
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
  );
};

export default Wallet;
