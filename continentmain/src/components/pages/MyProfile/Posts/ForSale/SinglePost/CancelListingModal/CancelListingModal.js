import React from "react";
import styles from "./CancelListingModal.module.css";

const CancelListingModal = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <p>Would you like to delist NFT?</p>
        <div className={styles.btnDiv}>
          <button className={styles.invertBtn} onClick={() => setModal(false)}>
            Yes
          </button>
          <button className={styles.button} onClick={() => setModal(false)}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default CancelListingModal;
