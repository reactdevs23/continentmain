import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import BuyNow from "../BuyNow/BuyNow";
import { eth } from "../../../../../../images/image";
import Modal from "../../../../../Modal/Modal";
import styles from "./SinglePost.module.css";
import { Link } from "react-router-dom";

const SinglePost = ({
  img,
  name,
  id,
  value,
  lastSale,
  owner,
  purchasePrice,
}) => {
  const [activeDetails, setActiveDetails] = useState(null);
  const [moreButton, setMoreButton] = useState(false);
  return (
    <div className={styles.post}>
      <img src={img} alt="#" className={styles.image} />{" "}
      <div className={styles.detailsContainer}>
        <div className={styles.header}>
          <Link to="postDetails" className={styles.id}>
            {" "}
            {name} #{id}
          </Link>
          <BiDotsVerticalRounded
            className={styles.more}
            onClick={() => setMoreButton((prev) => !prev)}
          />

          {/* moreButton */}
          {moreButton && (
            <div className={styles.moreButtonContainer}>
              <p
                className={styles.moreButton}
                onClick={() => {
                  setMoreButton((prev) => !prev);
                }}
              >
                Deslist NFT
              </p>
              <p
                className={styles.moreButton}
                onClick={() => {
                  setMoreButton((prev) => !prev);
                }}
              >
                Edit Price
              </p>
            </div>
          )}
        </div>
        <div
          className={styles.valueContainer}
          onClick={() => setActiveDetails(true)}
        >
          <span className={styles.value}>{value}</span>
          <img src={eth} alt="#" className={styles.ethIcon} />
        </div>
        <p className={styles.lastSale}>Las sale: {lastSale} ETH</p>
      </div>
      {activeDetails && (
        <BuyNow
          img={img}
          id="7996"
          name={name}
          owner={owner}
          value={value}
          purchasePrice={purchasePrice}
          setModal={setActiveDetails}
        />
      )}
    </div>
  );
};

export default SinglePost;
