import React, { useState } from "react";
import CommentsAndDetails from "./CommentsAndDetails/CommentsAndDetails";
import ConnectWalletModal from "../../../ConnectWalletModal/ConnectWalletModal";
import styles from "./SingleNft.module.css";
import { useDataContext } from "../../../../Context";

const SingleNft = ({ img }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const { showConnectWalletModal } = useDataContext();

  return (
    <>
      <div className={styles.nft} onClick={() => setShowCommentModal(true)}>
        <img src={img} alt="#" className={styles.image} />
      </div>
      {showCommentModal && (
        <CommentsAndDetails setModal={setShowCommentModal} />
      )}{" "}
      {showConnectWalletModal && <ConnectWalletModal />}
    </>
  );
};

export default SingleNft;
