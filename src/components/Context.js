import { useState, useContext, createContext } from "react";
import { postImage } from "../images/image";
const StateData = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(false);
  const [userName, setUserName] = useState("");
  const [existingUserName, setExistingUserName] = useState("juanbautista.eth");
  const [cancelUploading, setCancelUploading] = useState(true);
  const [uploadingProgress, setUploadingProgress] = useState(40);
  const posts = [
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      author: true,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",

      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      author: true,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",

      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      author: true,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",

      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      author: true,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",

      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      author: true,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",

      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
    },
    {
      id: 7789,
      name: "Moonbird",
      userName: "juanbautista.eth",
      address: "0xb4...3bbb",
      postImage: postImage,
      likes: 3000,
      comments: 200,

      postText: "Look at my new NFT!",
      time: "4h",
      ethAmount: 0.038,
    },
  ];
  const numberFormating = (number) => {
    if (number >= 1000 && number % 1000 === 0) {
      number = (number / 1000).toFixed(0) + "k";
    } else if (number >= 1000 && number % 1000 !== 0) {
      number = (number / 1000).toFixed(1) + "k";
    }
    return number;
  };
  return (
    <StateData.Provider
      value={{
        userName,
        setUserName,
        existingUserName,
        setExistingUserName,
        selectedProfilePicture,
        setSelectedProfilePicture,
        numberFormating,
        posts,
        cancelUploading,
        setCancelUploading,
        uploadingProgress,
        setUploadingProgress,
      }}
    >
      {children}
    </StateData.Provider>
  );
};
export const useDataContext = () => useContext(StateData);
