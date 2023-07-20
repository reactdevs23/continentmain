import React, { useState } from "react";

import styles from "./styles.module.css";
import {
  nft,
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  testImg,
} from "../../../../images/image";
import { useDataContext } from "../../../Context";

const ProfilePicures = ({ setModal }) => {
  const { setSelectedProfilePicture } = useDataContext();
  const [selectedPhoto, setSelectedPhoto] = useState(false);
  const nfts = [
    nft,
    nft1,
    nft2,
    nft3,
    nft4,
    nft5,
    nft6,
    nft,
    nft1,
    nft2,
    nft3,
    nft4,
    nft5,
    nft6,
    nft,
    nft1,
    nft2,
    nft3,
    nft4,
    nft5,
    nft6,
  ];

  return (
    <div className={styles.wrapper}>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.modalWrapp}>
        <div className={styles.modalHeader}>
          <h3>Select your profile picture</h3>
          <svg
            onClick={() => setModal(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {nfts.length !== 0 && (
          <div className={`grScrollbar ${styles.photosDiv}`}>
            {nfts.map((elem, idx) => {
              return (
                <button
                  onClick={() => setSelectedPhoto({ img: elem, id: idx })}
                  key={idx + "photo"}
                >
                  <img
                    style={{
                      borderColor:
                        selectedPhoto.id === idx ? "#42CCD7" : "transparent",
                    }}
                    src={elem}
                    alt=""
                  />
                </button>
              );
            })}
          </div>
        )}{" "}
        {nfts.length === 0 && (
          <div className={` ${styles.textWrapper}`}>
            {" "}
            <p className={styles.text}>You don’t have NFT’s in this wallet</p>
          </div>
        )}
        <button
          style={{ opacity: selectedPhoto ? "1" : "0.5" }}
          className={styles.button}
          onClick={() => {
            setModal(false);
            setSelectedProfilePicture(selectedPhoto);
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ProfilePicures;
