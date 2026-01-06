import { Link } from "react-router-dom";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContactContainer}>
        <div className={s.footerContactContainerMain}>
          <div className={s.headerTitle}>
            <img src="/coracao.png" />
            <Link className={s.linkHome} to="/">
              Médicos & Dentistas
            </Link>
          </div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={s.footerContactContainerSecond}>
          <h3>Contato</h3>
          <div className={s.footerContactContainerContacts}>
            <img src="/email.png" alt="icone de email" />
            <p>contato@medico-dentista.org</p>
          </div>
          <div className={s.footerContactContainerContacts}>
            <img src="/phone.png" alt="icone de telefone" />
            <p>(11) 3000-0000</p>
          </div>
          <div className={s.footerContactContainerContacts}>
            <img src="/pin-map.png" alt="icone de pin map" />
            <p>São Paulo, Brasil</p>
          </div>
        </div>
        <div className={s.footerContactContainerSecond}>
          <h3>Redes sociais</h3>
          <a target="#">Facebook</a>
          <a target="#">Instagram</a>
          <a target="#">LinkedIn</a>
        </div>
      </div>
      <p className={s.footerCopyright}>
        © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;