import React, { useState } from "react";
import AllNft from "./AllNft/AllNft";
import ChooseWallet from "./ChooseWallet/ChooseWallet";
import {
  nft,
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft7,
  nft8,
  nft9,
  nft10,
} from "../../../images/image";
import styles from "./styles.module.css";
import Modal from "../../Modal/Modal";
import AddPost from "./AddPost/AddPost";
import DisCardPost from "./DiscardPost/DiscardPost";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useDataContext } from "../../Context";

const CreateNewPost = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [addingPost, setAddingPost] = useState(false);
  const [disCardPost, setDisCardPost] = useState(false);
  const { setUploadingProgress } = useDataContext();
  const buttonActiveFunc = (nftSelected) => {
    setButtonActive(nftSelected);
  };
  const allNfts = [
    { img: nft },
    { img: nft1 },
    { img: nft2 },
    { img: nft3 },
    { img: nft4 },
    { img: nft5 },
    { img: nft1 },
    { img: nft7 },
    { img: nft8 },
    { img: nft9 },
    { img: nft10 },
    { img: nft1 },
    { img: nft2 },
    { img: nft3 },
    { img: nft4 },
    { img: nft5 },
    { img: nft1 },
    { img: nft1 },
    { img: nft7 },
    { img: nft8 },
    { img: nft },
    { img: nft1 },
    { img: nft2 },
    { img: nft3 },
  ];

  return (
    <>
      <div className="wrapper">
        <div className={`${styles.createNewPostContainer} marginTop `}>
          <ProgressBar />
          <h4 className={styles.title}>Create new post</h4>
          <p className={styles.text}>Choose your wallet:</p>
          <div className={styles.chooseWalletWrapper}>
            <div className={styles.chooseWallet}>
              <ChooseWallet />
              <button
                className={`${styles.button} ${
                  buttonActive && styles.buttonActive
                }`}
                onClick={() => {
                  if (buttonActive) {
                    setAddingPost(true);
                    setUploadingProgress(70);
                  }
                }}
              >
                Select
              </button>
            </div>
          </div>

          <AllNft buttonActiveFunc={buttonActiveFunc} data={allNfts} />
        </div>
      </div>
      {addingPost && buttonActive && (
        <Modal setModal={setAddingPost}>
          <AddPost setModal={setAddingPost} setDisCardPost={setDisCardPost} />
        </Modal>
      )}
      {disCardPost && (
        <DisCardPost setModal={setDisCardPost} setAddingPost={setAddingPost} />
      )}
    </>
  );
};

export default CreateNewPost;
