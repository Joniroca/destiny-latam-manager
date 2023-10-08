// Importar React
import React from 'react';

// Crear un componente de React para el formulario
const Form = (props) => {
  // Extraer los props necesarios
  const { code, handleChange, handleSubmit } = props;

  // Devolver el elemento JSX del formulario
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Introduce el código de autorización:
        <input type="text" value={code} onChange={handleChange} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
};

// Exportar el componente de React
export default Form;
