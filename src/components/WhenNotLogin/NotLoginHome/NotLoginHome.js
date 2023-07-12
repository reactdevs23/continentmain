import React, { useState } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";
import { useDataContext } from "../../Context";
import WhoToFollow from "./WhatToFollow/WhatToFollow";

import styles from "./NotLoginHome.module.css";
import BuildYourFeed from "./BuildYourFeed/BuildYourFeed";
import TrendingCollection from "./TrendingCollection/TrendingCollection";
import ConnectWalletModal from "../ConnectWalletModal/ConnectWalletModal";

const NotLoginHome = () => {
  const { showConnectWalletModal } = useDataContext();

  const [
    showWhotoFollowAndTrendingCollection,
    setShowWhotoFollowAndTrendingCollection,
  ] = useState(false);

  return (
    <>
      <div className={`marginTop ${styles.postContainer}`}>
        <div className={`${styles.postsWrapper} `}>
          {!showWhotoFollowAndTrendingCollection && <BuildYourFeed />}
          {showWhotoFollowAndTrendingCollection ? (
            <BsFillCaretLeftSquareFill
              className={styles.arrow}
              onClick={() => {
                setShowWhotoFollowAndTrendingCollection((prev) => !prev);
              }}
            />
          ) : (
            <BsFillCaretRightSquareFill
              className={styles.arrow}
              onClick={() =>
                setShowWhotoFollowAndTrendingCollection((prev) => !prev)
              }
            />
          )}
          <div
            className={`${styles.whatToFollowAndTrendingCollection}  ${
              showWhotoFollowAndTrendingCollection && styles.showWhotoFollow
            } grScrollbar marginTop`}
          >
            <TrendingCollection
              showComponent={showWhotoFollowAndTrendingCollection}
            />
            <WhoToFollow showComponent={showWhotoFollowAndTrendingCollection} />
          </div>
        </div>{" "}
      </div>
      {showConnectWalletModal && <ConnectWalletModal />}
    </>
  );
};

export default NotLoginHome;
