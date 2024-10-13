import "./Style/DescForm.css";

const DescForm = ({ propUp, propDown }) => {
  return (
    <div>
      <h3>{propUp}</h3>
      <p>{propDown}</p>
    </div>
  );
};

export default DescForm;
