import React, { useEffect, useRef, useState, FormEvent } from "react";
import "../styles/Reservar.css";
import { Link } from "react-router-dom";

interface Hotel {
  nome: string;
  coords: [number, number];
  cidade: string;
  img: string;
}

interface Cidade {
  nome: string;
  lat: number;
  lon: number;
}

const Reservar: React.FC = () => {
  const [showOtherPetType, setShowOtherPetType] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [hoteis, setHoteis] = useState<Hotel[]>([]);
  const [hotelSelecionado, setHotelSelecionado] = useState<Hotel | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const otherPetTypeInputRef = useRef<HTMLInputElement>(null);
  const mapaRef = useRef<HTMLDivElement>(null);
  const mapaInstancia = useRef<any>(null);

  useEffect(() => {
    const leafletCSS = document.createElement("link");
    leafletCSS.rel = "stylesheet";
    leafletCSS.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(leafletCSS);

    const leafletScript = document.createElement("script");
    leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    leafletScript.async = true;
    leafletScript.onload = () => {
      const gerarNomesFicticios = (quantidade: number): string[] => {
        const nomes: string[] = [];
        const prefixos = ["Hotel", "Refúgio", "Cantinho", "Estalagem", "Palácio", "Mansão", "Recanto"];
        const meios = ["Patinhas", "Bigodes", "Peludos", "Focinhos", "Miados", "Pets", "Amiguinhos"];
        const sufixos = ["Felizes", "Dourados", "Reais", "Amados", "Alegres", "Aconchegantes"];
        for (let i = 0; i < quantidade; i++) {
          const nome = `${prefixos[Math.floor(Math.random() * prefixos.length)]} ${
            meios[Math.floor(Math.random() * meios.length)]
          } ${sufixos[Math.floor(Math.random() * sufixos.length)]}`;
          nomes.push(`${nome} #${i + 1}`);
        }
        return nomes;
      };

      const nomesHoteis = gerarNomesFicticios(50);

      const cidades: Cidade[] = [
        { nome: "São Paulo", lat: -23.55, lon: -46.63 },
        { nome: "Rio de Janeiro", lat: -22.91, lon: -43.17 },
        { nome: "Brasília", lat: -15.79, lon: -47.88 },
        { nome: "Belo Horizonte", lat: -19.92, lon: -43.94 },
        { nome: "Porto Alegre", lat: -30.03, lon: -51.23 },
        { nome: "Curitiba", lat: -25.42, lon: -49.27 },
        { nome: "Salvador", lat: -12.97, lon: -38.50 },
        { nome: "Fortaleza", lat: -3.72, lon: -38.54 },
        { nome: "Recife", lat: -8.05, lon: -34.90 },
        { nome: "Manaus", lat: -3.12, lon: -60.02 },
      ];

      const gerarHoteis = (count: number): Hotel[] => {
        const hoteisGerados: Hotel[] = [];
        for (let i = 0; i < count; i++) {
          const cidade = cidades[i % cidades.length];
          const lat = cidade.lat + (Math.random() - 0.5) * 1.5;
          const lon = cidade.lon + (Math.random() - 0.5) * 1.5;
          const nome = nomesHoteis[i % nomesHoteis.length];
          const img = `https://place-puppy.com/400x25${i}`;
          hoteisGerados.push({ nome, coords: [lat, lon], cidade: cidade.nome, img });
        }
        return hoteisGerados;
      };

      const locais = gerarHoteis(30);
      setHoteis(locais);

      if (mapaRef.current) {
        const mapa = (window as any).L.map(mapaRef.current).setView([-14.235, -51.9253], 4.2);
        mapaInstancia.current = mapa;

        (window as any).L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(mapa);

        locais.forEach((local) => {
          (window as any).L.marker(local.coords)
            .addTo(mapa)
            .bindPopup(`<b>${local.nome}</b><br>${local.cidade}`);
        });

        setTimeout(() => {
          mapa.invalidateSize();
        }, 300);
      }
    };
    document.body.appendChild(leafletScript);

    return () => {
      document.head.removeChild(leafletCSS);
      document.body.removeChild(leafletScript);
    };
  }, []);

  const handlePetTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowOtherPetType(e.target.value === "other");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Reserva enviada com sucesso para ${hotelSelecionado?.nome}!`);
    if (formRef.current) formRef.current.reset();
    setShowOtherPetType(false);
  };

  const selecionarHotel = (hotel: Hotel) => {
    setHotelSelecionado(hotel);
    if (mapaInstancia.current) {
      mapaInstancia.current.setView(hotel.coords, 10);
    }
  };

  return (
    <div className="reservar-page">
      {/* NAVBAR */}
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

      <section className="reserva-section">
        <h2>Encontre o Hotel Ideal para seu Pet</h2>
        <p className="intro">Pesquise e reserve acomodações pet-friendly 🐾</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar por cidade, hotel ou região..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button><i className="fas fa-search"></i></button>
        </div>

        {/* Layout estilo Airbnb: Cards + Mapa + Formulário fixo */}
        <div className="reserva-flex-airbnb">
          {/* Coluna esquerda: Cards */}
          <div className="hotel-list-airbnb">
            {hoteis
              .filter(h => h.nome.toLowerCase().includes(search.toLowerCase()) || h.cidade.toLowerCase().includes(search.toLowerCase()))
              .slice(0, 12)
              .map((hotel, i) => (
                <div
                  key={i}
                  className={`hotel-card-airbnb ${hotelSelecionado?.nome === hotel.nome ? "selecionado" : ""}`}
                  onClick={() => selecionarHotel(hotel)}
                >
                  <img src={hotel.img} alt={hotel.nome} />
                  <div className="hotel-info-airbnb">
                    <h4>{hotel.nome}</h4>
                    <p><i className="fas fa-map-marker-alt"></i> {hotel.cidade}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Coluna direita: Mapa + Formulário */}
          <div className="map-form-container">
            <div className="map-wrapper-airbnb">
              <div id="mapa" ref={mapaRef}></div>
            </div>

            {hotelSelecionado && (
              <div className="form-container-airbnb">
                <h3>Reservar no {hotelSelecionado.nome}</h3>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <label htmlFor="nome">Nome do Tutor</label>
                  <input type="text" id="nome" required />

                  <label htmlFor="pet">Nome do Pet</label>
                  <input type="text" id="pet" required />

                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" required />

                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" required />

                  <label htmlFor="petType">Tipo de Pet</label>
                  <select id="petType" required onChange={handlePetTypeChange}>
                    <option value="">Selecione</option>
                    <option value="dog">Cachorro</option>
                    <option value="cat">Gato</option>
                    <option value="other">Outro</option>
                  </select>

                  {showOtherPetType && (
                    <input
                      type="text"
                      placeholder="Qual outro animal?"
                      ref={otherPetTypeInputRef}
                    />
                  )}

                  <label htmlFor="porte">Porte do Pet</label>
                  <select id="porte" required>
                    <option value="">Selecione</option>
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                  </select>

                  <label htmlFor="checkin">Check-in</label>
                  <input type="date" id="checkin" required />

                  <label htmlFor="checkout">Check-out</label>
                  <input type="date" id="checkout" required />

                  <button type="submit">Reservar</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservar;
