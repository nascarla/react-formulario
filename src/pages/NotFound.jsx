import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 Not Found</h1>
      <p>Ops! Essa página não existe.</p>
      <Link to="/">Voltar para o Início</Link>
    </div>
  );
}
