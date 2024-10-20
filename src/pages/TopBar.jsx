import { Outlet, useNavigate } from "react-router-dom";

import logo from "../image/Logo.png";
import profil from "../image/profil.png";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <img src={logo} />
        <img
          src={profil}
          onClick={() => {
            navigate("/home/dataDiri/profil");
          }}
          style={{ position: "absolute", right: "5%" }}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default TopBar;
