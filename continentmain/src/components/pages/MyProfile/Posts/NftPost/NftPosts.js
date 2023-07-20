import React from "react";
import {
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  nft9,
  nft10,
  nft11,
  nft12,
} from "../../../../../images/image";
import styles from "./styles.module.css";
import SinglePost from "./SinglePost/SinglePost";

const NftPosts = () => {
  const posts = [
    { img: nft1, id: 1 },
    { img: nft2, id: 2 },
    { img: nft3, id: 3 },
    { img: nft4, id: 4 },
    { img: nft5, id: 5 },
    { img: nft6, id: 6 },
    { img: nft7, id: 7 },
    { img: nft8, id: 8 },
    { img: nft9, id: 9 },
    { img: nft10, id: 10 },
    { img: nft11, id: 11 },
    { img: nft12, id: 12 },
  ];
  return (
    <div className={styles.posts}>
      {posts.map((el, i) => (
        <SinglePost {...el} key={i} />
      ))}
    </div>
  );
};

export default NftPosts;
