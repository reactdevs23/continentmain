import React, { useState, useRef, useEffect } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";
import { useDataContext } from "../../../Context";
import UploadingNft from "../../CreateNewPost/UploadingNft/UploadingNft";

import WhoToFollow from "../FindFriends/FindFriends";

import SinglePost from "./SinglePost/SinglePost";
import styles from "./styles.module.css";
import Loader from "../../../Loader/Loader";

const Posts = ({ data }) => {
  const [showWhotoFollow, setShowWhotoFollow] = useState(false);
  const { cancelUploading } = useDataContext();
  const [myData, setMyData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMyData(data.slice(0, currentIndex + 4));
  }, [currentIndex]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;

    if (scrollTop === 0 && currentIndex > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 4);
        setIsLoading(false);
      }, 3000);
    } else if (
      scrollTop + clientHeight === scrollHeight &&
      currentIndex < data.length - 4
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 4);
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const current = contentRef.current;
    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  return (
    <>
      <div className={`marginTop ${styles.postContainer}`}>
        <div className={`${styles.postsWrapper} `}>
          {!cancelUploading && <UploadingNft />}
          <div className={`${styles.posts} `} ref={contentRef}>
            {myData.map((el, i) => (
              <SinglePost data={el} i={i + 1} key={i} />
            ))}
            {isLoading && <Loader />}
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
