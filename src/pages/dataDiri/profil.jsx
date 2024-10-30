import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/zustand/store.js";
import profile from "../../image/profil.png";
import "./profil.css";

const profil = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");

  const { data, currentUser, editUser, loginUser, deleteUser } = useStore();

  const buttonUpdate = () => {
    const updatedData = {
      name: name,
      email: email,
      noHp: noHp,
      id: currentUser.id,
      password: currentUser.password,
    };
    if (name !== "" && email !== "" && noHp !== "") {
      editUser(updatedData, currentUser.id);

      setName("");
      setEmail("");
      setNoHp("");
    } else {
      alert("Tidak boleh kosong");
    }
  };

  const buttonLogOut = () => {
    navigate("../../../");
    loginUser({});
  };

  const buttonDelete = () => {
    deleteUser(currentUser.id);
    navigate("../../../");
  };

  console.log(data);
  console.log(currentUser);

  return (
    <div className="profil">
      <div>
        <div>
          <img src={profile} />
        </div>
        <div>
          <p>{currentUser.name}</p>
          <p>{currentUser.email}</p>
          <p style={{ color: "red" }}>Ganti Foto Profil</p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder={currentUser.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={currentUser.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder={currentUser.noHp}
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
        />
      </div>
      <div>
        <button onClick={buttonUpdate}>Simpan</button>
        <button onClick={buttonLogOut}>LogOut</button>
        <button onClick={buttonDelete}>Hapus Akun</button>
      </div>
    </div>
  );
};

export default profil;
