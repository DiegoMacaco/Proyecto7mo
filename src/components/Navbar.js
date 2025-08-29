import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#1f2937", padding: "10px 16px" }}>
      <strong style={{ color: "white", marginRight: 16 }}>Pagina dePedidos</strong>
      <Link to="/" style={link}>Principal</Link>
      <Link to="/pedidos" style={link}>Pedidos</Link>
      <Link to="/menu" style={link}>Menú</Link>
      <Link to="/usuarios" style={link}>Usuarios</Link>
      <Link to="/estadisticas" style={link}>Estadísticas</Link>
    </nav>
  );
};

const link = {
  color: "white",
  marginRight: 12,
  textDecoration: "none"
};

export default Navbar;
