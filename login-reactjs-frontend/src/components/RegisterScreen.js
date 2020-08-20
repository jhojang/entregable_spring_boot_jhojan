import React from 'react';
import { Link } from 'react-router-dom';
import loginIcon from './login-icon.png';
import { useFetchSpringBoot } from '../hooks/useFetchSpringBoot';
import { useFormChange } from '../hooks/useFormChange';

export const RegisterScreen = () => {

  const {handleCreate} = useFetchSpringBoot();

  const [inputValue, handleInputChange, reset] = useFormChange();

  const handleSubmit =  (e) => {
    e.preventDefault();
    handleCreate(inputValue);
    reset();
  }

  return (
    <div className="global-container form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <div className="blue-header">
            <img src={loginIcon} className="img-header" alt="" />
          </div>
        </div>
        <div className="input-list form-section">
          <h1>Registrarse</h1>
            <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} value={inputValue.name} />
            <input type="text" name="lastName" placeholder="Apellido" onChange={handleInputChange} value={inputValue.lastName} />
            <input type="text" name="userName" placeholder="Nombre de usuario" onChange={handleInputChange} value={inputValue.userName} />
            <input type="text" name="email" placeholder="correo electrónico" onChange={handleInputChange} value={inputValue.email} />
            <input type="password" name="password" placeholder="Contraseña" onChange={handleInputChange} value={inputValue.password} />
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
