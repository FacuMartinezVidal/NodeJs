const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const port = 8080;
const Contenedor = require('./desafio02');
const contenedor = new Contenedor();
const server = app.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
server.on('error', (error) => console.log(`Error en servidor ${error}`));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);

app.get('/', async (req, res) => {
  const productos = await contenedor.getAll();
  if (productos) {
    res.render('productos', { productos: productos, productsExist: true });
  } else {
    res.render('productos', { productos: productos, productsExist: false });
  }
});

app.get('/formulario', (req, res) => {
  res.render('formulario');
});

app.post('/formulario', async (req, res) => {
  const { body } = req;
  try {
    contenedor.save(body);
    res.render('devolucion.hbs');
  } catch {
    res.json({ error: true, msj: 'error al postear ' });
  }
});
