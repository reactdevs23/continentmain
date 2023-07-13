import React from "react";

import { eth } from "../../../../../../images/image";

import styles from "./SinglePost.module.css";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../../../Context";
import ConnectWalletModal from "../../../../ConnectWalletModal/ConnectWalletModal";

const SinglePost = ({
  img,
  name,
  id,
  value,
  lastSale,
  owner,
  purchasePrice,
}) => {
  const { showConnectWalletModal, setShowConnectWalletModal, scrollToTop } =
    useDataContext();
  return (
    <>
      <div
        className={styles.post}
        onClick={() => {
          setShowConnectWalletModal(true);
          scrollToTop();
        }}
      >
        <img src={img} alt="#" className={styles.image} />{" "}
        <div className={styles.detailsContainer}>
          <div className={styles.header}>
            <Link to="postDetails" className={styles.id}>
              {" "}
              {name} #{id}
            </Link>
          </div>
          <div className={styles.valueContainer}>
            <span className={styles.value}>{value}</span>
            <img src={eth} alt="#" className={styles.ethIcon} />
          </div>
          <p className={styles.lastSale}>Las sale: {lastSale} ETH</p>
        </div>
      </div>
      {showConnectWalletModal && <ConnectWalletModal />}
    </>
  );
};

export default SinglePost;
