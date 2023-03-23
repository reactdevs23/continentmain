import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import Detail from "./DetailsDescriptionAndProperties/Details";
import Description from "./DetailsDescriptionAndProperties/Description";
import Properties from "./DetailsDescriptionAndProperties/Properties";
import styles from "./styles.module.css";

const Details = ({ setShowDetails, showDetails }) => {
  return (
    <div
      className={`${styles.descriptionContainer} ${
        showDetails && styles.descriptionWrapper
      } grScrollbar`}
    >
      <div className={styles.nameId}>
        <p className={styles.name}>Moonbird #7899</p>
        <span className={styles.nameHighlight}>Moonbirds</span>
      </div>
      <CgArrowLeft
        className={styles.close}
        onClick={() => setShowDetails(false)}
      />
      <Detail />
      <Description />
      <Properties />
    </div>
  );
};

export default Details;
