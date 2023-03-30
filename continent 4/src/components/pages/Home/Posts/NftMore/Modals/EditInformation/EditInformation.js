import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import {
  nftPhoto,
  user,
  edit,
  walletMoney,
} from "../../../../../../../images/image";
import HexagonImage from "../../../../../../Hexagon/Hexagon";
import CheckBox from "./Checkbox/CheckBox";
import styles from "./styles.module.css";

const EditInformation = ({ setModal }) => {
  const [notForSale, setNotForSale] = useState(true);
  const [listForSale, setListForSale] = useState(false);
  const handleNotForSale = () => {
    setNotForSale(true);
    setListForSale(false);
  };
  const handleListForSale = () => {
    setNotForSale(false);
    setListForSale(true);
  };
  return (
    <>
      <div className={styles.editInformationContainer}>
        <div className={styles.editInformation}>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>Edit information</h4>
            <MdOutlineClose
              className={styles.close}
              onClick={() => setModal(false)}
            />
          </div>
          <div className={`${styles.wrapper} grScrollbar`}>
            <img src={nftPhoto} alt="#" className={styles.image} />
            <div className={styles.details}>
              <div className={styles.userContainer}>
                <div className={styles.profile}>
                  <HexagonImage src={user} />
                </div>{" "}
                <p className={styles.text}>juanbautista.eth</p>
              </div>
              <div className={styles.edits}>
                <img src={edit} alt="#" className={styles.edit} />
                <p className={`${styles.text} ${styles.editText}`}>
                  Look at my new NFT!
                </p>
              </div>
              <div className={styles.tagPeople}>
                <BiUser className={styles.userIcon} />
                <p className={`${styles.text} `}>Tag people</p>
              </div>
              <div className={styles.listForSaleContainer}>
                <div className={styles.listForSale}>
                  <img src={walletMoney} alt="#" className={styles.edit} />
                  <p className={`${styles.text}`}>List for sale?</p>
                </div>
                <div className={styles.checkboxContainer}>
                  <CheckBox
                    label="No"
                    onChange={handleNotForSale}
                    checked={notForSale}
                  />
                  <CheckBox
                    label="Yes"
                    onChange={handleListForSale}
                    checked={listForSale}
                  />
                </div>
              </div>
              <div className={styles.btnDiv}>
                <button
                  className={styles.invertBtn}
                  onClick={() => setModal(false)}
                >
                  Cancel
                </button>
                <button className={styles.button}>Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default EditInformation;
