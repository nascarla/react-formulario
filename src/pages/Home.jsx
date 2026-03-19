import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-content">
      <h1 className="home-title">Sua opinião importa!</h1>
      <p className="home-subtitle">
        Ajude-nos a entender como melhorar nosso serviço respondendo a esta
        rápida pesquisa.
      </p>

      <Link to="/formulario">
        <button className="btn-start" style={{ marginTop: "30px" }}>
          Responder Agora
        </button>
      </Link>
    </div>
  );
}
