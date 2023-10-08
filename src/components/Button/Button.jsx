import React from 'react';

const Button = ({ handleCLick, textBtn = 'Botón' }) => {
  return (
    <>
      <button onClick={handleCLick}>{textBtn}</button>
    </>
  );
};

export default Button;
