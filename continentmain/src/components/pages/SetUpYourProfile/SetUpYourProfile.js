import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context";
import HexagonImage from "../../Hexagon/Hexagon";
import ProfilePicures from "./ProfilePictures/ProfilePictures";
import styles from "./styles.module.css";

const SetUpYourProfile = () => {
  const {
    selectedProfilePicture,
    setSelectedProfilePicture,
    userName,
    setUserName,
    existingUserName,
  } = useDataContext();
  const [profilePicturesModal, setProfilePicutersModal] = useState(false);

  const [active, setActive] = useState(userName);
  const [inputLabel, setInputLabel] = useState(false);
  useEffect(() => {
    setActive(userName);
  }, [userName]);

  return (
    <>
      <div className={`marginTop ${styles.setUpProfile}`}>
        <h4 className={styles.heading}>Set up your profile</h4>
        <div className={styles.profilePhotoDiv}>
          {selectedProfilePicture?.img ? (
            <div className={styles.profilePhoto}>
              {" "}
              <HexagonImage src={selectedProfilePicture.img} />
            </div>
          ) : (
            <div className={styles.profilePhoto}>
              {" "}
              <HexagonImage />
            </div>
          )}

          <button onClick={() => setProfilePicutersModal(true)}>
            {/* {selectedProfilePicture?.img
              ? "Change ProfilePicture" */}
            Choose a Profile Picture
          </button>
        </div>
        <form className={styles.userNameContainer}>
          <div
            className={`${styles.inputContainer} ${
              (inputLabel || userName) && styles.paddingTop
            } ${existingUserName === userName && styles.warningBorder}`}
            onClick={() => setInputLabel(true)}
          >
            <label
              htmlFor="userName"
              className={`${styles.label} ${
                (inputLabel || userName) && styles.showLabel
              } ${existingUserName === userName && styles.warning}`}
            >
              Create a usernames
            </label>

            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className={styles.input}
            />
          </div>
          {existingUserName.toLocaleLowerCase() ===
            userName.toLocaleLowerCase() && (
            <span className={`${styles.warning} ${styles.warningText}`}>
              This user name already exist.
            </span>
          )}
          <Link
            to="/shreNft"
            className={`${styles.button} ${!active && styles.disableStyle}  ${
              existingUserName === userName && styles.disableStyle
            }`}
          >
            Next
          </Link>
        </form>
      </div>
      {profilePicturesModal && (
        <ProfilePicures
          setModal={setProfilePicutersModal}
          setSelectedProfilePicture={setSelectedProfilePicture}
        />
      )}
    </>
  );
};

export default SetUpYourProfile;
