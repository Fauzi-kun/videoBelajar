import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../../services/api/api";

import useStoreData from "../../store/store";
import DescForm from "../../components/DescForm";
import Button from "../../components/Button";
import LupaPass from "../../components/LupaPass";

import "../../style/container.css";

const Login = () => {
  const navigate = useNavigate();

  const { addUser } = useStoreData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getData();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  const user = data.find(
    (user) => user.email === email && user.password === password
  );

  const submitLogin = () => {
    if (typeof user !== "object") {
      alert("Email atau Password salah");
    } else {
      navigate("/home");
      addUser(user);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  console.log(user);

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
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
          Kata Sandi <span>*</span>
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <LupaPass />
      <Button
        propUp="Masuk"
        propDown="Daftar"
        onClickUp={() => {
          submitLogin();
        }}
        onClickDown={() => {
          navigate("/regis");
        }}
      />
    </div>
  );
};

export default Login;
