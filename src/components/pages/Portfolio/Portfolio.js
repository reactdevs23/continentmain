import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdSwapVert } from "react-icons/md";
import { RiShareCircleFill } from "react-icons/ri";
import { user } from "../../../images/image";
import Nfts from "./Posts/Nfts/NFts";

import styles from "./styles.module.css";
import HexagonImage from "../../Hexagon/Hexagon";

const Portfolio = () => {
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
          {/* <div className={styles.actionContainer}>
            <button className={`${styles.button} ${styles.activeButton}`}>
              <MdSwapVert className={styles.icon} /> Swap
            </button>{" "}
            <button className={`${styles.button} ${styles.activeButton}`}>
              <RiShareCircleFill className={`${styles.icon} ${styles.share}`} />{" "}
              Send
            </button>{" "}
          </div> */}
        </div>
        <div className={styles.postCategoryContainer}>
          <div className={styles.postCategory}>
            <div
              className={`${styles.post} ${nfts && styles.activePost}`}
              onClick={activeNft}
            >
              <span className={styles.text}>NFTs</span>
            </div>{" "}
            {/* <div
              className={`${styles.post} ${tokens && styles.activePost}`}
              onClick={activeTokens}
            >
              <span className={styles.text}>Tokens</span>
            </div>
            <div
              className={`${styles.post} ${transaction && styles.activePost}`}
              onClick={activeTransaction}
            >
              <span className={styles.text}>Transactions</span>
            </div> */}
          </div>
        </div>{" "}
        <Nfts />
      </div>
    </div>
  );
};

export default Portfolio;
