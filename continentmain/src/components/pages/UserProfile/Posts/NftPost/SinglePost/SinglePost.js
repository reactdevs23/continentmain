import React, { useState } from "react";
import styles from "./SinglePost.module.css";
import CommentsAndDetails from "./CommentsAndDetails/CommentsAndDetails";

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
