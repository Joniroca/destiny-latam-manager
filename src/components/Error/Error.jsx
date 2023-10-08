// Importar React
import React from 'react';

// Crear un componente de React para el error
const Error = (props) => {
  // Extraer el prop necesario
  const { error } = props;

  // Devolver el elemento JSX del error
  return (
    <div className="Error">
      <h2>Error al obtener el token de acceso:</h2>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
};

// Exportar el componente de React
export default Error;
