import styles from "./ChatRoomSidebar.module.css";
import { user } from "../../../../images/image";
import { NavLink } from "react-router-dom";
import HexagonImage from "../../../Hexagon/Hexagon";
const ChatRoomSidebar = ({
  typing,
  latestMsg = "",
  unread,
  username,
  img = user,
  time,
  setRoomToggle,
  id,
  group,
}) => {
  return (
    <NavLink
      style={({ isActive, isPending }) => {
        return {
          backgroundColor: isActive ? "#D9D9D933" : "",
        };
      }}
      onClick={() => setRoomToggle(false)}
      to={`/messages/${id}`}
      className={styles.chatRoom}
    >
      {group ? (
        <div className={styles.groupImages}>
          <div className={styles.groupImage}>
            <HexagonImage src={img} />
          </div>
          <div className={styles.groupImage}>
            <HexagonImage src={img} />
          </div>
          <div className={styles.groupImage}>
            <HexagonImage src={img} />
          </div>
        </div>
      ) : (
        <div className={styles.groupImage}>
          <HexagonImage src={img} />
        </div>
      )}

      <div className={styles.rightRoom}>
        <div className={styles.roomDetails}>
          <h4>{group ? "Group Name" : username}</h4>
          {typing ? (
            <p>
              <span>Typing...</span>
            </p>
          ) : (
            <p
              style={{
                color: unread > 0 ? "#FAFAFA" : "#FAFAFAB8",
                fontWeight: unread > 0 ? "500" : "400",
              }}
            >
              {latestMsg.slice(0, 30)}... <span>{time}</span>
            </p>
          )}
        </div>
        {unread > 0 && <h5 className={styles.unread}>{unread}</h5>}
      </div>
    </NavLink>
  );
};

export default ChatRoomSidebar;
