import "./Style/Button.css";
import GoogleIcon from "../image/google-icon.png";

const Button = ({ propUp, propDown, onClickUp, onClickDown }) => (
  <div>
    <button className="btnGreen" onClick={onClickUp}>
      {propUp}
    </button>
    <button className="btnWhite" onClick={onClickDown}>
      {propDown}
    </button>
    <p>atau</p>
    <button className="btnSSO">
      <img src={GoogleIcon} /> Masuk dengan Google
    </button>
  </div>
);

export default Button;
