import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login realizado com sucesso!");
  };

  return (
    <div className="login-page">
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
            <Link to="/login" className="btn">
              Entrar
            </Link>
          </nav>
        </div>
      </header>

      {/* Login Section */}
      <section className="form-section">
        <div className="form-container">
          {/* Parte esquerda */}
          <div className="form-left">
            <h2>Bem-vindo de volta!</h2>
            <p>Faça login para continuar e gerenciar suas reservas.</p>
            <div className="contact">
              <i className="fas fa-phone-alt"></i>
              <span>(11) 98765-4321</span>
            </div>
            <div className="contact">
              <i className="fas fa-envelope"></i>
              <span>contato@petpalace.com</span>
            </div>
          </div>

          {/* Parte direita */}
          <div className="form-right">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Email" required />

              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Senha" required />

              {/* Botão login padrão */}
              <button type="submit" className="submit-btn">
                Entrar
              </button>

              {/* Botão login com Google */}
              <button type="button" className="btn-google">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Google"
                />
                Entrar com Google
              </button>

              {/* Outras opções de login */}
              <div className="outros-logins">
                <button type="button" className="btn-facebook">Entrar com Facebook</button>
                <button type="button" className="btn-github">Entrar com GitHub</button>
              </div>

              {/* Link criar conta */}
              <p>
                Não tem uma conta?{" "}
                <Link to="/cadastrar" className="btn-cadastrar">
                  Criar Conta
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
