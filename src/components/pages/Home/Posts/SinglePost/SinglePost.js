import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  user,
  love,
  lovefill,
  comment,
  send,
  ethIcon,
} from "../../../../../images/image";
import { useDataContext } from "../../../../Context";

import ShareWithModal from "../ShareModal/ShareWithModal";

import NftMore from "../NftMore/NftMore";
import CommentsAndDetails from "../CommentsAndDetails/CommentsAndDetails";

import styles from "./styles.module.css";
import Modal from "../../../../Modal/Modal";
import PostBuy from "../PostBuy/PostBuy";

const SinglePost = ({ data, i }) => {
  const [like, setLike] = useState(false);
  const [nftMore, setNftMore] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const { numberFormating } = useDataContext();

  return (
    <>
      <div className={styles.post}>
        <div className={styles.header}>
          <div className={styles.userContainer}>
            <img src={user} alt="#" className={styles.userImg} />{" "}
            <p className={`${styles.text} ${styles.userName}`}>
              {data.userName}
            </p>
          </div>
          <BiDotsVerticalRounded
            className={styles.more}
            onClick={() => setNftMore((prev) => !prev)}
          />
          {nftMore && <NftMore author={data.author} setNftMore={setNftMore} />}
        </div>
        <div className={styles.imageContainer}>
          <img src={data.postImage} alt="#" className={styles.nftImage} />
        </div>
        <div className={styles.informationContainer}>
          <div className={styles.information}>
            <div className={styles.likeCommentSend}>
              <div className={styles.like}>
                <img
                  src={like ? lovefill : love}
                  alt="#"
                  className={styles.icon}
                  onClick={() => setLike((prev) => !prev)}
                />

                <span className={styles.number}>
                  {numberFormating(data.likes)}
                </span>
              </div>
              <div
                className={styles.comment}
                onClick={() => setShowCommentsModal((prev) => !prev)}
              >
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
            <div className={styles.idAndbutton}>
              <p className={styles.text}>
                {data.name} #{data.id}
              </p>
              <Link to={`post/${i}`} className={styles.button}>
                Detail
              </Link>
            </div>
            <div className={styles.aboutPost}>
              <p className={`${styles.text} ${styles.userName}`}>
                {data.userName}{" "}
              </p>
              <p className={`${styles.text} ${styles.subText}`}>
                {data.postText} &nbsp;
                <span className={styles.time}>{data.time}</span>
              </p>
            </div>
          </div>
          {data.ethAmount && (
            <div
              className={styles.ethContainer}
              onClick={() => setShowBuyModal(true)}
            >
              <span className={styles.eth}>{data.ethAmount}</span>
              <img src={ethIcon} alt="#" className={styles.ethIcon} />
            </div>
          )}
        </div>
      </div>

      {shareModal && <ShareWithModal setModal={setShareModal} />}
      {showCommentsModal && (
        <CommentsAndDetails data={data} setModal={setShowCommentsModal} />
      )}
      {showBuyModal && (
        <Modal setModal={setShowBuyModal}>
          <PostBuy setModal={setShowBuyModal} {...data} />
        </Modal>
      )}
    </>
  );
};

export default SinglePost;
