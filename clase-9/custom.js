const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8080;

// Indicamos dónde van a estar las plantillas

app.set("views", "./views");
app.set("view engine", "cte");

// Motor de plantillas

app.engine(".cte", (filePath, data, callback) => {
  contenidoArchivo = String(fs.readFileSync(filePath));
  const { titulo, mensaje, autor, version } = data;
  const renderizado = contenidoArchivo
    .replace("^^titulo$$", titulo)
    .replace("^^mensaje$$", mensaje)
    .replace("^^autor$$", autor)
    .replace("^^version$$", version);
    callback(null, renderizado)
});

// Página de inicio

app.get("/cte1", (req, res) => {
  res.render("index.cte", {titulo: "Test", autor: "Gonzalo", mensaje:"hola", version: "10"});
});

// Listener del servidor

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
