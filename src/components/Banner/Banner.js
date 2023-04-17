import React from "react";
import { banner } from "../../images/image";
import styles from "./styles.module.css";
import "./style.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Banner = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <div className={styles.banner}>
          <img src={banner} alt="#" className={styles.image} />
          <div className={styles.nftAndFriends}>
            <p className={styles.infoBox}>
              {" "}
              <strong>53</strong>
              <span className={styles.text}>NFTs</span>
            </p>{" "}
            <div className={styles.infoBox}>
              <strong>450</strong>

              <span className={styles.text}>Friends</span>
            </div>{" "}
          </div>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Banner;
