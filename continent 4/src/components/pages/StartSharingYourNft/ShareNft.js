import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { shop } from "../../../images/image";
import { useDataContext } from "../../Context";
import styles from "./styles.module.css";
import HexagonImage from "../../Hexagon/Hexagon";

const ShareNft = () => {
  const { selectedProfilePicture, userName } = useDataContext();
  const soicals = [
    {
      icon: shop,
      link: "Post your first NFT",
      to: "",
    },
  ];
  return (
    <div className={`${styles.shareNft} marginTop`}>
      <h4 className={styles.heading}>Start sharing your NFTs</h4>

      <div className={`${styles.profileContainer} ${styles.profilePhotoDiv}`}>
        <div className={styles.profilePhoto}>
          {" "}
          <HexagonImage src={selectedProfilePicture.img} />
        </div>

        <p className={styles.userName}>{userName}</p>
      </div>
      <div className={styles.linksContainer}>
        {soicals.map((el, i) => (
          <a
            href={el.to}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={styles.links}
          >
            <p className={styles.linkAndIcon}>
              <img src={el.icon} alt="#" />
              <span className={styles.link}>{el.link}</span>
            </p>
            <AiOutlineArrowRight className={styles.arrow} />
          </a>
        ))}
        <Link to="/" className={styles.button}>
          Skip
        </Link>
      </div>
    </div>
  );
};

export default ShareNft;
