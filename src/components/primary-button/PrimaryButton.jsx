import { Link } from "react-router-dom";
import s from "./primaryButton.module.scss";

const PrimaryButton = ({ to, title }) => {
  return (
    <Link className={s.primaryButton} to={to}>
      {title}
    </Link>
  );
};

export default PrimaryButton;