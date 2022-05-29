const express = require("express");
const app = express();

const frase = "Hola mundo cómo están";

app.get("/api/frase", (req, res) => {
  res.json({ frase: frase });
});

app.get("/api/letras/:num", (req, res) => {
  indexLetra = parseInt(req.params.num);
  if (Number.isInteger(indexLetra) && indexLetra < frase.toString().length) {
    letraSeleccionada = indexLetra - 1;
    res.json({ letra: frase[letraSeleccionada] });
  } else if (indexLetra >= frase.length) {
    res.status(404).send({ error: "El parámetro está fuera de rango." });
  } else res.status(404).send({ error: "El parámetro no es un número" });
});

app.get("/api/palabras/:num", (req, res) => {
  arrPalabras = frase.split(" ");
  indexPalabra = parseInt(req.params.num);

  if (Number.isInteger(indexPalabra) && indexPalabra < arrPalabras.length) {
    palabraSeleccionada = indexPalabra - 1;
    res.json({palabra: arrPalabras[palabraSeleccionada]});
  }
  else if (indexPalabra >= arrPalabras.length) {
    res.status(404).send({error: "El parámetro está fuera de rango."})
  }
  else res.status(404).send({ error: "El parámetro no es un número" });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
