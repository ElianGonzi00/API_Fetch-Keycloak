import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import initKeycloak from './keycloak';

initKeycloak()
  .then(( authenticated ) => {
    if(!authenticated){
      console.warn("Usuario no autenticado");
      //Keycloak redirige directamente al login en este caso
    }

    const root = ReactDOM.createRoot(document.getElew('root'));
    root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
    )
  })
  .catch((error) => {
    console.error('Error Keycloak: ', error);
  });

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

