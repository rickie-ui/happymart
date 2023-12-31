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
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Orders from "./pages/Orders";
import Voucher from "./pages/Voucher";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
const App = () => {
  let windowWidth = WindowWidth();
  return (
    <>
      {windowWidth < "640" ? (
        <div className="min-h-screen bg-[#E7ECF2] antialiased">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="favorite" element={<Favorite />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<Orders />} />
              <Route path="vouchers" element={<Voucher />} />
              <Route path="payments" element={<Payment />} />
            </Route>
            <Route path="/details/:id" element={<Details/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <Maintenance />
      )}
    </>
  );
};

export default App;
