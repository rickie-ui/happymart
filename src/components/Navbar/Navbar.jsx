import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  // console.log(
  //   `to: ${to}, location.pathname: ${location.pathname}, isActive: ${isActive}`,
  // );

  return (
    <NavLink to={to} className={isActive ? "text-[#FFBD5A]" : ""}>
      {children}
    </NavLink>
  );
};

export default Navbar;
