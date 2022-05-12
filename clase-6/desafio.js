const express = require('express')
const app = express()
const Contenedor = require('../handler.js')

const productos = new Contenedor('productos.txt')

app.get('/productos', async (req, res) =>{
  let productArray = await productos.getAll()

  res.send(productArray)
})

app.get('/productoRandom', async (req, res) =>{
  let productArray = await productos.getAll()
  let randomNumber = Math.floor(Math.random() * productArray.length)
  let randomProduct = productArray[randomNumber]

  res.send(randomProduct)
})

app.listen(8080, ()=>{
  console.log("El servidor está escuchando!")
})


