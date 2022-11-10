const express = require('express');
const app = express();
const port = 8080;
const Contenedor = require('./desafio02');
const contenedor = new Contenedor();
const server = app.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto http://localhost:${server.address().port}`);
});
server.on('error', (error) => console.log(`Error en servidor ${error}`));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  console.log('aqui products');
  res.render('pages/index')
});

app.get('/productos', async (req, res) => {
  console.log('aqui products');
  const productos = await contenedor.getAll()
  res.render('pages/productos', {productos:productos});
});
app.get('/productos', async (req, res) => {
  console.log('aqui products');
  const productos = await contenedor.getAll()
  res.render('pages/productos', {productos:productos});
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
