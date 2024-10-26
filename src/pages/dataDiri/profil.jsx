import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStoreData from "../../store/store";
import profile from "../../image/profil.png";
import "./profil.css";

const profil = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");

  const { users, addUser, logOut } = useStoreData();

  const buttonUpdate = async () => {
    const updatedData = { name, email, noHp };
    if (name !== "" && email !== "" && noHp !== "") {
      addUser(updatedData);
      setName("");
      setEmail("");
      setNoHp("");
      console.log(response);
    } else {
      alert("Tidak boleh kosong");
    }
  };

  const buttonLogOut = () => {
    navigate("../../../");
    logOut();
  };

  console.log(users[0]);

  return (
    <div className="profil">
      <div>
        <div>
          <img src={profile} />
        </div>
        <div>
          <p>{users[0].name}</p>
          <p>{users[0].email}</p>
          <p style={{ color: "red" }}>Ganti Foto Profil</p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder={users[0].name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={users[0].email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder={users[0].noHp}
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
        />
      </div>
      <div>
        <button onClick={buttonUpdate}>Simpan</button>
        <button onClick={buttonLogOut}>LogOut</button>
        <button>Hapus Akun</button>
      </div>
    </div>
  );
};

export default profil;
