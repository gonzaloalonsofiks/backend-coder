const mostrarLetras = (string, delay, callback) => {
  let position = 0;

  const intervalID = setInterval(() => {
    console.log(string[position]);
    position++;
    if(position == string.length){
      clearInterval(intervalID);
      callback();
    }
  }, delay);
}



mostrarLetras('¡Hola!', 1000, () => {
  console.log("Terminado")
})
