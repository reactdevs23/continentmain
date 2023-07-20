import React from "react";

import styles from "./styles.module.css";

const HexagonImage = ({ src, background, onClick }) => {
  return (
    <img
      src={src}
      alt=""
      onClick={onClick}
      className={styles.hexagon}
      style={{ backgroundColor: background }}
    />
  );
};

export default HexagonImage;
