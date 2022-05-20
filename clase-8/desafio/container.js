const listaProductos = [];
let idProducto = 1;

class Contenedor {
  getProductos() {
    return listaProductos;
  }

  getProductoPorId(idProducto) {
    const productoSolicitado = listaProductos.find(
      (prod) => prod.id == idProducto
    );
    if (productoSolicitado != undefined) {
      return { productoSolicitado };
    } return({ Error: "El producto no existe." });
  }

  postProducto(body) {
    const id = idProducto++;
    let nuevoProducto = {
      id: id,
      title: body.title,
      price: body.price,
      thumbnail: body.thumbnail,
    };
    listaProductos.push(nuevoProducto);
    return nuevoProducto;
  }

  putProducto(idProducto, body) {
    listaProductos.forEach((producto) => {
      if (producto.id == idProducto) {
        producto.title = body.title;
        producto.price = body.price;
        producto.thumbnail = producto.thumbnail;
      }
    });
  }

  deleteProducto(idProducto) {
    return listaProductos.splice(parseInt(idProducto) - 1, 1);
  }
}

module.exports = Contenedor;
