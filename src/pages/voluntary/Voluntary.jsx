import CardVoluntary from "../../components/card-voluntary/CardVoluntary";
import s from "./voluntary.module.scss";

const Voluntary = () => {
  return (
    <>
      <section className={s.voluntaryPage}>
        <h2>Seja Voluntário</h2>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        <div className={s.cards}>
          <CardVoluntary
            title="Impacto Direto"
            content="Sua dedicação salva vidas e transforma comunidades"
          />
          <CardVoluntary
            title="Crescimento Pessoal"
            content="Desenvolva habilidades e cresça profissionalmente"
          />
          <CardVoluntary
            title="Comunidade"
            content="Faça parte de uma rede de profissionais comprometidos"
          />
        </div>
      </section>
      <section className={s.formularioVoluntario}>
        <div className={s.formulario}>
          <h3>Inscrição para Voluntários</h3>

          <form action="" className={s.form}>
            <fieldset>
              <legend>Dados Pessoais</legend>
              <div className={s.nomeEmail}>
                <input
                  type="text"
                  placeholder="Seu Nome *"
                  required
                  className={s.nome}
                />
                <input type="email" placeholder="Seu Email *" required />
              </div>
              <input type="tel" placeholder="Seu Telefone *" required />
            </fieldset>

            <fieldset className={s.mensagem}>
              <legend>Mensagem Adicional</legend>
              <textarea placeholder="Conte-nos porque você quer ser voluntario..."></textarea>
            </fieldset>

            <fieldset className={s.button}>
              <legend>Entraremos em contato para mais informações</legend>
              <button type="submit">Enviar Inscrição</button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default Voluntary;