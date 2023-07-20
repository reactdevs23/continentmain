import React from "react";

import { nft,  } from "../../../../../images/image";

import styles from "./styles.module.css";
import SinglePost from "./SinglePost/SinglePost";

const ForSale = () => {
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
  ];

  return (
    <>
      <div className={styles.posts}>
        {posts.map((el, i) => (
          <SinglePost {...el} key={i} s />
        ))}
      </div>
    </>
  );
};

export default ForSale;
