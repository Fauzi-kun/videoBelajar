import { Outlet } from "react-router-dom";

import "./profil.css";

const pilihan = () => {
  return (
    <div className="pilihan">
      <div>
        <div>
          <h5>Ubah Profil</h5>
          <p>Ubah data diri Anda</p>
        </div>
        <div>
          <button>Profil Saya</button>
          <button>Kelas Saya</button>
          <button>Pesanan Saya</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default pilihan;
