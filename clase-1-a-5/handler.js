const fs = require("fs");


// Creates the Class
let productId = 0;

class Contenedor {

  constructor(fileName) {
    this.fileName = fileName;
  }

  // Check if the file is created

  fileExists = async (fileName) => {
    const fileOk = fs.existsSync(fileName);

    if (fileOk === false) {
      await fs.promises.writeFileSync(fileName, "");
    }
  };

  async save(product) {
    try {
      fileExists(this.fileName);

      product["Id"] = productId;
      productId++;

      const content = JSON.parse(await fs.promises.readFile(this.fileName));
      content.push(product);

      await fs.promises.writeFile(this.fileName, JSON.stringify(content));
    } catch (error) {
      console.log("Error al ejecutar Save: ", error);
    }
  }

  async getAll() {
    try {
      const rawContent = await fs.promises.readFile(this.fileName);
      const content = JSON.parse(rawContent);
      return content;
    } catch (error) {
      console.log("Error al ejecutar getAll: ", error);
      return [];
    }
  }

  async getByIdNumber(id) {
    try {
      const rawContent = await fs.promises.readFile(this.fileName);
      const content = JSON.parse(rawContent);
      const findByIndex = content.filter(item => item.id === id);
      console.log(findByIndex);
    } catch (error) {
      console.log("Error al ejecutar getByIdNumber: ", error);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.fileName, "[]");
    } catch (error) {
      console.log("Error al ejecutar deleteAll: ", error);
    }
  }
}

// Creates instances for testing purposes

const getProducts = async () => {
  const products = new Contenedor("productos.txt");
  const content = await products.getAll();
  console.log(await products.getAll());
};

const addProduct = async () => {
  const products = new Contenedor("productos.txt");
  await products.save({
    title: "Taza",
    price: 10,
    thumbnail: "http://",
  });
};

const deleteAllProducts = async () => {
  const products = new Contenedor("productos.txt");
  await products.deleteAll();
};

const getProductById = async (id) => {
  const products = new Contenedor("productos.txt");
  await products.getByIdNumber(id);
};

// Test --> Probar eliminando los comentarios uno a uno
// getProducts();
// addProduct();
// deleteAllProducts()
getProductById(1)

module.exports = Contenedor