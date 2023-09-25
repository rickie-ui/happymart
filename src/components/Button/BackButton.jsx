import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const BackButton = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleNavigate}>
      <IoIosArrowBack />
    </button>
  );
};

export default BackButton;
