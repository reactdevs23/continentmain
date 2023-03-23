import React from "react";
import { BiLogOut, BiUser } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { user } from "../../../images/image";
import HexagonImage from "../../Hexagon/Hexagon";
import styles from "./styles.module.css";

const ProfileSetting = ({ setModal }) => {
  return (
    <div className={`${styles.profileSettings} marginTop`}>
      <div className={styles.header}>
        <div className={styles.userImage}>
          <HexagonImage src={user} />
        </div>
        <p className={styles.userName}>juanbautista.eth</p>
      </div>
      <div className={styles.balanceAndAddress}>
        <div className={styles.balanceContainer}>
          <p className={styles.ballanceText}>Wallet Balance</p>
          <p className={styles.ballance}>0.0123 ETH</p>
        </div>
        <p className={`${styles.address} ${styles.text}`}>0X553F...5F96</p>
      </div>
      <div className={styles.itemContainer}>
        <Link
          to="/profile"
          className={styles.iconAndItem}
          onClick={() => setModal(false)}
        >
          <BiUser className={styles.icon} />
          <p className={styles.text}>Profile</p>
        </Link>
        <Link
          to="/editProfile"
          className={styles.iconAndItem}
          onClick={() => setModal(false)}
        >
          <FiSettings className={styles.icon} />
          <p className={styles.text}>Settings</p>
        </Link>
        <div className={styles.iconAndItem} onClick={() => setModal(false)}>
          <BiLogOut className={styles.icon} />
          <p className={styles.text}>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
