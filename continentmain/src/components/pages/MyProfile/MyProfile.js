import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import { copy, user } from "../../../images/image";
import { BsShare } from "react-icons/bs";

import ForSale from "./Posts/ForSale/ForSale";
import NftPosts from "./Posts/NftPost/NftPosts";
import styles from "./styles.module.css";
import ShareModal from "./ShareModal/ShareModal";

import Modal from "../../Modal/Modal";
import Banner from "../../Banner/Banner";
import HexagonImage from "../../Hexagon/Hexagon";

const MyProfile = () => {
  const [profileImage, setProfileImage] = useState("");
  const [nftPosts, setNftPosts] = useState(true);
  const [shareModal, setShareModal] = useState(false);

  const showProfileImage = (event) => {
    const imgSrc = event.target.getAttribute("src");
    setProfileImage(imgSrc);
  };

  return (
    <>
      <Banner />
      <div className={`${styles.pageContainer} wrapper`}>
        <div className={styles.profileHeader}>
          <div className={styles.userInfo}>
            <div className={styles.user}>
              <HexagonImage src={user} onClick={showProfileImage} />
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
            <Link
              to="/editprofile"
              className={`${styles.button} ${styles.activeButton}`}
            >
              Edit profile
            </Link>{" "}
            <div
              className={styles.shareContainer}
              onClick={() => setShareModal((prev) => !prev)}
            >
              <BsShare />
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
        {profileImage && (
          <>
            <div className={styles.profileImage}>
              <HexagonImage src={profileImage} />
            </div>
            <div
              className={styles.overlay}
              onClick={() => setProfileImage("")}
            ></div>
          </>
        )}
        {nftPosts ? <NftPosts /> : <ForSale />}
        {shareModal && (
          <Modal setModal={setShareModal}>
            <ShareModal setModal={setShareModal} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default MyProfile;
