import React, { useEffect, useState } from "react";

import Details from "./Details/Details";
import styles from "./styles.module.css";

const AllNft = ({ buttonActiveFunc, data }) => {
  const [showDetails, setShowDetails] = useState("");
  const [selectedNft, setSelectedNft] = useState(null);

  useEffect(() => {
    buttonActiveFunc(selectedNft);
  }, [selectedNft]);
  return (
    <>
      <div className={styles.allNft}>
        {data.map((el, index) => (
          <div
            className={`${styles.imageContainer} ${
              selectedNft === index + 1 && styles.active
            }`}
            key={index}
            onClick={() => {
              setSelectedNft(index + 1);
              setShowDetails(true);
            }}
          >
            <img src={el.img} alt="#" className={styles.image} />
          </div>
        ))}
      </div>

      <Details
        setShowDetails={setShowDetails}
        showDetails={showDetails}
        setSelectedNft={setSelectedNft}
      />
    </>
  );
};

export default AllNft;
