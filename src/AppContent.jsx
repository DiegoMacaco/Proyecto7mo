// AppContent.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Importamos nuestras páginas
import Dashboard from "./pages/Dashboard";
import Pedidos from "./pages/Pedidos";
import Menu from "./pages/Menu";
import Usuarios from "./pages/Usuarios";
import Estadisticas from "./pages/Estadisticas";
import Login from "./pages/login";

// Importamos el Navbar
import Navbar from "./components/Navbar";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Mostrar u ocultar Navbar */}
      {!hideNavbar && <Navbar />}

      {/* Contenedor de rutas */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default AppContent;
