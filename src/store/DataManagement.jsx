import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LupaPass from "../components/LupaPass";
import { postData } from "../services/api/api.js";
import useStore from "./zustand/store.js";

const DataManage = () => {
  const { addData } = useStore();
  const [newData, setNewData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const navigate = useNavigate();

  const postNewData = async () => {
    try {
      const newsData = {
        name,
        email,
        noHp,
        password,
      };
      const response = await postData(newsData);
      setNewData([...newData, response]);
      setName("");
      setEmail("");
      setNoHp("");
      setPassword("");
      setConPassword("");
    } catch (err) {
      console.log(err);
    }
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
        postNewData();
        alert("Silahkan login");
      } else {
        alert("Konfirmasi password harus sama");
      }
    } else {
      alert("Mohon di isi semua");
    }
  };
  useEffect(() => {
    addData();
  }, [addData]);

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
