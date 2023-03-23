import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import {
  share,
  copy,
  report,
  close,
  edit,
  deleteIcon,
} from "../../../../../images/image";
import Modal from "../../../../Modal/Modal";

import ShareModal from "../../../MyProfile/ShareModal/ShareModal";
import DeletePost from "./Modals/DeletePost/Delete";
import EditInformation from "./Modals/EditInformation/EditInformation";
import ReportModal from "./Modals/Report/ReportModal";
import OtherReasonModal from "./Modals/Report/ReportOtherModal/OtherReason";
import ThanksForReport from "./Modals/Report/ReportOtherModal/ThanksForReport";
import styles from "./styles.module.css";

const NftMore = ({ setNftMore, author }) => {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [deletePostModal, setDeletePostModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [otherReason, setOtherReason] = useState(false);
  const [thansksForReport, setThanksforReport] = useState();

  return (
    <>
      <div className={`${styles.wrapper} ${styles.nftMore}`}>
        {author && (
          <div
            className={styles.socialContainer}
            onClick={() => setEditProfileModal((prev) => !prev)}
          >
            <p className={styles.socials}>
              <p className={styles.nameAndIcon}>
                <img src={edit} alt="#" className={styles.socialIcon} />
                <span className={styles.name}>Edit</span>
              </p>
              <AiOutlineArrowRight className={styles.arrow} />
            </p>
          </div>
        )}
        <div
          className={styles.socialContainer}
          onClick={() => setShareModal((prev) => !prev)}
        >
          <p className={styles.socials}>
            <p className={styles.nameAndIcon}>
              <img src={share} alt="#" className={styles.socialIcon} />
              <span className={styles.name}>Share</span>
            </p>
            <AiOutlineArrowRight className={styles.arrow} />
          </p>
        </div>
        <div className={styles.socialContainer}>
          <p className={styles.socials}>
            <p className={styles.nameAndIcon}>
              <img src={copy} alt="#" className={styles.socialIcon} />
              <span className={styles.name}>Copy Link</span>
            </p>
            <AiOutlineArrowRight className={styles.arrow} />
          </p>
        </div>{" "}
        {!author && (
          <div
            className={styles.socialContainer}
            onClick={() => setReportModal((prev) => !prev)}
          >
            <p className={styles.socials}>
              <p className={styles.nameAndIcon}>
                <img src={report} alt="#" className={styles.socialIcon} />
                <span className={styles.name}>Report</span>
              </p>
              <AiOutlineArrowRight className={styles.arrow} />
            </p>
          </div>
        )}
        {author && (
          <div
            className={styles.socialContainer}
            onClick={() => setDeletePostModal((prev) => !prev)}
          >
            <p className={styles.socials}>
              <p className={styles.nameAndIcon}>
                <img src={deleteIcon} alt="#" className={styles.socialIcon} />
                <span className={styles.name}>Delete</span>
              </p>
              <AiOutlineArrowRight className={styles.arrow} />
            </p>
          </div>
        )}
        {!author && (
          <div
            className={styles.socialContainer}
            onClick={() => setNftMore(false)}
          >
            <p className={styles.socials}>
              <p className={styles.nameAndIcon}>
                <img src={close} alt="#" className={styles.socialIcon} />
                <span className={styles.name}>Cancel</span>
              </p>
              <AiOutlineArrowRight className={styles.arrow} />
            </p>
          </div>
        )}
      </div>
      {editProfileModal && (
        <Modal setModal={setEditProfileModal}>
          <EditInformation setModal={setEditProfileModal} />
        </Modal>
      )}
      {deletePostModal && <DeletePost setModal={setDeletePostModal} />}
      {shareModal && (
        <Modal setModal={setShareModal}>
          <ShareModal setModal={setShareModal} />
        </Modal>
      )}{" "}
      {reportModal && (
        <Modal setModal={setReportModal}>
          <ReportModal
            setModal={setReportModal}
            setOtherReason={setOtherReason}
          />
        </Modal>
      )}{" "}
      {otherReason && (
        <Modal setModal={setOtherReason}>
          <OtherReasonModal
            setModal={setOtherReason}
            setThanksforReport={setThanksforReport}
          />
        </Modal>
      )}{" "}
      {thansksForReport && (
        <Modal setModal={setThanksforReport}>
          <ThanksForReport setModal={setThanksforReport} />
        </Modal>
      )}
    </>
  );
};

export default NftMore;
