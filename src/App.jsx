import { React } from 'react';
// import viteLogo from '../public/vite.svg';
import './App.css';
import Button from './components/Button/Button';
import OAuth2Flow from './components/OAuth2Flow/OAuth2Flow';

function App() {
  const handleCLickLogin = () => {
    <a href=""></a>;
  };
  return (
    <>
      <h1>HOLA OWLS</h1>
      <p>
        Próximamente podrás iniciar sesión para saludarte con tu nombre de perfil de
        Destiny 2!
      </p>
      <Button handleCLick={handleCLickLogin} textBtn="Login" />
      <hr />
      <OAuth2Flow />
    </>
  );
}

export default App;
