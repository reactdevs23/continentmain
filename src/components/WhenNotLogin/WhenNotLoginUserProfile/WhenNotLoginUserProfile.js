import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  copy,
  // friends,
  // collection,
  user,
  mutualCollection,
} from "../../../images/image";
import Banner from "../../Banner/Banner";
import HexagonImage from "../../Hexagon/Hexagon";
import ForSale from "./Posts/ForSale/ForSale";
import NftPosts from "./Posts/NftPost/NftPosts";
import styles from "./styles.module.css";
import { useDataContext } from "../../Context";
import ConnectWalletModal from "../ConnectWalletModal/ConnectWalletModal";

const WhenNotLoginUserProfile = () => {
  const [nftPosts, setNftPosts] = useState(true);
  const { showConnectWalletModal, setShowConnectWalletModal, scrollToTop } =
    useDataContext();

  return (
    <>
      <Banner />
      <div className={`${styles.pageContainer} wrapper`}>
        <div className={styles.profileHeader}>
          <div className={styles.userInfo}>
            <div className={styles.user}>
              <HexagonImage src={user} />
            </div>
            <p className={styles.name}>juanbautista.eth</p>
            <div className={styles.addressContainer}>
              <p className={`${styles.text} ${styles.address}`}>
                0xe0c6...1db9
              </p>

              <CopyToClipboard text="0xe0c6...1db9">
                <img src={copy} alt="#" className={styles.copyIcon} />
              </CopyToClipboard>

              {/* <BiChevronDown className={styles.downArrow} /> */}
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
            <a
              href="www.continent.io"
              target="_blank"
              className={`${styles.url} ${styles.text}`}
            >
              www.continent.io
            </a>
          </div>
          <div className={styles.actionContainer}>
            {" "}
            <button
              className={`${styles.button} ${styles.activeButton}`}
              onClick={() => {
                setShowConnectWalletModal(true);
                scrollToTop();
              }}
            >
              Add friend
            </button>
            <button
              className={`${styles.button} `}
              onClick={() => {
                setShowConnectWalletModal(true);
                scrollToTop();
              }}
            >
              Message
            </button>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <div className={styles.mutualImages}>
                  <div className={styles.mutualImage}>
                    <HexagonImage src={user} />
                  </div>
                  <div className={styles.mutualImage}>
                    <HexagonImage src={user} />
                  </div>
                  <div className={styles.mutualImage}>
                    <HexagonImage src={user} />
                  </div>
                </div>

                <p className={styles.infoText}>61 mutual friends</p>
              </div>
              <div className={styles.info}>
                <div
                  className={[
                    styles.mutualImages,
                    styles.collectionImgages,
                  ].join(" ")}
                >
                  <img
                    src={mutualCollection}
                    alt="#"
                    className={[
                      styles.mutualImage,
                      styles.mutualCollection,
                    ].join(" ")}
                  />
                  <img
                    src={mutualCollection}
                    alt="#"
                    className={[
                      styles.mutualImage,
                      styles.mutualCollection,
                    ].join(" ")}
                  />
                  <img
                    src={mutualCollection}
                    alt="#"
                    className={[
                      styles.mutualImage,
                      styles.mutualCollection,
                    ].join(" ")}
                  />
                </div>
                <p className={styles.infoText}>4 mutual collections</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postCategoryContainer}>
          <div className={styles.postCategory}>
            <div
              className={`${styles.post} ${nftPosts && styles.activePost}`}
              onClick={() => setNftPosts(true)}
            >
              <span className={styles.text}>NFT Posts</span>
            </div>{" "}
            <div
              className={`${styles.post} ${!nftPosts && styles.activePost}`}
              onClick={() => setNftPosts(false)}
            >
              <span className={styles.text}>For sale</span>
            </div>
          </div>
        </div>{" "}
        {nftPosts ? <NftPosts /> : <ForSale />}
      </div>
      {showConnectWalletModal && <ConnectWalletModal />}
    </>
  );
};

export default WhenNotLoginUserProfile;
