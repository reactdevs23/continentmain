import React, { useState } from "react";

import { MdOutlineClose } from "react-icons/md";
import {
  postImage,
  user,
  ethIcon,
  comment,
  send,
} from "../../../../../images/image";
import Comment from "./Comment/Comment";
import Modal from "../../../../Modal/Modal";
import ShareModal from "../../../MyProfile/ShareModal/ShareModal";
import styles from "./styles.module.css";

const CommentsAndDetails = ({ data, setModal }) => {
  const [postText, setPostText] = useState("");

  const [shareModal, setShareModal] = useState(false);
  const comments = [
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
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
        <img src={postImage} alt="#" className={styles.postImage} />
        <div className={styles.postDetails}>
          <div className={styles.header}>
            <div className={styles.userContainer}>
              <img src={user} alt="#" className={styles.userImg} />{" "}
              <p className={styles.text}>{data.userName}</p>
            </div>
          </div>
          <div className={styles.informationContainer}>
            <div className={styles.information}>
              <div className={styles.idAndbutton}>
                <p className={styles.text}>Moonbird #{data.id}</p>
              </div>
              <div className={styles.aboutPost}>
                <p className={styles.text}>{data.userName} </p>
                <p className={`${styles.text} ${styles.subText}`}>
                  {data.postText} &nbsp;
                  <span className={styles.time}>{data.time}</span>
                </p>
              </div>
            </div>
            {data.ethAmount && (
              <div className={styles.ethContainer}>
                <span className={styles.eth}>{data.ethAmount}</span>
                <img src={ethIcon} alt="#" className={styles.ethIcon} />
              </div>
            )}
          </div>
          <div className={`${styles.commentsWrapper}  grScrollbar`}>
            {comments.map((el, i) => (
              <Comment {...el} key={i} />
            ))}
          </div>{" "}
          <div className={styles.likeCommentSend}>
            <div className={styles.comment}>
              <img src={comment} alt="#" className={styles.icon} />
              <span className={styles.number}>
                {numberFormating(data.comments)}
              </span>
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
      {shareModal && (
        <Modal setModal={setShareModal}>
          <ShareModal setModal={setShareModal} />
        </Modal>
      )}
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};

export default CommentsAndDetails;
