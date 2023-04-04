import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {
  logo,
  messenger,
  notification,
  user,
  moonbirds,
  testImg,
} from "../../images/image";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./styles.module.css";
import searchStyles from "./search.module.css";
import { Link, NavLink } from "react-router-dom";
import HexagonImage from "../Hexagon/Hexagon";
import Notifications from "./Notification/Notification";
import ProfileSetting from "./ProfileSettings/ProfileSetting";

const Header = ({ hideNavbar }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredCollection, setFilteredCollections] = useState([]);
  const [filteredAccount, setFilteredAccounts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileSetting, setShowProfileSetting] = useState(false);
  const notifications = [
    {
      user: user,
      name: "bitcoinmaxi ",
      friendRequest: true,
      time: "1h",
    },
    {
      user: user,
      name: "bitcoinmaxi ",

      friendRequest: true,

      time: "1h",
    },
    {
      user: user,
      name: "bitcoinmaxi",

      like: true,
      time: "1h",
      img: testImg,
    },
    {
      user: user,
      name: "bitcoinmaxi",

      purchased: true,
      time: "1h",
      img: testImg,
    },

    {
      user: user,
      name: "bitcoinmaxi ",
      friendRequest: true,
      time: "1h",
    },
    {
      user: user,
      name: "bitcoinmaxi",
      comment: "Wow love this.",
      time: "1h",
      img: testImg,
    },
  ];
  // const collections = [
  //   { img: moonbirds, name: "Moonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Boonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Moonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Boonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Foonbirds", items: 10000, price: 7.62 },
  // ];
  const accounts = [
    { img: user, name: "Moonbirds" },
    { img: user, name: "Boonbirds" },
    { img: user, name: "Foonbirds" },
  ];
  const filterData = (query) => {
    // const filteredcollections = collections.filter((item) => {
    //   return item.name.toLowerCase().includes(query.toLowerCase());
    // });
    const filteredAccounts = accounts.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    // setFilteredCollections(filteredcollections);
    setFilteredAccounts(filteredAccounts);
  };
  return (
    <>
      <section className={`${styles.header} container`}>
        <img src={logo} alt="#" className={styles.logo} />
        {!hideNavbar && (
          <>
            <div className={styles.searchContainer}>
              <div className={styles.inputContainer}>
                <FiSearch className={styles.search} />
                <input
                  type="text"
                  placeholder="Search accounts"
                  className={styles.input}
                  value={searchValue}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchValue(e.target.value);
                    filterData(e.target.value);
                  }}
                />
                {searchQuery && (
                  <div className={searchStyles.searchingContainer}>
                    {" "}
                    {/* {filteredCollection && (
                      <h2 className={searchStyles.searchTitle}>Collections</h2>
                    )} */}
                    {/* {filteredCollection.map((item, i) => (
                      <div className={searchStyles.details} key={i}>
                        <div className={searchStyles.imgAndName}>
                          <img
                            src={item.img}
                            alt="#"
                            className={searchStyles.moonBirds}
                          />
                          <div className={searchStyles.nameAndItems}>
                            <p
                              className={searchStyles.name}
                              onClick={() => {
                                setSearchValue(item.name);
                                setSearchQuery("");
                              }}
                            >
                              {item.name}
                            </p>
                            <p className={searchStyles.items}>
                              {item.items.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <p className={searchStyles.items}>{item.price} ETH</p>
                      </div>
                    ))} */}
                    {filteredAccount && (
                      <h2 className={searchStyles.searchTitle}>Accounts</h2>
                    )}
                    {filteredAccount.map((item, i) => (
                      <div className={searchStyles.details}>
                        <div className={`${searchStyles.imgAndName} `} key={i}>
                          <div className={searchStyles.moonBirds}>
                            <HexagonImage src={item.img} />
                          </div>

                          <p
                            className={searchStyles.name}
                            onClick={() => {
                              setSearchValue(item.name);
                              setSearchQuery("");
                            }}
                          >
                            {item.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.userProfile}>
              <p
                className={`${notifications.length !== 0 && styles.notification}
                ${showNotification && styles.notificationIcon}`}
              >
                {" "}
                <img
                  src={notification}
                  alt=""
                  className={`${styles.icon}
                 
                    `}
                  onClick={() => {
                    setShowNotification((prev) => !prev);
                    setShowProfileSetting(false);
                  }}
                />
              </p>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? [styles.icon, styles.iconActive].join(" ")
                    : styles.icon
                }
                to={"/messages/1"}
                onClick={() => {
                  setShowNotification(false);
                  setShowProfileSetting(false);
                }}
              >
                <p className={styles.messageIcon}>
                  {" "}
                  <img src={messenger} alt="" />
                </p>
              </NavLink>
              <div className={styles.userContainer}>
                <div className={styles.userContainer}>
                  <div className={styles.userImage}>
                    <HexagonImage src={user} />
                  </div>
                  {showProfileSetting ? (
                    <BsChevronUp
                      className={styles.arrow}
                      onClick={() => {
                        setShowProfileSetting((prev) => !prev);
                        setShowNotification(false);
                      }}
                    />
                  ) : (
                    <BsChevronDown
                      className={styles.arrow}
                      onClick={() => setShowProfileSetting((prev) => !prev)}
                    />
                  )}
                </div>
              </div>
              {showSidebar ? (
                <RiCloseLine
                  color="#fafafa"
                  className={styles.close}
                  onClick={() => setShowSidebar((prev) => !prev)}
                />
              ) : (
                <RxHamburgerMenu
                  className={styles.hamburger}
                  onClick={() => setShowSidebar((prev) => !prev)}
                />
              )}
            </div>
          </>
        )}
      </section>
      {showNotification && <Notifications data={notifications} />}{" "}
      {showProfileSetting && (
        <ProfileSetting setModal={setShowProfileSetting} />
      )}
      {!hideNavbar && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
    </>
  );
};

export default Header;
