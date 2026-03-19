import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Importando suas páginas
import Home from "./pages/Home";
import About from "./pages/About";
import FormPage from "./pages/FormPage";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Menu de navegação que aparecerá em todas as páginas */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">
            Início
          </Link>
          <Link to="/sobre" className="nav-link">
            Sobre
          </Link>
        </div>
      </nav>

      {/* Container que usa seu CSS para centralizar o conteúdo */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/formulario" element={<FormPage />} />
          {/* Rota para caminhos errados */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
