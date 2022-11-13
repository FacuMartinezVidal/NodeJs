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
server.on('error', (error) => console.log(`Error en servidor ${error}`));
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  console.log('aqui products');
  res.render('pages/index');
});
app.get('/productos', async (req, res) => {
  console.log('aqui products');
  const productos = await contenedor.getAll();
  res.render('pages/productos', { productos: productos });
});
app.get('/productos', async (req, res) => {
  console.log('aqui products');
  const productos = await contenedor.getAll();
  res.render('pages/productos', { productos: productos });
});

app.post('/formulario', (req, res) => {
  const { body } = req;
  try {
    contenedor.save(body);
    res.render('pages/gracias.ejs');
  } catch {
    res.json({ error: true, msj: 'error al postear ' });
  }
});

app.get('/formulario', (req, res) => {
  res.render('pages/formulario', { title: 'ingrese un producto nuevo' });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let msgs = [];
io.on('connection', (socket) => {
  //console.log("se creo un socket nuevo " + socket.id);
  // socket.emit("msg", "hola front!");
  msgs.push({
    socketid: socket.id,
    email: '',
    mensaje: ' se conecto fulanito ' + socket.id,
  });
  io.sockets.emit('msg-list', msgs);

  socket.on('msg', (data) => {
    console.log('data', data);
    msgs.push({
      socketid: socket.id,
      email: data.email,
      mensaje: data.mensaje,
      //gregar el campo fecha
    });
    //persistir en un archivo

    io.sockets.emit('msg-list', msgs);
  });
  /* socket.on("disconnect", (reason) => {
      console.log(reason + " " + socket.id);
    }); */
});
