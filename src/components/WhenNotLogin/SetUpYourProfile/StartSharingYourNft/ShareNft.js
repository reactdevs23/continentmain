import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { exports, shop } from "../../../../images/image";
import { useDataContext } from "../../../Context";
import styles from "./styles.module.css";
import HexagonImage from "../../../Hexagon/Hexagon";

const ShareNft = ({ setShowShareYourNft }) => {
  const { setShowConnectWalletModal } = useDataContext();
  const { selectedProfilePicture, userName, setLogin } = useDataContext();
  const previous = useNavigate();
  const soicals = [
    {
      icon: exports,
      link: "Post your first NFT",
      to: "",
    },
    {
      icon: shop,
      link: "Put your first NFT for sale",
      to: "",
    },
  ];
  return (
    <>
      <div className={`${styles.wrapper} `}>
        <div className={`${styles.shareNft} `}>
          <div
            className={styles.backButton}
            onClick={() => {
              previous("/");
              setShowShareYourNft(false);
            }}
          >
            <BiArrowBack className={styles.backArrow} />
            <p className={styles.backButtonText}>Back</p>
          </div>
          <h4 className={styles.heading}>Start sharing your NFTs</h4>

          <div
            className={`${styles.profileContainer} ${styles.profilePhotoDiv}`}
          >
            <div className={styles.profilePhoto}>
              {" "}
              <HexagonImage src={selectedProfilePicture.img} />
            </div>

            <p className={styles.userName}>{userName}</p>
          </div>
          <div className={styles.linksContainer}>
            {soicals.map((el, i) => (
              <a
                href={el.to}
                target="_blank"
                rel="noreferrer"
                key={i}
                className={styles.links}
              >
                <p className={styles.linkAndIcon}>
                  <img src={el.icon} alt="#" />
                  <span className={styles.link}>{el.link}</span>
                </p>
                <AiOutlineArrowRight className={styles.arrow} />
              </a>
            ))}
            <button
              className={styles.button}
              onClick={() => {
                previous("/");
                setLogin(true);
                setShowShareYourNft(false);
                setShowConnectWalletModal(false);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={() => setShowShareYourNft(false)}
      ></div>
    </>
  );
};

export default ShareNft;
