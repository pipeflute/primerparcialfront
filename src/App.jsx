import React, { useState } from 'react';
import Formulario from './components/Formulario';
import './App.css';

function App() {
  const [datos, setDatos] = useState([]);
  const [id, setId] = useState(0);

  const handleFormSubmit = (data) => {
    setDatos([...datos, { ...data, id }]);
    setId(id + 1);
  };

  return (
    <div className="App">
      <Formulario onFormSubmit={handleFormSubmit} />
      <div>
        {datos.map((dato) => (
          <div key={dato.id} className="card">
            <h2>Datos Ingresados:</h2>
            <p>Nombre: {dato.nombre}</p>
            <p>Música Favorita: {dato.musicaFavorita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
