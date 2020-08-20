import React from 'react';
import { Link } from 'react-router-dom';

export const MainScreen = () => {
  return (
    <div className="global-container main-container">
      <div className="home-options-screens">
        <h1>Main Screen</h1>
        <div className="buttons">
          <Link className="link-button" to="/login">Login</Link>
          <Link className="link-button" to="/register">Register</Link>
        </div>
      </div>
    </div>
    
  )
}
