import React from "react";
import { Link } from "react-router-dom";
import "../styles/Depoimentos.css";

const Depoimentos: React.FC = () => {
  return (
    <div className="depoimentos-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <i className="fas fa-paw"></i>
            <Link to="/" className="logo-text">
              Pet<span className="highlight">Palace</span>
            </Link>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/depoimentos" className="active">Depoimentos</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/reservar">Reservar Agora</Link>
            <Link to="/login" className="btn">Entrar</Link>
          </nav>
        </div>
      </header>

      {/* Sessão Depoimentos */}
      <section className="depoimentos-section">
        <h2>O que nossos clientes dizem</h2>
        <p className="intro">
          Confira alguns depoimentos de quem já confiou no PetPalace.
        </p>

        <div className="depoimentos-grid">
          <div className="depoimento-card">
            <p>
              “O PetPalace foi incrível com meu cachorro! Ele voltou feliz e bem cuidado.
              Recomendo de olhos fechados.”
            </p>
            <h4>- Ana Souza</h4>
          </div>

          <div className="depoimento-card">
            <p>
              “Ambiente limpo, equipe atenciosa e muito amor pelos animais. 
              Meu gato se adaptou super bem!”
            </p>
            <h4>- João Pereira</h4>
          </div>

          <div className="depoimento-card">
            <p>
              “A melhor experiência que já tive com hotéis para pets.
              Sem dúvida voltarei a deixar meu pet aqui.”
            </p>
            <h4>- Mariana Lima</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Depoimentos;
