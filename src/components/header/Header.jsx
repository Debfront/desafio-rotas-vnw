import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./header.module.scss";
import PrimaryButton from "../primary-button/PrimaryButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.headerTitle}>
        <img src="/coracao.png" />
        <Link className={s.linkHome} to="/" onClick={() => setOpen(false)}>
          Médicos & Dentistas
        </Link>
      </div>

      <button
        className={s.burger}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
      </button>

      <nav className={`${s.headerLinks} ${open ? s.open : ""}`}>
        <Link className={s.linkHome} to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <span onClick={() => setOpen(false)}>
          <PrimaryButton to="/voluntary" title="Seja voluntário" />
        </span>
      </nav>

      {open && <div className={s.backdrop} onClick={() => setOpen(false)} />}
    </header>
  );
};

export default Header;