import React from "react";
import styles from "./CheckBox.module.css";

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.myCheckBox}
      />
      <p className={styles.checkmark}></p>
      <p className={styles.text}>{label}</p>
    </label>
  );
};

export default CheckBox;
