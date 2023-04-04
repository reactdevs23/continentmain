import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import {
  commentNft,
  user,
  ethIcon,
  comment,
  send,
  love,
} from "../../../../../../../images/image";
import Comment from "./Comment/Comment";

import ShareModal from "../ShareModal/ShareWithModal";
import styles from "./styles.module.css";
import HexagonImage from "../../../../../../Hexagon/Hexagon";
import { Link } from "react-router-dom";
import NftMore from "../../../../../Home/Posts/NftMore/NftMore";

const CommentsAndDetails = ({ setModal }) => {
  const [nftMore, setNftMore] = useState(false);
  const [postText, setPostText] = useState("");

  const [shareModal, setShareModal] = useState(false);
  const comments = [
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const numberFormating = (number) => {
    if (number >= 1000 && number % 1000 === 0) {
      number = (number / 1000).toFixed(0) + "k";
    } else if (number >= 1000 && number % 1000 !== 0) {
      number = (number / 1000).toFixed(1) + "k";
    }
    return number;
  };
  return (
    <>
      <div className={styles.wrapper}>
        <img src={commentNft} alt="#" className={styles.postImage} />
        <div className={styles.postDetails}>
          <div className={styles.header}>
            <div className={styles.userContainer}>
              {" "}
              <div className={styles.userImg}>
                <HexagonImage src={user} />
              </div>
              <p className={styles.text}>juanbautista.eth</p>
            </div>
            <BiDotsVerticalRounded
              className={styles.more}
              onClick={() => setNftMore((prev) => !prev)}
            />
            {nftMore && <NftMore setNftMore={setNftMore} />}
          </div>
          <div className={styles.informationContainer}>
            <div className={styles.information}>
              <div className={styles.idAndbutton}>
                <p className={styles.text}>Moonbird #7789 </p>
                <Link to="/userProfile/postDetails" className={styles.details}>
                  Detail
                </Link>
              </div>
              <div className={styles.aboutPost}>
                <p className={styles.text}>juanbautista.eth </p>
                <p className={`${styles.text} ${styles.subText}`}>
                  Look at my NFT! &nbsp;
                  <span className={styles.time}>1d</span>
                </p>
              </div>
            </div>

            <div className={styles.ethContainer}>
              <span className={styles.eth}>0.038</span>
              <img src={ethIcon} alt="#" className={styles.ethIcon} />
            </div>
          </div>
          <div className={`${styles.commentsWrapper}  grScrollbar`}>
            {comments.map((el, i) => (
              <Comment {...el} key={i} />
            ))}
          </div>{" "}
          <div className={styles.likeCommentSend}>
            <div className={styles.like}>
              <img
                // src={like ? lovefill : love}
                src={love}
                alt="#"
                className={styles.icon}
                // onClick={() => setLike((prev) => !prev)}
              />

              <span className={styles.number}>{numberFormating(1)}</span>
            </div>
            <div className={styles.comment}>
              <img src={comment} alt="#" className={styles.icon} />
              <span className={styles.number}>{numberFormating(200)}</span>
            </div>

            <img
              src={send}
              alt="#"
              className={styles.icon}
              onClick={() => setShareModal((prev) => !prev)}
            />
          </div>
          <form className={styles.postInputContainer}>
            <input
              type="text"
              placeholder="Add new comment..."
              className={styles.postInput}
              name="post"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <button
              type="submit"
              onSubmit={(e) => handleSubmit(e)}
              className={styles.postButton}
            >
              Post
            </button>
          </form>
        </div>
      </div>
      <MdOutlineClose
        className={styles.close}
        onClick={() => setModal(false)}
      />
      {shareModal && <ShareModal setModal={setShareModal} />}
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};

export default CommentsAndDetails;
