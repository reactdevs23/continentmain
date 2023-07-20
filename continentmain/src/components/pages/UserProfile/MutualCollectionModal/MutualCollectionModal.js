import { useEffect, useState } from "react";
import styles from "./MutualCollection.module.css";
import { mutualCollection, user } from "../../../../images/image";
import HexagonImage from "../../../Hexagon/Hexagon";

const MutualCollectionModal = ({ setMutualCollectionModal }) => {
  const dummyPeople = [
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
    {
      name: "collection-name",
      img: mutualCollection,
      selected: false,
    },
  ];

  return (
    <>
      <div
        onClick={() => setMutualCollectionModal(false)}
        className={styles.overlay}
      ></div>
      <div className={styles.modalWrapp}>
        <div className={styles.modalHeader}>
          <h3>Mutual collections</h3>
          <svg
            onClick={() => setMutualCollectionModal(false)}
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
                  <div className={styles.groupImages}>
                    <div className={styles.groupImage}>
                      <img
                        src={elem.img}
                        alt="#"
                        className={styles.userImage}
                      />
                    </div>
                    <div className={styles.groupImage}>
                      <img
                        src={elem.img}
                        alt="#"
                        className={styles.userImage}
                      />
                    </div>
                    <div className={styles.groupImage}>
                      <img
                        src={elem.img}
                        alt="#"
                        className={styles.userImage}
                      />
                    </div>
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

export default MutualCollectionModal;
