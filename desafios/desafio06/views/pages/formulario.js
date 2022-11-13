const socket = io();

socket.on('connect', () => {
  console.log('quede conectado!');
  //socket.emit("msg", "hola server!");
});
