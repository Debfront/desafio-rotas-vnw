import s from "./cardBlack.module.scss";

const CardBlack = ({ title, content }) => {
  return (
    <article className={s.cardBlack}>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

export default CardBlack;