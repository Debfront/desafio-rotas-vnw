import { Link } from "react-router-dom";
import s from "./header.module.scss";
import PrimaryButton from "../primary-button/PrimaryButton";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerTitle}>
        <img src="/public/coracao.png" />
        <Link className={s.linkHome} to="/">
          Médicos & Dentistas
        </Link>
      </div>
      <nav className={s.headerLinks}>
        <Link className={s.linkHome} to="/">
          Home
        </Link>
        <PrimaryButton to="/voluntary" title="Seja voluntário" />
      </nav>
    </header>
  );
};

export default Header;