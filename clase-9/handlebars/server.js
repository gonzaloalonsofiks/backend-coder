const express = require("express");
const app = express();
// Cargo Handlebars
const handlebars = require("express-handlebars");
port = 8081;

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/hbs_views/layouts",
    partialsDir: __dirname + "/hbs_views/partials",
  })
);

app.set("view engine", "hsb");
app.set("views", "/hbs_views");

app.get("/cte1", (req, res) => {
  res.render("index.hbs", {
    titulo: "Test",
    autor: "Gonzalo",
    mensaje: "hola",
    version: "10",
  });
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log("listening on port", port);
});
