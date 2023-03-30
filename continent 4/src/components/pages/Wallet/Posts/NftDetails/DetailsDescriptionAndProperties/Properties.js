import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styles from "./styles.module.css";

const Properties = () => {
  const [showDetails, setShowDetails] = useState();
  const data = [
    { title: "Property 1", details: "Property name" },
    { title: "Property 1", details: "Property name" },
    { title: "Property 1", details: "Property name" },
    { title: "Property 1", details: "Property name" },
    { title: "Property 1", details: "Property name" },
    { title: "Property 1", details: "Property name" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.heading}>Properties </p>
        {showDetails ? (
          <BsChevronUp
            className={styles.arrow}
            onClick={() => setShowDetails((prev) => !prev)}
          />
        ) : (
          <BsChevronDown
            className={styles.arrow}
            onClick={() => setShowDetails((prev) => !prev)}
          />
        )}
      </div>

      {showDetails && (
        <div className={styles.propertyContainer}>
          {data.map((el, i) => (
            <div className={styles.propertyBox} key={i}>
              <p className={styles.address}>{el.title}</p>{" "}
              <p className={styles.text}>{el.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
