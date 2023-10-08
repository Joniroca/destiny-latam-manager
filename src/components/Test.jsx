import React from 'react';
import login from '../services/auth/login';

const Test = () => {
  const handleInstaciaLogin = () => login;

  return (
    <>
      <p>Hola, debajo mio debe aparecer el boton login</p>
      {/* <div>{instaciaLogin}</div> */}
      <button onClick={handleInstaciaLogin}>LOGIN</button>
    </>
  );
};

export default Test;
