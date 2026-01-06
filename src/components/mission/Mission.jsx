import CardWhite from "../card-white/CardWhite";
import s from "./mission.module.scss";

const Mission = () => {
  return (
    <section className={s.missionSection}>
      <h2>Nossa missão</h2>

      <p>Transformar vidas através do acesso universal a saúde de qualidade</p>

      <div className={s.missionCardSection}>
        <CardWhite
          title="Acesso Equitativo"
          content="Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."
        />
        <CardWhite
          title="Comunidade Forte"
          content="Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."
        />
        <CardWhite
          title="Bem-estar Total"
          content="Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."
        />
      </div>
    </section>
  );
};

export default Mission;