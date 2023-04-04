import React from "react";
import styles from "./Explore.module.css";
import {
  user,
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  nft,
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
} from "../../../images/image";
import { Link } from "react-router-dom";
import HexagonImage from "../../Hexagon/Hexagon";

const Explore = () => {
  const collections = [
    {
      img: collection1,
      category: "tubby cats",
      info: "TubbyCatsDeployer",
    },
    {
      img: collection2,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection3,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection4,
      category: "CrypToadz by GRE...",
      info: "794B67",
    },
    {
      img: collection5,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection6,
      category: "Blitmap",
      info: "dhof",
    },
  ];
  const nfts = [nft, nft1, nft2, nft3, nft4, nft5, nft6];
  return (
    <div className={styles.explore}>
      <div className="wrapper marginTop">
        <div>
          {" "}
          <div className={styles.header}>
            <h3 className={styles.title}>Top users</h3>
            <Link to="topUser" className={styles.button}>
              See more
            </Link>
          </div>
          <div className={styles.wrapper}>
            {Array(6)
              .fill({ img: user, name: "juanbautista.eth" })
              .map((el, i) => (
                <div className={styles.topUser} key={i}>
                  <div className={styles.userImage}>
                    <HexagonImage src={el.img} />
                  </div>
                  <p className={styles.userName}>{el.name}</p>
                  <button className={styles.addFriend}>AddFriend</button>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className={styles.header}>
            <h3 className={styles.title}>Explore collections</h3>
            <Link to="collections" className={styles.button}>
              See more
            </Link>
          </div>
          <div className={styles.wrapper}>
            {collections.map((el, i) => (
              <div key={i} className={styles.collection}>
                <img
                  src={el.img}
                  alt="#"
                  className={[styles.image, styles.colloectionImage].join(" ")}
                />
                <p className={styles.category}>{el.category}</p>
                <p className={styles.info}>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.header}>
            <h3 className={styles.title}>NFTs</h3>
            <Link to="Nfts" className={styles.button}>
              See more
            </Link>
          </div>
          <div className={styles.wrapper}>
            {nfts.map((el, i) => (
              <div key={i} className={styles.nfts}>
                <img
                  src={el}
                  alt="#"
                  className={[styles.image, styles.nftImage].join(" ")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
