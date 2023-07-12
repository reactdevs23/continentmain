import React from "react";
import styles from "./NotLoginExplore.module.css";
import {
  user,
  nft,
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
} from "../../../images/image";
import { Link } from "react-router-dom";

import SingleUser from "./TopUser/SingleUser/SingleUser";

const NotLoginExplore = () => {
  const nfts = [nft, nft1, nft2, nft3, nft4, nft5, nft6];
  return (
    <div className={styles.explore}>
      <div className="wrapper marginTop">
        <div>
          {" "}
          <div className={styles.header}>
            <h3 className={styles.title}>Top Users</h3>
            <Link to="topUsers" className={styles.button}>
              See more
            </Link>
          </div>
          <div className={styles.wrapper}>
            {Array(6)
              .fill({ img: user, name: "juanbautista.eth" })
              .map((el, i) => (
                <SingleUser {...el} key={i} />
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

export default NotLoginExplore;
