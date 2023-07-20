import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { logo, moonbirds, user } from "../../../images/image";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./styles.module.css";
import searchStyles from "./search.module.css";

import HexagonImage from "../../Hexagon/Hexagon";

import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
import { useNavigate } from "react-router-dom";

const NotLoginHeader = ({ hideNavbar }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  // const [filteredCollection, setFilteredCollections] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  // const collections = [
  //   { img: moonbirds, name: "Moonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Boonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Moonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Boonbirds", items: 10000, price: 7.62 },
  //   { img: moonbirds, name: "Foonbirds", items: 10000, price: 7.62 },
  // ];
  const userList = [
    { id: 1, img: moonbirds, name: "juanbautista.eth" },
    { id: 2, img: moonbirds, name: "Jane" },
    { id: 3, img: moonbirds, name: "Bob" },
  ];
  const filterData = (query) => {
    const filteredUser = userList.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredUser(filteredUser);
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

                    if (!e.target.value) {
                      navigate(-1);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      setSearchQuery("");
                      navigate(`/users/${searchQuery}`);
                    }
                  }}
                />
                {searchQuery && (
                  <div className={searchStyles.searchingContainer}>
                    {filteredUser.map((item, i) => (
                      <div className={searchStyles.details}>
                        <div
                          className={`${searchStyles.imgAndName} `}
                          key={i}
                          onClick={() => {
                            setSearchValue(item.name);
                            setSearchQuery("");
                            navigate(`/users/${item.name}`);
                          }}
                        >
                          <div className={searchStyles.moonBirds}>
                            <HexagonImage src={user.img} />
                          </div>

                          <p className={searchStyles.name}>{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.connectWalletButtonContainer}>
              <ConnectWalletButton />{" "}
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

      {!hideNavbar && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
    </>
  );
};

export default NotLoginHeader;
