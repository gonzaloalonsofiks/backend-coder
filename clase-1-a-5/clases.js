class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName(){
    return(`${this.nombre} ${this.apellido}`)
  }

  addMascota(mascota){
    return this.mascotas.push(mascota);
  }

  countMascotas(){
    return this.mascotas.length;
  }

  addBook(book, autor){
    let newBook = {titulo: book, autor: autor};
    return this.libros.push(newBook);
  }

  getBookNames(){
    return this.libros.map(libro => libro.titulo)
  }
}

const usuario1 = new Usuario(
  "Juan",
  "García",
  [{titulo: "El alquimista", autor: "Paulo Coelho"}],
  []
);

usuario1.getFullName()
usuario1.addMascota("Perro")
usuario1.countMascotas()
usuario1.addBook("100 años de soledad", "Gabriel García Márquez")
usuario1.getBookNames()

console.log(usuario1)
console.log(usuario1.getBookNames())
