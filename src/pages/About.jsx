import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="home-title">Sobre o Projeto</h1>
      <p className="home-subtitle">
        Este sistema de avaliação foi desenvolvido como parte de um projeto
        acadêmico para praticar o desenvolvimento de interfaces modernas com
        React.
      </p>

      <div className="about-card">
        <h3>Tecnologias Utilizadas:</h3>
        <ul className="tech-list">
          <li>
            <strong>React:</strong> Para a construção dos componentes.
          </li>
          <li>
            <strong>React Router:</strong> Para a navegação entre as páginas.
          </li>
          <li>
            <strong>Hooks (useState):</strong> Para o gerenciamento dos dados do
            formulário.
          </li>
          <li>
            <strong>Formspree:</strong> Para o recebimento real dos dados por
            e-mail.
          </li>
        </ul>
      </div>

      <Link to="/">
        <button className="btn-start" style={{ marginTop: "30px" }}>
          Voltar ao Início
        </button>
      </Link>
    </div>
  );
}
