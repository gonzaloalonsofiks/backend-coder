const fs = require("fs");

const escribirArchivo = () => {
  try {
    fs.writeFileSync("fyh.txt", new Date().toISOString());
  } catch (error) {
    throw new Error("Failed to write");
  }
};

const leerArchivo = () => {
  try {
    const contenido = fs.readFileSync("fyh.txt", "utf8");
    console.log(contenido);
  } catch (error) {
    throw new Error("Failed to read");
  }
};

try {
  escribirArchivo();
  leerArchivo();
} catch (error) {
  console.log(error);
}
