import React, { useEffect, useState } from "react";

import Details from "./Details/Details";
import styles from "./styles.module.css";

const AllNft = ({ buttonActiveFunc, data }) => {
  const [showDetails, setShowDetails] = useState("");

  useEffect(() => {
    buttonActiveFunc(showDetails);
  }, [showDetails]);
  return (
    <>
      <div className={styles.allNft}>
        {data.map((el, index) => (
          <div
            className={`${styles.imageContainer} ${
              showDetails === index + 1 && styles.active
            }`}
            key={index}
            onClick={() => {
              setShowDetails(index + 1);
            }}
          >
            <img src={el.img} alt="#" className={styles.image} />
          </div>
        ))}
      </div>

      <Details setShowDetails={setShowDetails} showDetails={showDetails} />
    </>
  );
};

export default AllNft;
