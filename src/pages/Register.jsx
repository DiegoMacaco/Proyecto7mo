import React from "react";

export default function Register() {
  return (
    <div>
      <h1>Registrate ahora</h1>
      <form action="submit">
        <label form="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" />
        <label form="apellido">Apellido</label>
        <input type="text" id="apellido" name="apellido" />
        <label form="correo_electronico">Correo_Electronico</label>
        <input type="gmail" id="correo_electronico" name="correo_electronico" />
        <label form="password">Contraseña</label>
        <input type="password" id="contraseña" name="contraseña" />
      </form>
    </div>
  );
}
