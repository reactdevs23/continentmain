import React from "react";
import styles from "./styles.module.css";

const DisCardPost = ({ setModal, setAddingPost }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <p>
          Are your sure you want to discard this <br /> post?
        </p>
        <div className={styles.btnDiv}>
          <button
            className={styles.invertBtn}
            onClick={() => {
              setModal(false);
              setAddingPost(false);
            }}
          >
            Yes
          </button>
          <button className={styles.button} onClick={() => setModal(false)}>
            No
          </button>
        </div>
      </div>
    </>
  );
};
export default DisCardPost;
