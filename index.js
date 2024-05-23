const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", methods: "*" }));
app.use(helmet());
app.use(morgan(":method =>  | :response-time ms | :url"));

const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/octet-stream",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/svg+xml",
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
      console.error("Error al bsucar iamgen", error.message);
      sendDefaultImageUrl(res);
    });
});

function sendDefaultImageUrl(res) {
  res.status(200).set("content-type", "text/plain").send(defaultImageUrl);
}

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
