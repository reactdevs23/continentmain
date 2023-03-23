import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { ethIcon, nft } from "../../../../../images/image";
import Modal from "../../../../Modal/Modal";
import PostBuy from "../Nfts/BuyNow/BuyNow";
import Description from "./DetailsDescriptionAndProperties/Description";
import Details from "./DetailsDescriptionAndProperties/Details";
import Properties from "./DetailsDescriptionAndProperties/Properties";
import styles from "./styles.module.css";

const NftDetails = ({ data }) => {
  const navigate = useNavigate();
  const [showBuyModal, setShowBuyModal] = useState(false);
  const { id } = useParams();
  return (
    <>
      <div className={`${styles.wrapper} marginTop`}>
        <div className={styles.postDetails}>
          <div>
            <div className={styles.header}>
              <HiOutlineArrowNarrowLeft
                className={styles.backArrow}
                onClick={() => navigate(-1)}
              />
              <h3 className={styles.title}>Moonbird #7789</h3>
              <p
                className={styles.price}
                onClick={() => setShowBuyModal((prev) => !prev)}
              >
                {" "}
                <span>0.038</span>
                <img src={ethIcon} alt="#" className={styles.ethIcon} />
              </p>
            </div>{" "}
            <p className={styles.name}>Moonbirds</p>
            <div className={styles.imageContainer}>
              <img src={nft} alt="#" className={styles.image} />
            </div>
          </div>
          <div className={styles.detailsContainer}>
            {/* <div className={styles.priceContainer}>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>Est. Value</p>
                <div className={styles.valueContainer}>
                  <span className={styles.value}>0.0389</span>
                  <img src={ethIcon} alt="" className={styles.ethIcon} />
                </div>
              </div>
              <div className={styles.keyAndValue}>
                <p className={styles.key}>Last</p>

                <span className={styles.value}>0.0389 ETH</span>
              </div>{" "}
              <div className={styles.keyAndValue}>
                <p className={styles.key}>Supply</p>

                <span className={styles.value}>1</span>
              </div>{" "}
            </div>{" "} */}
            <Details />
            <Description />
            <Properties />
          </div>
        </div>
      </div>
      {showBuyModal && (
        <Modal setModal={setShowBuyModal}>
          <PostBuy setModal={setShowBuyModal} {...data[id - 1]} />
        </Modal>
      )}
    </>
  );
};

export default NftDetails;
