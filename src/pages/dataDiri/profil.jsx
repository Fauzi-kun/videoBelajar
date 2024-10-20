import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStoreData from "../../store/store";
import profile from "../../image/profil.png";
import "./profil.css";

const profil = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");

  const { currentUser, updateData, logOut } = useStoreData();

  const buttonUpdate = () => {
    const updatedData = { name, email, noHp };
    if (name !== "" && email !== "" && noHp !== "") {
      updateData(updatedData);
      setName("");
      setEmail("");
      setNoHp("");
    } else {
      alert("Tidak boleh kosong");
    }
  };

  const buttonLogOut = () => {
    navigate("../../../");
    logOut();
  };

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
      </div>
    </div>
  );
};

export default profil;
