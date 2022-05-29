const express = require("express");
const app = express();

const autos = [
  { id: 1, marca: "Ford", color: "Rojo" },
  { id: 2, marca: "Chevrolet", color: "Verde" },
  { id: 3, marca: "Tesla", color: "Gris" },
];

// GET /autos?marca="Ford"

app.get("/autos", (req, res) => {
  marca = req.query.marca;
  if (marca) {
    return res.json(autos.filter((auto) => auto.marca == marca));
  } else {
    res.json(autos);
  }
});

// GET /autos/1

app.get("/autos/:autoId", (req, res) => {
  const idDelAuto = req.params.autoId;
  const autoEncontrado = autos.find((auto) => auto.id == idDelAuto);

  if (!autoEncontrado) res.status(404).send("El auto no existe");
  else res.json(autoEncontrado);
});

app.listen(8080, () => {
  console.log("Escuchando autos");
});
