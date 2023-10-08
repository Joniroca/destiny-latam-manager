// Importar React
import React from 'react';

// Crear un componente de React para el token
const Token = (props) => {
  // Extraer el prop necesario
  const { token } = props;

  // Devolver el elemento JSX del token
  return (
    <div className="Token">
      <h2>Token de acceso recibido:</h2>
      <pre>{JSON.stringify(token, null, 2)}</pre>
    </div>
  );
};

// Exportar el componente de React
export default Token;
