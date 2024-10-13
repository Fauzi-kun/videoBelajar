import { Outlet } from "react-router-dom";
import logo from "../image/Logo.png";

const TopBar = () => {
  return (
    <div>
      <img src={logo} />
      <Outlet />
    </div>
  );
};

export default TopBar;
