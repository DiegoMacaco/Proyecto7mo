import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importamos nuestras páginas
import Dashboard from "./pages/Dashboard";
import Pedidos from "./pages/Pedidos";
import Menu from "./pages/Menu";
import Usuarios from "./pages/Usuarios";
import Estadisticas from "./pages/Estadisticas";

// Importamos el Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenedor de rutas */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
