import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Inicio de secion</h1>
      <form action="submit">
        <label form="email">Email</label>
        <input type="text" id="email" name="email" />
        <label form="password">Contraseña</label>
        <input type="password" id="contraseña" name="contraseña" />
      </form>
      <button type="submit">Iniciar secion</button>
    </div>
  );
}
