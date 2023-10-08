/*
Me alegra que te haya gustado mi explicación. 😊

Sí, me animo a modularizar el código de ejemplo que te he generado. Modularizar el código significa dividirlo en partes más pequeñas y reutilizables, llamadas módulos, que se pueden importar y exportar entre sí1. Esto tiene varias ventajas, como mejorar la legibilidad, la mantenibilidad y la escalabilidad del código2.

Para modularizar el código de ejemplo que te he generado en REACT, puedes seguir estos pasos:

Crear un archivo para cada componente de React que quieras extraer, como el formulario, el token y el error.
Usar export default para exportar el componente desde el archivo.
Usar import para importar el componente en el archivo principal donde lo quieras usar.
Usar props para pasar los datos y las funciones entre los componentes.
Aquí está el código modularizado que he creado:

// En el archivo OAuth2Flow.js
*/

// Importar React y axios
import React, { Component } from 'react';
import axios from 'axios';

// Importar los componentes extraídos
import Form from '../Form/Form';
import Token from '../Token/Token';
import Error from '../Error/Error';

// Definir los parámetros del cliente
const client_id = '45351'; // Proporcionado por el portal
const client_secret = '8zf2HB01e5pfpI.FRbzi.2OlFgbJhdJIY3yArPGZjW4'; // Proporcionado por el portal
const redirect_uri = 'https://destiny-latam-manager.netlify.app/'; // Registrado en el portal

// Construir la URI de solicitud de autorización
const auth_uri = 'https://www.bungie.net/en/oauth/authorize';
const response_type = 'code';
const state = '97e0aa0e3e7c46d782f437425e938c9a'; // Un valor opaco generado por el cliente
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
        {/* Usar los componentes importados y pasarles los props necesarios */}
        <Form
          code={this.state.code}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.token && <Token token={this.state.token} />}
        {this.state.error && <Error error={this.state.error} />}
      </div>
    );
  }
}

// Exportar el componente de React
export default OAuth2Flow;
