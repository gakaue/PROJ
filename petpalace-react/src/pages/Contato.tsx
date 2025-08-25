import React from "react";
import "../styles/Contato.css";
import { Link } from "react-router-dom";

const Contato: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="contato-page">
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
      <Link to="/depoimentos">Depoimentos</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/reservar">Reservar Agora</Link>
      <Link to="/login" className="btn">Entrar</Link>
    </nav>
  </div>
</header>

      {/* Sessão Contato */}
      <section className="contato-section">
        <h2>Entre em Contato</h2>
        <p className="intro">Estamos prontos para atender você e seu pet ❤️</p>

        <div className="contato-container">
          {/* Informações */}
          <div className="contato-info">
            <h3>Informações de Contato</h3>
            <p><i className="fas fa-phone-alt"></i> (11) 98765-4321</p>
            <p><i className="fas fa-envelope"></i> contato@petpalace.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Rua dos Pets, 123 - São Paulo/SP</p>
          </div>

          {/* Formulário */}
          <div className="contato-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" required />

              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" required />

              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" rows={5} required></textarea>

              <button type="submit" className="submit-btn">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
