import { useNavigate } from "react-router-dom";

import DescForm from "../../components/DescForm";
import Button from "../../components/Button";
import LupaPass from "../../components/LupaPass";

import "../../style/container.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <DescForm
        propUp="Masuk ke Akun"
        propDown="Yuk, lanjutin belajarmu di videobelajar."
      />
      <form action="#">
        <p>
          E-Mail <span>*</span>
        </p>
        <input type="text" />
        <p>
          Kata Sandi <span>*</span>
        </p>
        <input type="password" />
      </form>
      <LupaPass />
      <Button
        propUp="Masuk"
        propDown="Daftar"
        onClickUp={() => {
          navigate("/home");
        }}
        onClickDown={() => {
          navigate("/regis");
        }}
      />
    </div>
  );
};

export default Login;
