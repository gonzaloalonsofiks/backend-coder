const express = require("express");
const {engine} = require("express-handlebars");
const app = express();

// const {engine} = require("express-handlebars");
port = 8081;

app.engine('hbs',
engine({
  extname: '.hbs',
  defaultLayout: 'index.hbs',

}))

app.set("views", "./hbs_views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("main", {
    nombre: "Gonzalo",
    apellido: "Alonso Fiks",
    edad: 31,
    telefono: "10213214321423",
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
