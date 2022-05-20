const express = require("express");
const multer = require("multer");

const app = express();

const guardado = multer.diskStorage({
  destination: "data",
  filename: "products.txt",
});

const saver = multer({storage: guardado });

app.post("/api/productos", saver.single("producto"), (req, res) => {
  res.send("Producto cargado");
});

app.post("/nuevo", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.listen(8081, () => {
  console.log("Escuchando")
})
