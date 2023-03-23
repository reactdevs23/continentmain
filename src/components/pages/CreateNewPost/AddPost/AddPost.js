import React, { useState } from "react";

import { RxArrowLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { nftPhoto, user, edit, walletMoney } from "../../../../images/image";
import HexagonImage from "../../../Hexagon/Hexagon";
import CheckBox from "./Checkbox/CheckBox";
import SetValue from "./SetValue/SetValue";
import { useDataContext } from "../../../Context";
import styles from "./styles.module.css";

const AddPost = ({ setModal, setDisCardPost }) => {
  const [addCaption, setAddCaption] = useState("");
  const [notForSale, setNotForSale] = useState(true);
  const [listForSale, setListForSale] = useState(false);
  const navigate = useNavigate();
  const { setCancelUploading } = useDataContext();
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
      <div className={styles.addPostContainer}>
        <div className={styles.addPost}>
          <div className={`${styles.wrapper} grScrollbar`}>
            {" "}
            <div className={styles.backButton} onClick={() => setModal(false)}>
              <RxArrowLeft className={styles.back} />
              <span className={styles.backText}>Back</span>
            </div>
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
                  value={addCaption}
                  placeholder="Add caption..."
                  onChange={(e) => setAddCaption(e.target.value)}
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

                {listForSale && <SetValue />}
              </div>
              <div className={styles.btnDiv}>
                <button
                  className={styles.invertBtn}
                  onClick={() => {
                    setDisCardPost(true);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={styles.button}
                  onClick={() => {
                    navigate("/");
                    setModal(false);
                    setCancelUploading(false);
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default AddPost;
