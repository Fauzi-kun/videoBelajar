import { useState } from "react";
import useStoreData from "./store.js";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LupaPass from "../components/LupaPass";

const DataManage = () => {
  const navigate = useNavigate();

  const addUser = useStoreData((state) => state.addUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const submitAddUser = () => {
    const newUser = { name, email, noHp, password };
    addUser(newUser);
    setName("");
    setEmail("");
    setNoHp("");
    setPassword("");
    setConPassword("");
  };
  const daftar = () => {
    if (
      name !== "" &&
      email !== "" &&
      noHp !== "" &&
      password !== "" &&
      conPassword !== ""
    ) {
      if (password === conPassword) {
        submitAddUser();
        alert("Silahkan login");
      } else {
        alert("Konfirmasi password harus sama");
      }
    } else {
      alert("Mohon di isi semua");
    }
  };

  return (
    <div>
      <form action="#">
        <p>
          Nama Lengkap <span>*</span>
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>
          E-Mail <span>*</span>
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
          No. Hp <span>*</span>
        </p>
        <input
          type="number"
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
        />
        <p>
          Kata Sandi <span>*</span>
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          Konfirmasi Kata Sandi <span>*</span>
        </p>
        <input
          type="password"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
        />
      </form>
      <LupaPass />
      <Button
        propUp="Daftar"
        propDown="Masuk"
        onClickUp={() => {
          daftar();
        }}
        onClickDown={() => {
          navigate("../");
        }}
      />
    </div>
  );
};

export default DataManage;
