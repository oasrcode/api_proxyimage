const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", methods: "*" }));
app.use(helmet());


const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/octet-stream",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/svg+xml",
  "binary/octet-stream"
];
const defaultImageUrl = "rutadelaimagenenassetsdeangular";

app.get("/image", function (req, res) {
  const url = req.query.url;
  axios({ method: "get", url, responseType: "arraybuffer" })
    .then((response) => {
      const fetchedContentType = response.headers["content-type"];
      if (allowedMimeTypes.includes(fetchedContentType)) {
        res.set("content-type", fetchedContentType);
        res.status(200);
        res.end(response.data, "binary");
      } else {
        console.error(`Tipo de imagen no soportado: ${fetchedContentType}`);
        sendDefaultImageUrl(res);
      }
    })
    .catch((error) => {
      console.error("Error al buscar imagen", error.message);
      sendDefaultImageUrl(res);
    });
});

function sendDefaultImageUrl(res) {
  res.status(200).set("content-type", "text/plain").send(defaultImageUrl);
}

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
