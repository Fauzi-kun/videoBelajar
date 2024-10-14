import "./Style/card.css";
import rate from "../image/rate.png";

const card = ({ foto, avatar }) => {
  return (
    <div className="card">
      <div>
        <img src={foto} />
      </div>
      <div>
        <h6>Big 4 Auditor Financial Analyst</h6>
        <p>
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan kurikulum terbaik
        </p>
      </div>
      <div>
        <img src={avatar} />
        <div>
          <p>Jenna Ortega</p>
          <p>Senior Accountant</p>
        </div>
      </div>
      <img src={rate} />
    </div>
  );
};

export default card;
