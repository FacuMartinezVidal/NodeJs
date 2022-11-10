const express = require('express');
const app = express();
const port = 3000;
const Contenedor = require('./desafio02');
const contenedor = new Contenedor();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/productos', routerProductos);

//PUG
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
  res.render('index.pug');
});
app.get('/formulario', (req, res) => {
  res.render('formulario.pug');
});
app.get('/productos', async (req, res) => {
  const products = await contenedor.getAll();
  res.render('productos.pug', { products: products });
});
app.post('/formulario', (req, res) => {
  const { body } = req;
  contenedor.save(body);
  res.render('devolucion.pug');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
