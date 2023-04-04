import React, { useState } from "react";

import BuyNow from "../BuyNow/BuyNow";
import { eth } from "../../../../../../images/image";

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
  const [buyNowModal, setBuyNowModal] = useState(false);

  return (
    <div className={styles.post}>
      <img src={img} alt="#" className={styles.image} />{" "}
      <div className={styles.detailsContainer}>
        <div className={styles.header}>
          <Link to="postDetails" className={styles.id}>
            {" "}
            {name} #{id}
          </Link>
        </div>
        <div
          className={styles.valueContainer}
          onClick={() => setBuyNowModal(true)}
        >
          <span className={styles.value}>{value}</span>
          <img src={eth} alt="#" className={styles.ethIcon} />
        </div>
        <p className={styles.lastSale}>Las sale: {lastSale} ETH</p>
      </div>
      {buyNowModal && (
        <BuyNow
          img={img}
          name={name}
          owner={owner}
          value={value}
          purchasePrice={purchasePrice}
          setModal={setBuyNowModal}
        />
      )}
    </div>
  );
};

export default SinglePost;
