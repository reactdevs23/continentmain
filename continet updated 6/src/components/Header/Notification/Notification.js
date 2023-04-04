import React from "react";
import { user } from "../../../images/image";
import HexagonImage from "../../Hexagon/Hexagon";
import styles from "./styles.module.css";

const Notification = ({ data }) => {
  return (
    <div className={`${styles.notificationContainer} marginTop `}>
      <h3 className={styles.heading}>Notifications</h3>

      <div className={`${styles.notifications} grScrollbar`}>
        {" "}
        {data.map((el, i) => (
          <div className={styles.userWrapper} key={i}>
            <div className={styles.userAndnotification}>
              {" "}
              <div className={styles.userImage}>
                <HexagonImage src={user} />
              </div>
              <p className={styles.userInfo}>
                <span className={styles.userName}>{el.name}</span>
                {el.friendRequest && (
                  <span className={styles.text}>
                    sent you a friend request.
                  </span>
                )}
                {/* {el.message && (
                  <span className={styles.text}> sent a message.</span>
                )} */}
                {el.purchased && (
                  <span className={styles.text}> purchased your NFT.</span>
                )}
                {el.like && (
                  <span className={styles.text}> liked your post.</span>
                )}
                {el.comment && (
                  <span className={styles.text}>
                    {" "}
                    commented : {el.comment}.
                  </span>
                )}{" "}
                <span className={styles.time}>{el.time}</span>
              </p>
            </div>

            {el.friendRequest && (
              <div className={styles.buttonContainer}>
                {" "}
                <button className={styles.button}>Accept</button>{" "}
                <button className={`${styles.button} ${styles.remove}`}>
                  Delete
                </button>
              </div>
            )}

            {el.img && <img src={el.img} alt="#" className={styles.image} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
