import React, { useState } from "react";
import "../styles/Cadastrar.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../service/api";

const Cadastrar: React.FC = () => {
  const navigate = useNavigate();

  // Estado inicial do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    tipoUsuario: "cliente", // valor padrão
  });

  // Atualiza os campos dinamicamente
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Envia os dados para o back-end
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 🔥 Garante que a URL vem do .env
      const response = await api.post("/usuarios/cadastrar",{nome: formData.nome , email: formData.email, senha: formData.senha, telefone: formData.telefone}) || "http://localhost:8080";


     
    
    } catch (error: any) {
      console.error("❌ Erro ao cadastrar:", error);
      alert("Erro ao conectar ao servidor. Verifique se o back-end está rodando em http://localhost:8080");
    }
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
            <Link to="/login" className="btn">
              Entrar
            </Link>
          </nav>
        </div>
      </header>

      {/* Formulário */}
      <section className="form-section">
        <div className="form-container">
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

          <div className="form-right">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome">Seu Nome</label>
              <input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />

              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />

              <label htmlFor="tipoUsuario">Tipo de Usuário</label>
              <select
                id="tipoUsuario"
                value={formData.tipoUsuario}
                onChange={handleChange}
              >
                <option value="cliente">Cliente</option>
                <option value="anfitriao">Anfitrião</option>
              </select>

              <button type="submit" className="submit-btn">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cadastrar;
