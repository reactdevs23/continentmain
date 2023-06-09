import React, { useState } from "react";
// import { BiUser } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

import {
  nftPhoto,
  user,
  edit,
  walletMoney,
} from "../../../../../../../images/image";
import HexagonImage from "../../../../../../Hexagon/Hexagon";
import CheckBox from "./Checkbox/CheckBox";
import SetPrice from "./SetPrice/SetPrice";
import styles from "./styles.module.css";

const EditInformation = ({ setModal }) => {
  const [addNftINfo, setAddNftINfo] = useState("Look at my new NFT!");
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
                <textarea
                  name="addCaption"
                  value={addNftINfo}
                  placeholder="Edit nft info..."
                  onChange={(e) => setAddNftINfo(e.target.value)}
                  className={`${styles.text} ${styles.textArea} ${styles.editText}`}
                ></textarea>
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

                {listForSale && <SetPrice />}
              </div>
              <div className={styles.btnDiv}>
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                  className={styles.invertBtn}
                >
                  Cancel
                </button>
                <button
                  className={styles.button}
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default EditInformation;
