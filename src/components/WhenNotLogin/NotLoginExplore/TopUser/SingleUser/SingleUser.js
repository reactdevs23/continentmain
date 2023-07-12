import React from "react";

import HexagonImage from "../../../../Hexagon/Hexagon";
import { useState } from "react";
import { useDataContext } from "../../../../Context";
import ConnectWalletModal from "../../../ConnectWalletModal/ConnectWalletModal";
import styles from "./SingleUser.module.css";
const SingleUser = ({ img, name }) => {
  const { showConnectWalletModal, setShowConnectWalletModal, scrollToTop } =
    useDataContext();
  return (
    <>
      <div className={styles.topUser}>
        <div className={styles.userImage}>
          <HexagonImage src={img} />
        </div>
        <p className={styles.userName}>{name}</p>
        <button
          className={styles.addFriend}
          onClick={() => {
            setShowConnectWalletModal(true);
            scrollToTop();
          }}
        >
          Add Friend
        </button>
      </div>
      {showConnectWalletModal && <ConnectWalletModal />}
    </>
  );
};

export default SingleUser;
