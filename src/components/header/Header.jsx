import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./header.module.scss";
import PrimaryButton from "../primary-button/PrimaryButton";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={s.header}>
   
      <div className={s.headerTitle}>
        <img src="/coracao.png" alt="Coração" />

        <Link className={s.linkHome} to="/" onClick={closeMenu}>
          Médicos & Dentistas
        </Link>
      </div>

    
      <button
        className={s.burger}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
      </button>

     
      <nav className={`${s.headerLinks} ${isMenuOpen ? s.open : ""}`}>
        <Link className={s.linkHome} to="/" onClick={closeMenu}>
          Home
        </Link>

        <span onClick={closeMenu}>
          <PrimaryButton to="/voluntary" title="Seja voluntário" />
        </span>
      </nav>

    
      {isMenuOpen && <div className={s.backdrop} onClick={closeMenu} />}
    </header>
  );
};

export default Header;
