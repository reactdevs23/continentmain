import React from "react";
import { CgClose } from "react-icons/cg";
import { testImg } from "../../../../images/image";
import { useDataContext } from "../../../Context";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./styles.module.css";

const UploadingNft = () => {
  const { setCancelUploading } = useDataContext();
  return (
    <div className={`${styles.uploadingWrapper} `}>
      <div className={styles.uploading}>
        <div className={styles.imageAndName}>
          <img src={testImg} alt="#" className={styles.image} />
          <p className={styles.text}>Uploading NFT...</p>
        </div>
        <div
          className={styles.cancelContainer}
          onClick={() => setCancelUploading(true)}
        >
          <p className={`${styles.text} ${styles.warning}`}>Cancel</p>
          <CgClose
            className={`${styles.text} ${styles.close}`}
            color="#ff5757"
          />
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default UploadingNft;
