import React, { useState } from "react";
import styles from "./SinglePost.module.css";
import CommentsAndDetails from "../SinglePost/CommentsAndDetails/CommentsAndDetails";
import { useDataContext } from "../../../../../Context";

const SinglePost = ({ img, id }) => {
  const [commentSectionModal, setCommentSectionModal] = useState(false);
  const { scrollToTop } = useDataContext();
  return (
    <>
      <div>
        {" "}
        <img
          src={img}
          alt="#"
          className={styles.image}
          onClick={() => {
            setCommentSectionModal((prev) => !prev);
            scrollToTop();
          }}
        />
        {commentSectionModal && (
          <CommentsAndDetails setModal={setCommentSectionModal} />
        )}
      </div>
    </>
  );
};

export default SinglePost;
