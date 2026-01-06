import CardBlack from "../card-black/CardBlack";
import s from "./impact.module.scss";

const Impact = () => {
  return (
    <section className={s.impactSection}>
      <h2>Nosso Impacto</h2>
      <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
      <div className={s.impactCardSection}>
        <CardBlack title="2,500+" content="Pessoas Atendidas" />
        <CardBlack title="150+" content="Profissionais Voluntários" />
        <CardBlack title="98%" content="Satisfação dos Pacientes" />
        <CardBlack title="5+" content="Anos de Dedicação" />
      </div>
    </section>
  );
};

export default Impact;