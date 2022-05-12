const http = require("http");

const today = new Date();
const hour = today.getHours();

const server = http.createServer((req, res) => {
  if (hour >= 6 && hour <= 12) {
    res.end("Buenos días");
  } else if (hour >= 13 && hour <= 19) {
    res.end("Buenas tardes");
  } else {
    res.end("Buenas noches");
  }
});

server.listen(8080, () => {
  console.log(`El servidor está escuchando en el puerto ${server.address().port}`);
});
