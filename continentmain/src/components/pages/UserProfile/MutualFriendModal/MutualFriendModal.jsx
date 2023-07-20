import { useEffect, useState } from "react";
import styles from "./MutualFriendModal.module.css";
import { user } from "../../../../images/image";
import HexagonImage from "../../../Hexagon/Hexagon";

const MutualFriendModal = ({ setMutualFriendModal }) => {
  const dummyPeople = [
    {
      name: "username",
      img: user,
      selected: false,
    },
    {
      name: "username1",
      img: user,
      selected: false,
    },
    {
      name: "username2",
      img: user,
      selected: false,
    },
    {
      name: "username",
      img: user,
      selected: false,
    },
    {
      name: "username",
      img: user,
      selected: false,
    },
    {
      name: "username",
      img: user,
      selected: false,
    },
    {
      name: "username",
      img: user,
      selected: false,
    },
    {
      name: "username",
      img: user,
      selected: false,
    },
  ];

  return (
    <>
      <div
        onClick={() => setMutualFriendModal(false)}
        className={styles.overlay}
      ></div>
      <div className={styles.modalWrapp}>
        <div className={styles.modalHeader}>
          <h3>Mutual friends</h3>
          <svg
            onClick={() => setMutualFriendModal(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className={`${styles.suggestionDiv} grScrollbar`}>
          {dummyPeople.map((elem, idx) => {
            return (
              <div
                key={idx + new Date() + "suggest"}
                className={styles.suggestedPerson}
              >
                <div className={styles.leftSuggest}>
                  <div className={styles.userImage}>
                    <HexagonImage src={elem.img} />
                  </div>

                  <p>{elem.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MutualFriendModal;
