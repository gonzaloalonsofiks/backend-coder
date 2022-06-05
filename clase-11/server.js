const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();

// Archivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const httpServer = new HttpServer(app);
const ioServer = new IOServer(httpServer);

ioServer.on("connection", (socket) => {
  console.log("Se conectó un usuario");
  socket.emit("bienvenida", "Bienvenido a nuestro sistema de websockets");
});

httpServer.listen(3000, () => {
  console.log("listening on port 3000");
});
