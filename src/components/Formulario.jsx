import React, { useState } from 'react';

function Formulario({ onFormSubmit }) {
  const [nombre, setNombre] = useState('');
  const [musicaFavorita, setMusicaFavorita] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setEnviado(true);
    onFormSubmit({ nombre, musicaFavorita });
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Música Favorita:
          <input
            type="text"
            value={musicaFavorita}
            onChange={(e) => setMusicaFavorita(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      
    </div>
  );
}

export default Formulario;

