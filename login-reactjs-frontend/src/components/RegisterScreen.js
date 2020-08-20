import React from 'react';
import { Link } from 'react-router-dom';
import loginIcon from './login-icon.png';

export const RegisterScreen = () => {
  return (
    <div className="global-container form-container">
      <form>
        <div className="form-header">
          <div className="blue-header">
            <img src={loginIcon} className="img-header"/>
          </div>
        </div>
        <div className="input-list form-section">
          <h1>Registrarse</h1>
            <input type="text" name="name" placeholder="Nombre" />
            <input type="text" name="lastName" placeholder="Apellido" />
            <input type="text" name="userName" placeholder="Nombre de usuario" />
            <input type="text" name="email" placeholder="correo electrónico" />
            <input type="password" name="password" placeholder="Contraseña" />
        </div>
        <div className="input-list form-footer">
          <input type="submit" value="Enviar" />
          <p>¿No tienes cuenta?</p>
          <Link to="/login">Inicia sesión</Link>
        </div>
      </form>
    </div>
  )
}
