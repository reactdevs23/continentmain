import React from "react";
import {
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  nft9,
  nft10,
  nft11,
  nft12,
} from "../../../../images/image";
import styles from "./Nfts.module.css";
import SingleNft from "./SingleNft/SingleNft";

const NFTs = () => {
  const nfts = [
    { img: nft1 },
    { img: nft2 },
    { img: nft3 },
    { img: nft4 },
    { img: nft5 },
    { img: nft6 },

    { img: nft7 },
    { img: nft8 },
    { img: nft9 },
    { img: nft10 },
    { img: nft11 },
    { img: nft12 },
    { img: nft1 },
    { img: nft2 },
    { img: nft3 },
    { img: nft4 },
    { img: nft5 },
    { img: nft6 },

    { img: nft7 },
    { img: nft8 },
    { img: nft9 },
    { img: nft10 },
    { img: nft11 },
    { img: nft12 },
  ];
  return (
    <div className={`${styles.nfts} marginTop wrapper`}>
      {" "}
      <h3 className={styles.title}>Explore NFTs</h3>
      <div className={`${styles.wrapper} `}>
        {nfts.map((el, i) => (
          <SingleNft {...el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default NFTs;
