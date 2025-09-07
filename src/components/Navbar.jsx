import React, { useState } from "react";
import { Link } from "react-router-dom";
import usuario from "../assets/icono_usuario.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav style={{ background: "#1f2937", padding: "10px 16px" }}>
      <strong style={{ color: "white", marginRight: 16 }}>
        Pagina de Pedidos
      </strong>
      <Link to="/" style={link}>
        Principal
      </Link>
      <Link to="/pedidos" style={link}>
        Pedidos
      </Link>
      <Link to="/menu" style={link}>
        Menú
      </Link>
      <Link to="/usuarios" style={link}>
        Usuarios
      </Link>
      <Link to="/estadisticas" style={link}>
        Estadísticas
      </Link>

      {/* Imagen de usuario */}
      <img
        src={usuario}
        alt="Perfil"
        onClick={toggleMenu}
        style={{ width: 32, height: 32, cursor: "pointer", marginLeft: 16 }}
      />

      {/* Menú desplegable */}
      {menuVisible && (
        <div>
          <Link to="/Login">Iniciar sesión</Link>
          <br />
          <Link to="/Register">Registrarse</Link>
        </div>
      )}
    </nav>
  );
};

const link = {
  color: "white",
  marginRight: 12,
  textDecoration: "none",
};

export default Navbar;
