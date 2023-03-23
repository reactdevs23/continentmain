import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  home,
  wallet,
  marketplace,
  explore,
  profile,
} from "../../images/image.js";
import styles from "./styles.module.css";

const Sidebar = ({ showSidebar }) => {
  const navItems = [
    { icon: home, navItem: "Home", to: "/" },
    { icon: wallet, navItem: "Wallet", to: "/wallet" },
    { icon: marketplace, navItem: "Marketplace", to: "/marketplace" },
    { icon: explore, navItem: "Explore", to: "/explore" },
    { icon: profile, navItem: "Profile", to: "/profile" },
  ];
  return (
    <div className={` ${styles.sidebar} ${showSidebar && styles.showSidebar}`}>
      {navItems.map((el, i) => (
        <NavLink
          to={el.to}
          className={({ isActive }) =>
            isActive
              ? [styles.navItemContainer, styles.navActive].join(" ")
              : styles.navItemContainer
          }
          key={i}
        >
          {" "}
          <img src={el.icon} alt={el.name} className={styles.icon} />
          <p className={styles.navItem}>{el.navItem}</p>
        </NavLink>
      ))}
      <Link to="/createNewPost" className={styles.button}>
        New Post
      </Link>
    </div>
  );
};

export default Sidebar;
