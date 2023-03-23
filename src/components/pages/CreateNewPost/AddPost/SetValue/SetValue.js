import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import styles from "./styles.module.css";

const SetValue = () => {
  const [value, setValue] = useState(0);
  const [valueType, setValueType] = useState(0);
  const [dropdwon, setDropDown] = useState(false);
  const valueTypes = ["Eth", "usdc", "usdt"];

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Set a value:</p>
      <div className={styles.inputContainerAndUsdValue}>
        <div className={styles.inputContainer}>
          <input
            type="number"
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={styles.valueTypeContainer}>
            <p className={styles.valueText}>{valueTypes[valueType]}</p>
            {dropdwon ? (
              <BsChevronUp
                className={styles.arrow}
                onClick={() => setDropDown((prev) => !prev)}
              />
            ) : (
              <BsChevronDown
                className={styles.arrow}
                onClick={() => setDropDown((prev) => !prev)}
              />
            )}
            {dropdwon && (
              <div className={styles.allValueText}>
                {valueTypes.map((el, i) => (
                  <p
                    className={styles.valueText}
                    key={i}
                    onClick={() => {
                      setValueType(i);
                      setDropDown(false);
                    }}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className={styles.usdValue}>${(2338.6 * value).toFixed(2)} USD</p>
      </div>
    </div>
  );
};

export default SetValue;
