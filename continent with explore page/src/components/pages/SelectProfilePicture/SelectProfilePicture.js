import styles from "./styles.module.css";
import { MdOutlineClose } from "react-icons/md";

const SelectProfilePicture = () => {
  return (
    <div className={`${styles.wrapper} marginTop`}>
      <div className={styles.modalWrapp}>
        <MdOutlineClose className={styles.close} />

        <h3 className={styles.title}>Select your profile picture</h3>

        <p className={styles.text}>You don’t have NFT’s in this wallet</p>

        <button className={styles.button}>Select</button>
      </div>
    </div>
  );
};

export default SelectProfilePicture;
