import s from "./cardVoluntary.module.scss";
const CardVoluntary = (props) => {
  return (
    <article className={s.article}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </article>
  );
};

export default CardVoluntary;