import React, { useState } from 'react';
import Formulario from './components/Formulario';
import './App.css';

function App() {
  const [datos, setDatos] = useState(null);

  const handleFormSubmit = (data) => {
    setDatos(data);
  };

  return (
    <div className="App">
      <Formulario onFormSubmit={handleFormSubmit} />
      {datos && (
        <div>
          <h2>Datos Ingresados:</h2>
          <p>Nombre: {datos.nombre}</p>
          <p>Música Favorita: {datos.musicaFavorita}</p>
        </div>
      )}
    </div>
  );
}

export default App;