import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nft, eth } from "../../../../../images/image";
import Modal from "../../../../Modal/Modal";
import BuyNow from "./BuyNow/BuyNow";
import styles from "./styles.module.css";

const Nfts = () => {
  const [activeDetails, setActiveDetails] = useState(null);
  const [nftNumber, setNftNumber] = useState(12);
  const [showMore, setShowMore] = useState(true);

  const posts = [
    {
      img: nft,
      name: "Moonbirds",
      id: 7789,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7790,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7791,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7792,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7793,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7794,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7795,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7796,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7792,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7793,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7794,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7795,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7792,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7793,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7794,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7795,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7792,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7793,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7794,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7795,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7792,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7793,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
    {
      img: nft,
      name: "Moonbirds",
      id: 7794,
      value: 0.038,
      lastSale: 0.0288,
      owner: "juanbautista.eth",
      purchasePrice: {
        eth: 0.038,
        usd: 250.76,
      },
    },
  ];

  return (
    <>
      <div className={styles.posts}>
        {posts.slice(0, nftNumber).map((el, i) => (
          <div className={styles.post} key={i}>
            <img src={el.img} alt="#" className={styles.image} />{" "}
            <div className={styles.detailsContainer}>
              <p className={styles.name}>{el.name}</p>

              <Link to={`nfts/${i}`}>
                <p className={styles.id}>
                  {el.name} #{el.id}
                </p>
              </Link>
              <div
                className={styles.valueContainer}
                onClick={() => setActiveDetails(i + 1)}
              >
                <span className={styles.value}>{el.value}</span>
                <img src={eth} alt="#" className={styles.ethIcon} />
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <button
        className={styles.button}
        onClick={() => {
          setShowMore((prev) => !prev);
          if (showMore) {
            setNftNumber(posts.length);
          } else {
            setNftNumber(12);
          }
        }}
      >
        {!showMore ? "Less NFTs" : "More NFTs"}
      </button>
      {activeDetails && (
        <Modal setModal={setActiveDetails} background="rgba(9, 13, 36, 0.67)">
          <BuyNow {...posts[activeDetails - 1]} setModal={setActiveDetails} />
        </Modal>
      )}
    </>
  );
};

export default Nfts;
