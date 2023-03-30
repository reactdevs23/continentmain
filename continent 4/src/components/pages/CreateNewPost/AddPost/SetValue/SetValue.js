import React, { useState } from "react";
// import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import styles from "./styles.module.css";

const SetValue = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Set a value:</p>
      <div className={styles.inputContainerAndUsdValue}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            pattern="[0-9]*"
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <div className={styles.valueTypeContainer}>
            <p className={styles.valueText}>Eth</p>
          </div>
        </div>
        <p className={styles.usdValue}>${(2338.6 * value).toFixed(2)} USD</p>
      </div>
    </div>
  );
};

export default SetValue;
