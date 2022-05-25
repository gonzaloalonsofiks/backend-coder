const express = require("express");
const { Router } = express;
const Contenedor = require("./container.js");

const app = express();
const routerProductos = Router();

const productos = new Contenedor();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET /api/productos --> devuelve todos los productos

routerProductos.get("/", (req, res) => {
  res.send(productos.getProductos());
});

// GET /api/productos/:id --> devuelve productos según el ID

routerProductos.get("/:idProducto", (req, res) => {
  const id = req.params.idProducto;
  if (productos.getProductoPorId(id) !== undefined) {
    res.send(productos.getProductoPorId(id));
  } else res.status(404).send({ Error: "El producto no existe" });
});
// POST /api/productos/:id --> recibe y agrega productos creando el ID

routerProductos.post("/", (req, res) => {
  res.send(productos.postProducto(req.body));
});

// PUT /api/productos/:id --> recibe y actualiza el producto según el ID

routerProductos.put("/:idProducto", (req, res) => {
  const id = req.params.idProducto;
  res.send(productos.putProducto(id, req.body));
});

// PUT /api/productos/:id --> elimina el producto según el ID

routerProductos.delete("/:idProducto", (req, res) => {
  const id = req.params.idProducto;
  res.send(productos.deleteProducto(id));
});

app.use("/api/productos", routerProductos);

// Listeners

app.listen(8080, () => {
  console.log("El servidor está escuchando");
});
