import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.css";

const ConnectUnsuccessFull = ({ setModal }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      {" "}
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={`${styles.modalWrapper} `}>
        {" "}
        <div className={`${styles.smallModal} ${styles.connectUnsuccessFull}`}>
          <MdClose
            className={styles.close}
            color="#fff"
            onClick={() => setModal(false)}
          />
          <h4 className={styles.heading}>Unable to connect your wallet</h4>
          <p className={styles.text}>
            For the moment, Continent will be token-gated to partner NFT
            collections.
          </p>
          <p className={styles.text}>
            Leave us your email and we'll let you know once open.
          </p>

          <form className={styles.subsCribeContainer}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <Link
              to="/setupProfile"
              className={`${styles.button} ${styles.subsCribe}`}
              onClick={() => setModal(false)}
            >
              Subscribe
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConnectUnsuccessFull;
