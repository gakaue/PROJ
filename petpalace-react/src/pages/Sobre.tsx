import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sobre.css";


const Sobre: React.FC = () => {
  return (
    <div className="sobre-page">
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
            <Link to="/sobre" className="active">Sobre Nós</Link>
            <Link to="/depoimentos">Depoimentos</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/reservar">Reservar Agora</Link>
            <Link to="/login" className="btn">Entrar</Link>
          </nav>
        </div>
      </header>
      {/* Seção Sobre */}
      <section className="sobre-section">
        <div className="sobre-container">
          <div className="sobre-texto">
            <h2>Sobre Nós</h2>
            <p>
              O <strong>PetPalace</strong> nasceu da paixão pelos animais e do desejo
              de oferecer a eles um espaço confortável, seguro e cheio de carinho.
            </p>
            <p>
              Nossa missão é proporcionar momentos únicos para os pets e tranquilidade
              para seus donos, sabendo que seus companheiros estão em boas mãos.
            </p>
            <p>
              Contamos com uma equipe especializada e instalações modernas que fazem
              do PetPalace o lugar ideal para seu pet.
            </p>
          </div>
          <div className="sobre-imagem">
            <img src="../assets/img/spa.jpg" alt="Pet em hospedagem confortável" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
