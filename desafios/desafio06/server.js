const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const Contenedor = require('./desafio02');
const contenedor = new Contenedor();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

httpServer.listen(port, () => console.log('server on http://localhost:' + port));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
const msgList = [];
io.on('connection', async (socket) => {
  console.log('se conecto un usuario');
  //se cargan los productos prexistentes
  const productos = await contenedor.getAll();
  io.sockets.emit('Products', productos);
  //se actualizan los datos despues de subir un producto
  socket.on('product', async (product) => {
    contenedor.save(product);
    io.sockets.emit('Products', productos);
  });
  socket.on('info-msg', (msg) => {
    msgList.push(msg);
    console.log(msgList);
  });
  io.sockets.emit('historial', msgList);
});
