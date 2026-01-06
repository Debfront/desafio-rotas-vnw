import s from "./cardWhite.module.scss";

const CardWhite = ({ title, content }) => {
  return (
    <article className={s.cardWhite}>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

export default CardWhite;