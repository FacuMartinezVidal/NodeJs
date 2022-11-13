const socket = io();

socket.on('connect', () => {
  console.log('quede conectado!');
  //socket.emit("msg", "hola server!");
});

socket.on('msg', (data) => {
  console.log(data);
});

socket.on('msg-list', (data) => {
  console.log('msg-list', data);
  let html = '';
  data.forEach((obj) => {
    html += `
    <div>
      (${obj.socketid}) ${obj.email} dijo: ${obj.mensaje}
    </div>
    `;
  });
  document.getElementById('div-list-msgs').innerHTML = html;
});

//CUANDO SE PUBLICA UN PRODUCTO NUEVO EL SERVER ME REENVIA EL ARRAY CON TODOS LOS PRODUCTOS
/* socket.on("msg-list-productos", (data) => {
  console.log("msg-list", data);
  let html = "";
  data.forEach((obj) => {
    html += `
    <div>
      (${obj.socketid}) ${obj.email} dijo: ${obj.mensaje}
    </div>
    `;
  });
  document.getElementById("div-list-productos").innerHTML = html;
}); */

function enviarMsg() {
  const msgParaEnvio = document.getElementById('input-msg').value;
  const email = document.getElementById('input-email').value;
  socket.emit('msg', { email: email, mensaje: msgParaEnvio });
}
