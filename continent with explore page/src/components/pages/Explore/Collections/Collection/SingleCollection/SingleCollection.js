import React from "react";
import styles from "./SingleCollection.module.css";
import { useState } from "react";
import CommentsAndDetails from "./CommentsAndDetails/CommentsAndDetails";

const SingleCollection = ({ img }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  return (
    <>
      <div
        className={styles.collection}
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

export default SingleCollection;
