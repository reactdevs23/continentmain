import React, { useState } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";
import { useDataContext } from "../../../Context";
import UploadingNft from "../../CreateNewPost/UploadingNft/UploadingNft";

import WhoToFollow from "../FindFriends/FindFriends";

import SinglePost from "./SinglePost/SinglePost";
import styles from "./styles.module.css";

const Posts = ({ data }) => {
  const [showWhotoFollow, setShowWhotoFollow] = useState(false);
  const { cancelUploading } = useDataContext();

  return (
    <>
      <div className={`marginTop ${styles.postContainer}`}>
        <div className={`${styles.postsWrapper} `}>
          {!cancelUploading && <UploadingNft />}
          <div className={`${styles.posts} `}>
            {data.map((el, i) => (
              <SinglePost data={el} i={i + 1} key={i} />
            ))}
          </div>
          {showWhotoFollow ? (
            <BsFillCaretLeftSquareFill
              className={styles.arrow}
              onClick={() => setShowWhotoFollow((prev) => !prev)}
            />
          ) : (
            <BsFillCaretRightSquareFill
              className={styles.arrow}
              onClick={() => setShowWhotoFollow((prev) => !prev)}
            />
          )}

          <WhoToFollow showWhotoFollow={showWhotoFollow} />
        </div>{" "}
      </div>
    </>
  );
};

export default Posts;
