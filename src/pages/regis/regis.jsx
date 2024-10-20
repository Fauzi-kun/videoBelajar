import DescForm from "../../components/DescForm";

import DataManage from "../../store/DataManagement";

const index = () => {
  return (
    <div className="container">
      <DescForm
        propUp="Pendaftaran Akun"
        propDown="Yuk, daftarkan akunmu sekarang juga!"
      />
      <DataManage />
    </div>
  );
};

export default index;
