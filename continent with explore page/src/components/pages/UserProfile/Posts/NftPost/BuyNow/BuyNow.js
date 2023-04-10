import React from "react";
import { MdOutlineClose } from "react-icons/md";

import styles from "./styles.module.css";
import { nft } from "../../../../../../images/image";

const BuyNow = ({
  img = nft,
  name = "Moonbirds",
  id = "7966",
  by = "0xb4...3bbb",
  owner = "juanbautista.eth",
  purchasePrice = {
    eth: 0.038,
    usd: 250.76,
  },
  setModal,
}) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalWrapper}>
          <MdOutlineClose
            className={styles.close}
            onClick={() => setModal(null)}
          />
          <img src={img} alt="#" className={styles.image} />
          <div className={styles.details}>
            <h4 className={styles.nameId}>
              {name} #{id}
            </h4>
            <p className={styles.name}>{name}</p>
            <div className={styles.keyAndValueContainer}>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>By</p>
                <p className={styles.value}>{by}</p>
              </div>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>Owner</p>
                <p className={styles.value}>{owner}</p>
              </div>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>Purchase price </p>
                <p className={styles.key}>
                  <span className={styles.ethValue}>
                    {purchasePrice.eth}ETH
                  </span>{" "}
                  <span>${purchasePrice.usd}</span>
                </p>
              </div>
            </div>
            <button className={styles.button}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={() => setModal(null)}></div>
    </>
  );
};

export default BuyNow;
