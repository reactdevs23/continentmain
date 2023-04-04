import React, { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

import styles from "./WalletConnect.module.css";

const Connecting = ({ setModal }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModal(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Connecting...</h2>

          <MdOutlineClose
            className={styles.close}
            onClick={() => setModal(false)}
          />
        </div>
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      </div>
    </>
  );
};

export default Connecting;
