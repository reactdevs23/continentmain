import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";

import MyProfile from "./components/pages/MyProfile/MyProfile";
import MyProfilePostDetails from "./components/pages/MyProfile/Posts/PostDetails/PostDetails";

import Message from "./components/pages/Messages/Message";

import Posts from "./components/pages/Home/Posts/Posts";
// import ConnectWallet from "./components/pages/ConnectWallet/ConnectWallet";

import PostDetails from "./components/pages/Home/Posts/PostDetails/PostDetails";
import EditProfile from "./components/pages/EditProfile/EditProfile";
import { useDataContext } from "./components/Context";
import CreateNewPost from "./components/pages/CreateNewPost/CreateNewPost";

import Wallet from "./components/pages/Wallet/Wallet";
import NftDetails from "./components/pages/Wallet/Posts/NftDetails/NftDetails";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import UserProfilePostDetails from "./components/pages/UserProfile/Posts/PostDetails/PostDetails";
import Explore from "./components/pages/Explore/Explore";
import FindFriends from "./components/pages/Explore/FindFriends/FindFriend";
import AllCollections from "./components/pages/Explore/Collections/AllCollections";
import NFTs from "./components/pages/Explore/Nfts/Nfts";
import Collection from "./components/pages/Explore/Collections/Collection/Collection";
import MarketPlace from "./components/pages/MarketPlace/MarketPlace";
function App() {
  const { posts } = useDataContext();
  const location = useLocation();
  const hideNavbar = location.pathname === "/connectWallet"; // here you have to use connectWallet page path for sidebar hiding if not wallet is connected

  return (
    <>
      <div className="container ">
        <Header hideNavbar={hideNavbar} />
        <div className={`${!hideNavbar && "rightSide"}`}>
          <Routes>
            {" "}
            {/* <Route path="/connectWallet" element={<ConnectWallet />} /> */}
            <Route path="/" element={<Posts data={posts} />}></Route>
            <Route path="/createNewPost" element={<CreateNewPost />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="nfts/:id" element={<NftDetails />}></Route>
            <Route path="/profile" element={<MyProfile />}></Route>
            <Route path="/editprofile" element={<EditProfile />}></Route>
            <Route path="/userProfile" element={<UserProfile />}></Route>
            <Route path="/messages/:id" element={<Message />} />
            <Route path="/explore" element={<Explore />}></Route>{" "}
            <Route
              path="/explore/findFriends"
              element={<FindFriends />}
            ></Route>
            <Route path="/explore/Nfts" element={<NFTs />}></Route>
            <Route
              path="/explore/collections"
              element={<AllCollections />}
            ></Route>
            <Route
              path="/explore/collections/collection"
              element={<Collection />}
            ></Route>
            <Route path="/marketplace" element={<MarketPlace />}></Route>
          </Routes>
        </div>
        <Routes>
          <Route path="post/:id" element={<PostDetails />}></Route>
          <Route
            path="/userProfile/postDetails"
            element={<UserProfilePostDetails />}
          ></Route>{" "}
          <Route
            path="/profile/postDetails"
            element={<MyProfilePostDetails />}
          ></Route>
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
