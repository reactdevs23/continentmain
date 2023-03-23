import React from "react";
import { MdOutlineClose } from "react-icons/md";

import styles from "./styles.module.css";

const PostBuy = ({
  postImage,
  name,
  id,
  address,
  userName,
  ethAmount,
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
          <img src={postImage} alt="#" className={styles.image} />
          <div className={styles.details}>
            <h4 className={styles.nameId}>
              {name} #{id}
            </h4>
            <p className={styles.name}>{name}</p>
            <div className={styles.keyAndValueContainer}>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>By</p>
                <p className={styles.value}>{address}</p>
              </div>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>Owner</p>
                <p className={styles.value}>{userName}</p>
              </div>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>Purchase price </p>
                <p className={styles.key}>
                  <span className={styles.ethValue}>{ethAmount}ETH</span>{" "}
                  <span>$250.76</span>
                </p>
              </div>
            </div>
            <button className={styles.button}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBuy;
