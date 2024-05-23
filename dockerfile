# Usa la imagen base de Node.js
FROM node:16.2

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación está escuchando
EXPOSE 10000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "index.js"]
