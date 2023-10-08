import axios from 'axios';

// debo pasar estas constantes a constantes e importarlas para en cualquier caso solo modificar las info de las const y no cambiar todos los sitios donde se usaron odeclararon
const apiKey = '97e0aa0e3e7c46d782f437425e938c9a';
const membershipType = '1';
const destinyMembershipId = '4611686018432118998';

const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`,
      // `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=100`,
      {
        headers: {
          'X-API-Key': apiKey,
        },
      },
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;

/*
Hola, este es Bing. Te voy a ayudar a entender el párrafo que me has enviado. El párrafo explica cómo se hace una solicitud de autorización usando el protocolo OAuth 2.0, que es un estándar para permitir que una aplicación acceda a recursos de otra aplicación en nombre de un usuario. Aquí tienes un resumen de lo que significa cada parte del párrafo:

Authorization Request: Es el nombre que se le da a la solicitud que hace la aplicación cliente al servidor de autorización para obtener un código de autorización, que luego se puede usar para obtener un token de acceso.

The client constructs the request URI by adding the following parameters to the query component of the authorization endpoint: Esto significa que la aplicación cliente crea una dirección web (URI) que contiene los parámetros necesarios para identificar la solicitud y enviarla al punto final de autorización, que es la dirección web del servidor de autorización donde se procesa la solicitud.

response_type: Must be “code”: Este parámetro indica el tipo de respuesta que espera la aplicación cliente del servidor de autorización. En este caso, debe ser “code”, lo que significa que quiere un código de autorización.

client_id: Provided by the portal: Este parámetro identifica a la aplicación cliente ante el servidor de autorización. El valor se obtiene del portal donde se registra la aplicación cliente.

state: An opaque value used by the client to maintain state between the request and the callback. The parameter should be used for preventing cross-site request forgery as described in section 10.12 of the OAuth 2.0 specification: Este parámetro es un valor arbitrario que usa la aplicación cliente para mantener el estado entre la solicitud y el retorno de llamada, que es cuando el servidor de autorización envía la respuesta a la aplicación cliente. El parámetro se usa para prevenir ataques de falsificación de solicitudes entre sitios, como se describe en la sección 10.12 de la especificación OAuth 2.0.

The redirect_uri parameter is optional. If it is present, it must be a case sensitive exact match with the value registered in the portal: Este parámetro es opcional y sirve para indicar la dirección web donde el servidor de autorización debe enviar la respuesta. Si se incluye, debe coincidir exactamente con el valor registrado en el portal, respetando las mayúsculas y minúsculas.

Do not include the scope parameter. Bungie.net does not define a syntax for this parameter and will reject requests that specify a scope: Este parámetro se usa normalmente para indicar el alcance o los permisos que solicita la aplicación cliente para acceder a los recursos del usuario. Sin embargo, en este caso no se debe incluir porque Bungie.net no define una sintaxis para este parámetro y rechazará las solicitudes que lo especifiquen.

GET https://www.bungie.net/en/oauth/authorize?client_id=12345&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4: Esta es la dirección web completa que forma la solicitud de autorización, usando el método GET, que es uno de los métodos más comunes para enviar datos por internet. Los parámetros se añaden después del signo de interrogación y se separan por el signo &.

The response is consistent with section 4.1.2 of the OAuth 2.0 specification: Esto significa que la respuesta que envía el servidor de autorización sigue el formato y los requisitos que se describen en la sección 4.1.2 de la especificación OAuth 2.0.
Espero haberte ayudado a entender mejor el párrafo. ¿Hay algo más en lo que te pueda ayudar?
*/
