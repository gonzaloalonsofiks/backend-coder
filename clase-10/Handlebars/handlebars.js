const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const { Router } = express;
const Contenedor = require('../../clase-8/desafio/container')
port = 8080

app.engine('hbs',
engine({
  extname: ".hbs",
  defaultLayout: "index.hbs"
})
)

app.set("views", "./hbs_views")

app.get('/', (req, res) => {
  res.render('form')
})

app.listen(port, () =>{
  console.log("listening on port", port)
})

// Usando la API del desafío anterior

const productos = new Contenedor()
const router = Router()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static("public"));

app.set('view engine', "hbs")

app.use('/productos', router) //Esto lo agregué porque vi que otros lo tenían pero no entiendo por qué hay que agregarlo

router.get('/', (req, res) => {
  res.render('main', productos);
})

router.post('/', (req, res) => {
  res.send(productos.postProducto(req.body))
  res.send('/')
})

app.use("api/productos", router);

