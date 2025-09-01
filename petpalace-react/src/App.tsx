import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar suas páginas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Depoimentos from "./pages/Depoimentos";
import Contato from "./pages/Contato";
import Reservar from "./pages/Reservar";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
