import React from "react";

import styles from "./styles.module.css";

const HexagonImage = ({ src, background }) => {
  return (
    <img
      src={src}
      alt=""
      className={styles.hexagon}
      style={{ backgroundColor: background }}
    />
  );
};

export default HexagonImage;
