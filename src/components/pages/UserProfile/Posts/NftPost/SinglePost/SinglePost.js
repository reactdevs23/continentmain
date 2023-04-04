import React, { useState } from "react";
import styles from "./SinglePost.module.css";
import CommentsAndDetails from "./CommentsAndDetails/CommentsAndDetails";
import { Routes, Route } from "react-router-dom";
import PostDetails from "../../PostDetails/PostDetails";
const SinglePost = ({ img, id }) => {
  const [commentSectionModal, setCommentSectionModal] = useState(false);
  return (
    <>
      <div>
        {" "}
        <img
          src={img}
          alt="#"
          className={styles.image}
          onClick={() => setCommentSectionModal((prev) => !prev)}
        />
        {commentSectionModal && (
          <CommentsAndDetails setModal={setCommentSectionModal} />
        )}
      </div>
    </>
  );
};

export default SinglePost;
