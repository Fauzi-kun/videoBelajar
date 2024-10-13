import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import DescForm from "../../components/DescForm";
import LupaPass from "../../components/LupaPass";

const index = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <DescForm
        propUp="Pendaftaran Akun"
        propDown="Yuk, daftarkan akunmu sekarang juga!"
      />
      <form action="#">
        <p>
          Nama Lengkap <span>*</span>
        </p>
        <input type="text" />
        <p>
          E-Mail <span>*</span>
        </p>
        <input type="text" />
        <p>
          No. Hp <span>*</span>
        </p>
        <input type="number" />
        <p>
          Kata Sandi <span>*</span>
        </p>
        <input type="password" />
        <p>
          Konfirmasi Kata Sandi <span>*</span>
        </p>
        <input type="password" />
      </form>
      <LupaPass />
      <Button
        propUp="Daftar"
        propDown="Masuk"
        onClickUp={() => {
          navigate("../");
        }}
        onClickDown={() => {
          navigate("../");
        }}
      />
    </div>
  );
};

export default index;
