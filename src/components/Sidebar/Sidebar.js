import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  home,
  wallet,
  marketplace,
  explore,
  profile,
} from "../../images/image.js";
import { useDataContext } from "../Context.js";

import styles from "./styles.module.css";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const {
    setUploadingProgress,
    login,

    setShowConnectWalletModal,
  } = useDataContext();
  const navItems = [
    { icon: home, navItem: "Home", to: "/" },
    { icon: wallet, navItem: "Wallet", to: "/wallet" },
    { icon: marketplace, navItem: "Marketplace", to: "/marketplace" },
    { icon: explore, navItem: "Explore", to: "/explore" },
    { icon: profile, navItem: "Profile", to: "/profile" },
  ];
  const withoutLoginNavItems = [
    { icon: home, navItem: "Home", to: "/" },
    { icon: wallet, navItem: "Wallet", to: "/wallet" },
    { icon: marketplace, navItem: "Marketplace", to: "/marketplace" },
    { icon: explore, navItem: "Explore", to: "/explore" },
  ];
  return (
    <>
      <div
        className={` ${styles.sidebar} ${showSidebar && styles.showSidebar}`}
      >
        {login
          ? navItems.map((el, i) => (
              <NavLink
                to={el.to}
                className={({ isActive }) =>
                  isActive
                    ? [styles.navItemContainer, styles.navActive].join(" ")
                    : styles.navItemContainer
                }
                onClick={() => setShowSidebar(false)}
                key={i}
              >
                {" "}
                <img src={el.icon} alt={el.navItem} className={styles.icon} />
                <p className={styles.navItem}>{el.navItem}</p>
              </NavLink>
            ))
          : withoutLoginNavItems.map((el, i) => (
              <NavLink
                to={el.to}
                className={({ isActive }) =>
                  isActive
                    ? [styles.navItemContainer, styles.navActive].join(" ")
                    : styles.navItemContainer
                }
                onClick={() => setShowSidebar(false)}
                key={i}
              >
                {" "}
                <img src={el.icon} alt={el.navItem} className={styles.icon} />
                <p className={styles.navItem}>{el.navItem}</p>
              </NavLink>
            ))}
        {login && (
          <Link
            to="/createNewPost"
            className={styles.button}
            onClick={() => setUploadingProgress(40)}
          >
            New Post
          </Link>
        )}
        {!login && (
          <div
            className={[styles.button, styles.buttonWithNotLogin].join(" ")}
            onClick={() => setShowConnectWalletModal(true)}
          >
            New Post
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
