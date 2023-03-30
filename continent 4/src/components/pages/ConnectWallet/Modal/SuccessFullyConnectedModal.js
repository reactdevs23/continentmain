import React from "react";

import { testImg } from "../../../../images/image";
import HexagonImage from "../../../Hexagon/Hexagon";
import styles from "./styles.module.css";

const SuccessFullyConnectedModal = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.modalWrapper}>
        {" "}
        <div className={styles.smallModal}>
          <div className={styles.profileInfo}>
            <div className={styles.prifilePic}>
              {" "}
              <HexagonImage src={testImg} />
            </div>
            <div className={styles.nameAndAddress}>
              <span className={styles.name}>juanbautista.eth</span>
              <span className={styles.address}>0x9B8...F53B</span>
            </div>
          </div>
          <h4 className={`${styles.heading} ${styles.title}`}>
            Your wallet was successfully <br /> connected
          </h4>

          <button className={styles.button} onClick={() => setModal(false)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessFullyConnectedModal;
