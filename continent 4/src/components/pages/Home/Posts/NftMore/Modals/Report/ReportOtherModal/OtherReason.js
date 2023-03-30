import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import styles from "./styles.module.css";

const OtherReasonModal = ({ setModal, setThanksforReport }) => {
  const [message, setMessage] = useState("");
  const submitHadler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Report: Other</p>
          <AiOutlineClose
            className={styles.close}
            onClick={() => setModal(false)}
          />
        </div>

        <p className={styles.text}>
          Please write why you want to report this post
        </p>
        <form action="#" className={styles.messageBoxContainer}>
          <textarea
            name="message"
            id="messageBox"
            className={styles.messageBox}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="10"
            value={message}
            placeholder="Because..."
          ></textarea>
          <button
            type="submit"
            className={styles.button}
            // onSubmit={(e) => submitHadler(e)}
            onClick={() => {
              setThanksforReport((prev) => !prev);
              setModal(false);
            }}
          >
            Report
          </button>
        </form>
      </div>
    </>
  );
};

export default OtherReasonModal;
