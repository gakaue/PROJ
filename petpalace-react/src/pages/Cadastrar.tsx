import React from "react";
import "../styles/Cadastrar.css";  // Corrigido o nome do CSS
import { Link } from "react-router-dom";

const Cadastrar: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="cadastrar-page">
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
            <Link to="/contato">Contato</Link>
            <Link to="/reservar">Reservar</Link>
            <Link to="/login" className="btn">Entrar</Link>
          </nav>
        </div>
      </header>

      {/* Formulário de Cadastro */}
      <section className="form-section">
        <div className="form-container">
          {/* Parte esquerda */}
          <div className="form-left">
            <h2>Faça o seu cadastro</h2>
            <p>Preencha os dados ao lado para efetivar o seu cadastro</p>
            <div className="contact">
              <i className="fas fa-phone-alt"></i>
              <span>(11) 98765-4321</span>
            </div>
            <div className="contact">
              <i className="fas fa-envelope"></i>
              <span>reservas@petpalace.com</span>
            </div>
          </div>

          {/* Parte direita */}
          <div className="form-right">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Seu Nome</label>
              <input type="text" id="name" required />

              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" required />

              <label htmlFor="senha">Senha</label>
              <input type="text" id="senha" required />

              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" required />

              <label htmlFor="address">Endereço</label>
              <input type="text" id="address" required />

              <label htmlFor="residenceType">Tipo de residência</label>
              <select id="residenceType" required>
                <option value="">Selecione</option>
                <option value="house">Casa</option>
                <option value="apartment">Apartamento</option>
                <option value="condominium">Condomínio</option>
              </select>



              <button type="submit" className="submit-btn">Cadastrar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cadastrar;
