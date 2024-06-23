# Api_proxyimage

## Descripción

`Api_proxyimage` es un servicio proxy diseñado para recuperar imágenes  y servirlas a través de una API RESTful.

## Uso

El servicio estará disponible en `http://localhost:10000`.

## API

El servicio proporciona una API RESTful para recuperar imágenes. Aquí está el endpoint disponible:

* `GET /image?url={URL}`: Recupera una imagen de la URL proporcionada. Si la imagen tiene un tipo MIME admitido, se devuelve la imagen; de lo contrario, se devuelve una URL predeterminada.

## Dependencias

* [axios](https://www.npmjs.com/package/axios): Para realizar solicitudes HTTP de la imagen.
* [cors](https://www.npmjs.com/package/cors): Middleware para habilitar el CORS (Cross-Origin Resource Sharing).
* [dotenv](https://www.npmjs.com/package/dotenv): Para cargar variables de entorno desde un archivo `.env`.
* [express](https://www.npmjs.com/package/express): Marco de aplicación web para Node.js.
* [helmet](https://www.npmjs.com/package/helmet): Middleware para establecer varios encabezados HTTP para la seguridad.
* [morgan](https://www.npmjs.com/package/morgan): Middleware para registrar solicitudes HTTP.
