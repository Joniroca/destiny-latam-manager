// Importar React, axios y el módulo https para hacer peticiones HTTPS
import React, { Component } from 'react';
import axios from 'axios';
import https from 'https';

// Definir los parámetros del cliente
const client_id = '12345'; // Proporcionado por el portal
const client_secret = 'abcdef'; // Proporcionado por el portal
const redirect_uri = 'https://example.com/callback'; // Registrado en el portal

// Construir la URI de solicitud de autorización
const auth_uri = 'https://www.bungie.net/en/oauth/authorize';
const response_type = 'code';
const state = '6i0mkLx79Hp91nzWVeHrzHG4'; // Un valor opaco generado por el cliente
const auth_request_uri = `${auth_uri}?client_id=${client_id}&response_type=${response_type}&state=${state}`;

// Crear una instancia de axios con la configuración básica para el endpoint de token
const token_axios = axios.create({
  baseURL: 'https://www.bungie.net/platform/app/oauth/token/',
  method: 'POST',
  auth: {
    username: client_id,
    password: client_secret,
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

// Crear un componente de React para el flujo de autorización de OAuth 2.0
class OAuth2Flow extends Component {
  // Inicializar el estado del componente
  constructor(props) {
    super(props);
    this.state = {
      code: '', // El código de autorización recibido del endpoint de redirección
      token: null, // El token de acceso recibido del endpoint de token
      error: null, // El error recibido del endpoint de token
    };
  }

  // Manejar el cambio del código de autorización en el campo de entrada
  handleChange = (event) => {
    this.setState({ code: event.target.value });
  };

  // Manejar el envío del código de autorización al endpoint de token
  handleSubmit = async (event) => {
    // Usar async para poder usar await dentro de la función
    event.preventDefault();

    // Construir los datos de la petición al endpoint de token
    const grant_type = 'authorization_code';
    const code = this.state.code;
    const token_request_data = `grant_type=${grant_type}&code=${code}`;

    try {
      // Usar await para esperar a que se resuelva la promesa devuelta por axios
      let response = await token_axios.post('', token_request_data);

      // Actualizar el estado del componente con el token de acceso y otros datos recibidos
      this.setState({ token: response.data, error: null });

      // Usar el token de acceso para acceder a los recursos protegidos de Bungie.net
      // ...
    } catch (error) {
      // Actualizar el estado del componente con el error recibido
      this.setState({ token: null, error: error.response.data });
    }
  };

  // Renderizar el componente en el navegador
  render() {
    return (
      <div className="OAuth2Flow">
        <h1>Flujo de autorización de OAuth 2.0 para Bungie.net</h1>
        <p>
          Por favor, visita esta URL para autorizar al cliente:{' '}
          <a href={auth_request_uri}>{auth_request_uri}</a>
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Introduce el código de autorización:
            <input type="text" value={this.state.code} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        {this.state.token && (
          <div className="Token">
            <h2>Token de acceso recibido:</h2>
            <pre>{JSON.stringify(this.state.token, null, 2)}</pre>
          </div>
        )}
        {this.state.error && (
          <div className="Error">
            <h2>Error al obtener el token de acceso:</h2>
            <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

// Exportar el componente de React
export default OAuth2Flow;
