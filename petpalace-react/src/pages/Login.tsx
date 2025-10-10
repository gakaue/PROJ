import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../service/api";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  // Função de envio com integração real à API (com CORS habilitado no back-end)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      
      const response = await api.post("/usuarios/login", { 
        email, 
        password 
      });

      const data = response.data; 

  
      localStorage.setItem("pp_token", data.token); 
      setMsg("Login bem-sucedido");
    
    } catch (error: any) {
      
      console.error("Erro ao realizar login:", error);
      
      
      const serverErrorMsg = error.response?.data?.error || "Erro ao conectar ao servidor. Verifique o email/senha";
      
      setMsg(serverErrorMsg);
    }
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
            <Link to="/contato">Contato</Link>
            <Link to="/reservar">Reservar</Link>
            <Link to="/login" className="btn">
              Entrar
            </Link>
          </nav>
        </div>
      </header>

      {/* Seção de login */}
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
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="submit-btn">
                Entrar
              </button>

              {/* Outras opções de login */}
              <button type="button" className="btn-google">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Google"
                />
                Entrar com Google
              </button>

              <div className="outros-logins">
                <button type="button" className="btn-facebook">
                  Entrar com Facebook
                </button>
                <button type="button" className="btn-github">
                  Entrar com GitHub
                </button>
              </div>

              <p>
                Não tem uma conta?{" "}
                <Link to="/cadastrar" className="btn-cadastrar">
                  Criar Conta
                </Link>
              </p>
            </form>

            {/* Mensagem de status */}
            {msg && <div className="login-msg">{msg}</div>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
