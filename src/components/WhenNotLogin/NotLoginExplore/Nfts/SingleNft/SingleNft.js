import React, { useState } from "react";
import CommentsAndDetails from "./CommentsAndDetails/CommentsAndDetails";

import styles from "./SingleNft.module.css";
import { useDataContext } from "../../../../Context";

const SingleNft = ({ img }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const { scrollToTop } = useDataContext();

  return (
    <>
      <div
        className={styles.nft}
        onClick={() => {
          setShowCommentModal(true);
          scrollToTop();
        }}
      >
        <img src={img} alt="#" className={styles.image} />
      </div>
      {showCommentModal && (
        <CommentsAndDetails setModal={setShowCommentModal} />
      )}{" "}
    </>
  );
};

export default SingleNft;
