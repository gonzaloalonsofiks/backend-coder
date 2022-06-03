const express = require("express");
const app = express();
const { Router } = express;
const Contenedor = require("../../clase-8/desafio/container");
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.use('/productos', router)

// Usando la api

const productos = new Contenedor();

/* router.get('/productos', (req, res) => {
  productos.getProductos()
  res.render('main', {productos: productos})
}) */

app.get("/productos", (req, res) => {
  res.render("main.pug", { productos: productos });
});

/* app.get("/productos", (req, res) => {
  res.render("main.pug", { productos: productos });
}); */

app.listen(8080, () => console.log("listening on port 8080"));
