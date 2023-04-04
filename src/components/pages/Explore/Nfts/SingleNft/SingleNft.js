import React, { useState } from "react";
import CommentsAndDetails from "./CommentsAndDetails/CommentsAndDetails";
import styles from "./SingleNft.module.css";

const SingleNft = ({ img }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  return (
    <>
      <div
        className={styles.nft}
        onClick={() => setShowCommentModal((prev) => !prev)}
      >
        <img src={img} alt="#" className={styles.image} />
      </div>
      {showCommentModal && (
        <CommentsAndDetails setModal={setShowCommentModal} />
      )}
    </>
  );
};

export default SingleNft;
