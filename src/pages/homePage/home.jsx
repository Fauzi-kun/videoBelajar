import Header from "./header";
import Card from "../../components/card.jsx";
import Banner from "./banner.jsx";

import foto1 from "../../image/foto1.png";
import foto2 from "../../image/foto2.png";
import foto3 from "../../image/foto3.png";
import foto4 from "../../image/foto4.png";
import foto5 from "../../image/foto5.png";
import foto6 from "../../image/foto6.png";
import foto7 from "../../image/foto7.png";
import foto8 from "../../image/foto8.png";
import foto9 from "../../image/foto9.png";

import av1 from "../../image/av1.png";
import av2 from "../../image/av2.png";
import av3 from "../../image/av3.png";
import av4 from "../../image/av4.png";
import av5 from "../../image/av5.png";
import av6 from "../../image/av6.png";
import av7 from "../../image/av7.png";
import av8 from "../../image/av8.png";
import av9 from "../../image/av9.png";

import "./home.css";

const Index = () => {
  return (
    <div>
      <div>
        <Header />

        <div>
          <h3>Koleksi Video Pembelajaran Unggulan</h3>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>
        <div>
          <p className="inline">Semua Kelas</p>
          <p className="inline">Pemasaran</p>
          <p className="inline">Desain</p>
          <p className="inline">Pengembangan Diri</p>
          <p className="inline">Bisnis</p>
        </div>
        <Card foto={foto1} avatar={av1} />
        <Card foto={foto2} avatar={av2} />
        <Card foto={foto3} avatar={av3} />
        <Card foto={foto4} avatar={av4} />
        <Card foto={foto5} avatar={av5} />
        <Card foto={foto6} avatar={av6} />
        <Card foto={foto7} avatar={av7} />
        <Card foto={foto8} avatar={av8} />
        <Card foto={foto9} avatar={av9} />
        <Banner />
      </div>
    </div>
  );
};

export default Index;
