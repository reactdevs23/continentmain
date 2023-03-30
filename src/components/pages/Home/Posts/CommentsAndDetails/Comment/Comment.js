import React from "react";
import HexagonImage from "../../../../../Hexagon/Hexagon";

//lovefill,
import styles from "./styles.module.css";
import { useDataContext } from "../../../../../Context";

const Comment = ({ userImg, userName, time, comment, likes }) => {
  // const [like, setLike] = useState(false);
  const { numberFormating } = useDataContext();
  return (
    <div className={styles.commentContainer}>
      <div className={styles.aboutPost}>
        <div className={styles.userImage}>
          <HexagonImage src={userImg} />
        </div>

        <div>
          <div className={`${styles.commentAndUserName} `}>
            <p className={styles.text}>{userName} </p>
            <p className={`${styles.text} ${styles.comment}`}>
              {comment} &nbsp;
            </p>
          </div>
          <div className={styles.timeAndReply}>
            <p className={styles.time}>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
