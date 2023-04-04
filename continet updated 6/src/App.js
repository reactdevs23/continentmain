import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import MyProfile from "./components/pages/MyProfile/MyProfile";

import Message from "./components/pages/Messages/Message";

import Posts from "./components/pages/Home/Posts/Posts";

import PostDetails from "./components/pages/Home/Posts/PostDetails/PostDetails";
import EditProfile from "./components/pages/EditProfile/EditProfile";
import { useDataContext } from "./components/Context";
import CreateNewPost from "./components/pages/CreateNewPost/CreateNewPost";

import Wallet from "./components/pages/Wallet/Wallet";
import NftDetails from "./components/pages/Wallet/Posts/NftDetails/NftDetails";
import UserProfile from "./components/pages/UserProfile/UserProfile";
function App() {
  const { posts } = useDataContext();
  return (
    <>
      <div className="container ">
        <Header />
        <div className="rightSide">
          <Routes>
            <Route path="/" element={<Posts data={posts} />}></Route>
            <Route path="/createNewPost" element={<CreateNewPost />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="nfts/:id" element={<NftDetails />}></Route>
            <Route path="/profile" element={<MyProfile />}></Route>
            <Route path="/editprofile" element={<EditProfile />}></Route>
            {/* <Route path="/userProfile" element={<UserProfile />}></Route>
             */}
            <Route path="/messages/:id" element={<Message />} />
          </Routes>
        </div>
        <Routes>
          <Route path="post/:id" element={<PostDetails data={posts} />}></Route>
        </Routes>
        {/* <Header />

      <Routes>
        <Route path="/" element={<ConnectWallet />} />{" "}
        <Route path="/setupProfile" element={<SetUpYourProfile />}></Route>
        <Route
          path="/selectProfilePicture"
          element={<SelectProfilePicture />}
        ></Route>
        <Route path="/shreNft" element={<ShareNft />}></Route>
      </Routes> */}
      </div>{" "}
    </>
  );
}

export default App;
