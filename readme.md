# sb_proxyimage_api

## Descripción

`sb_proxyimage_api` es un servicio proxy diseñado para recuperar imágenes de zamakona.qasic.es y servirlas a través de una API RESTful.

## Uso

Para ejecutar el servicio en modo de desarrollo, utiliza el siguiente comando:

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copiar código</button></span></div></div><div class="overflow-y-auto p-4 text-left undefined" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run dev
</code></div></div></pre>

El servicio estará disponible en `http://localhost:10000`.

## API

El servicio proporciona una API RESTful para recuperar imágenes. Aquí está el endpoint disponible:

* `GET /image?url={URL}`: Recupera una imagen de la URL proporcionada. Si la imagen tiene un tipo MIME admitido, se devuelve la imagen; de lo contrario, se devuelve una URL predeterminada.

## Dependencias

* [axios](https://www.npmjs.com/package/axios): Para realizar solicitudes HTTP a zamakona.qasic.es.
* [cors](https://www.npmjs.com/package/cors): Middleware para habilitar el CORS (Cross-Origin Resource Sharing).
* [dotenv](https://www.npmjs.com/package/dotenv): Para cargar variables de entorno desde un archivo `.env`.
* [express](https://www.npmjs.com/package/express): Marco de aplicación web para Node.js.
* [helmet](https://www.npmjs.com/package/helmet): Middleware para establecer varios encabezados HTTP para la seguridad.
* [http-status-codes](https://www.npmjs.com/package/http-status-codes): Para usar códigos de estado HTTP predefinidos.
* [morgan](https://www.npmjs.com/package/morgan): Middleware para registrar solicitudes HTTP.

## Autor

* Nombre: [asantana@tcsa.es]()

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.
