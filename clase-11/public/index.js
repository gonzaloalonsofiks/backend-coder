const socket = io()

socket.on('bienvenida', (mensaje) => {
  alert(mensaje)
})