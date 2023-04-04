import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import BuyNow from "../BuyNow/BuyNow";
import { eth } from "../../../../../../images/image";
import Modal from "../../../../../Modal/Modal";
import DelistModal from "./CancelListingModal/CancelListingModal";

import EditInformation from "./EditInformation/EditInformation";
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
  const [moreButton, setMoreButton] = useState(false);
  const [cancelListingModal, setCancelListingModal] = useState(false);
  const [editInformationModal, setEditInformationModal] = useState(false);
  const handleDelist = () => {
    setCancelListingModal(true);
  };
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
                  handleDelist();
                }}
              >
                Cancel Listing
              </p>
              <p
                className={styles.moreButton}
                onClick={() => {
                  setMoreButton((prev) => !prev);
                  setEditInformationModal((prev) => !prev);
                }}
              >
                Edit Price
              </p>
            </div>
          )}
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
      {cancelListingModal && <DelistModal setModal={setCancelListingModal} />}
      {editInformationModal && (
        <Modal setModal={setEditInformationModal}>
          <EditInformation setModal={setEditInformationModal} />
        </Modal>
      )}
    </div>
  );
};

export default SinglePost;
