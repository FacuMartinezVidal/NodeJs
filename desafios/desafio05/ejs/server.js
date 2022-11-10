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

app.get('/productos', (req, res) => {
  console.log('aqui products');
  res.render('pages/products', { title: 'listado de productos', products: productsHC });
});

app.post('/formulario', (req, res) => {

});

app.get('/formulario', (req, res) => {
  res.render('pages/form', { title: 'ingrese un producto nuevo' });
});
