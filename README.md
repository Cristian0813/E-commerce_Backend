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
git clone https://github.com/Cristian0813/E-commerce.git
```
```npm
npm install
```
## Configuración

Antes de ejecutar el proyecto, asegúrate de haber configurado las variables de entorno. Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

```env
Puerto = 3000
FAKEAPI = https://fakestoreapi.com/products
```

## Authors

- [@Cristian Arias](https://www.github.com/Cristian0813)


## Licencia
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Cristian0813/E-commerce/blob/main/LICENSE)  
