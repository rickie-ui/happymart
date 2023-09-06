import { Routes, Route } from "react-router-dom";
import Maintenance from "./pages/Maintenance";
import Landing from "./pages/Landing";
import WindowWidth from "./utils/Window";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
const App = () => {
  let windowWidth = WindowWidth();
  return (
    <>
      {windowWidth < "640" ? (
        <div className="min-h-screen bg-[#E7ECF2] antialiased">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="favorite" element={<Favorite />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <Maintenance />
      )}
    </>
  );
};

export default App;
