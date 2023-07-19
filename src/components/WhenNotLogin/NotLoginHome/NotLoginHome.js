import React, { useState } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";

import WhoToFollow from "./WhatToFollow/WhatToFollow";

import styles from "./NotLoginHome.module.css";
import BuildYourFeed from "./BuildYourFeed/BuildYourFeed";
import TrendingCollection from "./TrendingCollection/TrendingCollection";

const NotLoginHome = () => {
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
    </>
  );
};

export default NotLoginHome;
