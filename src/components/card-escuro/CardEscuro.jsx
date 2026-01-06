import s from "./cardEscuro.module.scss";

const CardEscuro = ({ title, content }) => {
  return (
    <article className={s.cardBlack}>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

export default CardEscuro;