# E-commerce_Backend

E-commerce_Backend es la parte del servidor que respalda la aplicación web E-commerce_Frontend. Proporciona la lógica del servidor y garantiza una experiencia fluida para los clientes que utilizan la aplicación [E-commerce_Frontend](https://github.com/Cristian0813/E-commerce_Frontend.git). La conexión entre el frontend y el backend se establece a través de solicitudes HTTP utilizando Axios. A continuación, se detallan las dependencias necesarias para ejecutar y desarrollar este proyecto backend.

**_Estos son solo ejemplos básicos, ajusta y amplía según las necesidades específicas de tu proyecto._**

## Demo

https://cerrajeriamalla.netlify.app 
*(Esta página de inicio de noticias ha sido cuidadosamente diseñada con un enfoque en la simplicidad y funcionalidad. Además, constituye un proyecto valioso para perfeccionar las habilidades en CSS Grid. )*

## Requisitos
Asegúrate de tener Node.js y npm instalados en tu máquina.
[Node.js](https://nodejs.org/en) y que se ejecute con
[npm](https://www.npmjs.com/) **(Normalmente viene con Node.js)**

## Instalación
1. Clona este repositorio
    ```bash
    git clone https://github.com/TuUsuario/E-commerce_Backend.git
    ```
1. Navega al directorio del proyecto ```cd E-commerce_Backend```
1. Instala las dependencias de Vite ```npm install```
1. Ejecutar el servidor de desarrollo con ```npm run dev```
1. Construir la aplicación para producción con ```npm run build```

Esto iniciará la aplicación en modo de desarrollo. Abre http://localhost:3000 en tu navegador para ver la aplicación. Ahora se clona el repositorio [Frontend](https://github.com/Cristian0813/E-commerce_Frontend.git) y sigue las instrucciones

## Dependencias a instalar
Asegúrate de instalar las siguientes dependencias antes de ejecutar la aplicación:

### [Express generator](https://expressjs.com/en/starter/generator.html#express-application-generator)
Instala Express application generator para agilizar la creación de una estructura básica de la aplicación

```bash
npm install -g express-generator
```
Consulta la documentación de [Express aplication generator](https://expressjs.com/en/starter/generator.html#express-application-generator) para obtener más información.

### [Axios](https://axios-http.com/)
Utiliza Axios para realizar solicitudes HTTP en tu aplicación.
```bash
npm install axios
```
Sigue la [documentación de Axios](https://axios-http.com/docs/intro) para entender cómo integrarlo en tu proyecto.

### [Cookie-parser](http://expressjs.com/en/resources/middleware/cookie-parser.html)
Utiliza Cookie-parser Middleware de Express para analizar las cookies en las solicitudes HTTP..
```bash
$ npm install cookie-parser
```
Sigue la [documentación de Cookie-parser](http://expressjs.com/en/resources/middleware/cookie-parser.html) para entender cómo integrarlo en tu proyecto.

### [Cors](https://expressjs.com/en/resources/middleware/cors.html)
Integra Middleware de Express para habilitar la política de mismo origen (CORS).
```bash
npm install cors
``` 
Sigue la [documentación de cors](https://expressjs.com/en/resources/middleware/cors.html) para una configuración óptima.
**Configuración de CORS**
En el código fuente, se utiliza la biblioteca cors junto con opciones específicas para permitir solicitudes desde un dominio específico (http://localhost:5173 en este caso). Aquí está el fragmento de código que configura CORS en la aplicación:
```javascript
const cors = require('cors');

// Permitir solicitudes desde cualquier origen
const corsOptions = {
  origin: '*', // Puedes proporcionar una lista de dominios permitidos ['http://localhost:5173', 'https://otrodominio.com']
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

```

### [Dotenv](https://github.com/motdotla/dotenv#readme) 
Añade dotenv para guradar tus variables de entorno.
```bash
npm install dotenv
``` 
Por favor, revisa la [documentación de dotenv](https://github.com/motdotla/dotenv#readme) para más detalles.

Antes de ejecutar el proyecto, asegúrate de haber configurado las variables de entorno. Crea un archivo ```.env``` en la raíz del proyecto y define las siguientes variables:
```javascript
PORT = 3000
FAKESTORE = https://fakestoreapi.com
```

### [Nodemon](https://github.com/remy/nodemon#nodemon)
Incorpora nodemon para gestionar el estado de la aplicación de manera eficiente.
```bash
npm install -g nodemon
```
Consulta la [documentación de nodemon](https://github.com/remy/nodemon#nodemon) para obtener información detallada sobre su implementación.

## Contribuir

¡Agradecemos tu interés en contribuir al desarrollo de esta aplicación! Sigue estos pasos para colaborar de manera efectiva:

1. **Fork del Proyecto:** Haz un fork del repositorio desde la interfaz de GitHub. Esto creará una copia del proyecto en tu cuenta.

1. **Crea una Nueva Rama:** Crea una nueva rama para tu funcionalidad o corrección utilizando el siguiente comando:

    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```

   Asegúrate de utilizar un nombre descriptivo para tu rama.

1. **Realiza tus Cambios:** Implementa las modificaciones necesarias en tu nueva rama. Añade, modifica o elimina el código según sea necesario.

1. **Haz Commit de tus Cambios:** Utiliza el siguiente comando para realizar un commit con un mensaje descriptivo:

    ```bash
    git commit -m 'Agrega nueva funcionalidad'
    ```

1. **Haz Push a la Rama:** Sube tus cambios a tu fork del repositorio en GitHub:

    ```bash
    git push origin feature/nueva-funcionalidad
    ```

1. **Abre un Pull Request (PR):** Visita la página de tu repositorio en GitHub y selecciona la rama que acabas de crear. Haz clic en el botón "New Pull Request" para abrir un nuevo PR.

   - Asegúrate de proporcionar información detallada sobre los cambios realizados.
   - Si es relevante, menciona problemas relacionados o funcionalidades afectadas.
   - Sé claro y conciso en tu descripción para facilitar la revisión del PR.

1. **Espera la Revisión:** Los colaboradores revisarán tu PR y proporcionarán comentarios o sugerencias. Sé receptivo a las sugerencias y realiza ajustes según sea necesario.

¡Gracias por tu contribución! Tu esfuerzo ayuda a mejorar esta aplicación y beneficia a toda la comunidad.

## Authors

- [@Cristian Arias](https://www.github.com/Cristian0813)


## Documentation


<div align="left">
    <img width="12" />
    <a href="https://vitejs.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  /></a>
    <img width="12" />
    <a href="https://es.react.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo"  /></a>
    <a href="https://axios-http.com/"><img src="https://axios-http.com/assets/logo.svg" height="30" alt="axios logo"  /></a>
</div>

## License

Este proyecto está bajo la [Licencia MIT](https://choosealicense.com/licenses/mit/)