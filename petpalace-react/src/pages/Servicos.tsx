import React from "react";
import { Link } from "react-router-dom";
import "../styles/Servicos.css";

const Servicos: React.FC = () => {
  return (
    <div className="servicos-page">
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
            <Link to="/servicos" className="active">Serviços</Link>
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/depoimentos">Depoimentos</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/reservar">Reservar Agora</Link>
            <Link to="/login" className="btn">Entrar</Link>
          </nav>
        </div>
      </header>

      {/* Serviços */}
      <section className="services-section">
        <h2>Nossos Serviços</h2>
        <p>Conheça os serviços exclusivos que oferecemos para o conforto do seu pet.</p>

        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-dog icon"></i>
            <h3>Hospedagem Premium</h3>
            <p>Ambientes confortáveis e seguros para seu pet se sentir em casa.</p>
          </div>

          <div className="service-card">
            <i className="fas fa-bone icon"></i>
            <h3>Alimentação Especial</h3>
            <p>Refeições balanceadas e adaptadas às necessidades do seu pet.</p>
          </div>

          <div className="service-card">
            <i className="fas fa-bath icon"></i>
            <h3>Banho & Tosa</h3>
            <p>Cuidados estéticos com todo carinho e atenção que seu pet merece.</p>
          </div>

          <div className="service-card">
            <i className="fas fa-heart icon"></i>
            <h3>Atividades Recreativas</h3>
            <p>Diversão garantida com brincadeiras e socialização supervisionada.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
