import AuthButton from "../AuthButton/AuthButton";
import "./Banner.css";
const Banner = ({ title }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <AuthButton />
    </div>
  );
};

export default Banner;
