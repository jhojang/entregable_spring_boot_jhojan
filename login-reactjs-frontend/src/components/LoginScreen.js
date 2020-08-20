import React from 'react';
import { Link } from 'react-router-dom';
import loginIcon from './login-icon.png';

export const LoginScreen = () => {
  return (
    <div className="global-container form-container">
      <form>
        <div className="form-header">
          <div className="blue-header">
            <img src={loginIcon} className="img-header"/>
          </div>
        </div>
        <div className="input-list form-section">
          <h1>Iniciar sesión</h1>
            <input type="text" name="userName" placeholder="Nombre" />
            <input type="password" name="password" placeholder="Contraseña" />
        </div>
        <div className="input-list form-footer">
          <input type="submit" value="Ingresar" />
          <p>¿No tienes cuenta?</p>
          <Link to="/register">Registrate</Link>
        </div>
      </form>
    </div>
  )
}
