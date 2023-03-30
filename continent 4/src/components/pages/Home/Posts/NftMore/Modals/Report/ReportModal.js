import React, { useState } from "react";

import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import Modal from "../../../../../../Modal/Modal";

import styles from "../../styles.module.css";
import OtherReasonModal from "./ReportOtherModal/OtherReason";

const ReportModal = ({ setModal, setOtherReason }) => {
  const soicals = [
    {
      name: "I just don't like it",
      to: "#",
    },
    { name: "Spam", to: "#" },
    { name: "Scam or Fraud", to: "#" },
    { name: "Illegal Activity", to: "#" },
    { name: "Discrimination", to: "#" },
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Report</p>
          <AiOutlineClose
            className={styles.close}
            onClick={() => setModal(false)}
          />
        </div>
        <div className={styles.socialContainer}>
          {soicals.map((el, i) => (
            <a
              href={el.to}
              target="_blank"
              rel="noreferrer"
              key={i}
              className={styles.socials}
            >
              <p className={styles.name}>{el.name}</p>

              <AiOutlineArrowRight className={styles.arrow} />
            </a>
          ))}
        </div>{" "}
        <div
          className={`${styles.socialContainer} `}
          onClick={() => {
            setOtherReason((prev) => !prev);
            setModal(false);
          }}
        >
          <div className={` ${styles.socials} ${styles.reportContaner}`}>
            <p className={styles.name}>Others</p>
            <AiOutlineArrowRight className={styles.arrow} />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ReportModal;
