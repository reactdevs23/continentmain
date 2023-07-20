import React from "react";
import { Link } from "react-router-dom";
import {
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
} from "../../../../images/image";
import styles from "./AllCollections.module.css";

const AllCollections = () => {
  const collections = [
    {
      img: collection1,
      category: "Tubby Cats",
      info: "TubbyCatsDeployer",
    },
    {
      img: collection2,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection3,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection4,
      category: "CrypToadz by GRE...",
      info: "794B67",
    },
    {
      img: collection5,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection6,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection1,
      category: "Tubby Cats",
      info: "TubbyCatsDeployer",
    },
    {
      img: collection2,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection3,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection4,
      category: "CrypToadz by GRE...",
      info: "794B67",
    },
    {
      img: collection5,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection6,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection1,
      category: "Tubby Cats",
      info: "TubbyCatsDeployer",
    },
    {
      img: collection2,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection3,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection4,
      category: "CrypToadz by GRE...",
      info: "794B67",
    },
    {
      img: collection5,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection6,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection1,
      category: "Tubby Cats",
      info: "TubbyCatsDeployer",
    },
    {
      img: collection2,
      category: "Blitmap",
      info: "dhof",
    },
    {
      img: collection3,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection4,
      category: "CrypToadz by GRE...",
      info: "794B67",
    },
    {
      img: collection5,
      category: "goblintown.wtf",
      info: "kingofthegoblin",
    },
    {
      img: collection6,
      category: "Blitmap",
      info: "dhof",
    },
  ];
  return (
    <div className={`${styles.collections} marginTop wrapper`}>
      {" "}
      <h3 className={styles.title}>Explore collections</h3>
      <div className={`${styles.wrapper} `}>
        {collections.map((el, i) => (
          <Link to="collection" key={i} className={styles.collection}>
            <img
              src={el.img}
              alt="#"
              className={[styles.image, styles.colloectionImage].join(" ")}
            />
            <p className={styles.category}>{el.category}</p>
            <p className={styles.info}>{el.info}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCollections;
