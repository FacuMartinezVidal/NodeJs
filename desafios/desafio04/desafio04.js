const express = require("express");
const app = express();
const { Router } = express;
const Contenedor = require("./desafio02");
const contenedor = new Contenedor();
const routerProductos = Router();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", routerProductos);
//GET
app.get("/", (req, res) => {
  res.send("<h1>Pagina Inicial Ecommerce</h1>");
});
app.get("/formulario", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
routerProductos.get("/", async (req, res) => {
  const products = await contenedor.getAll();
  res.json(products);
});
routerProductos.get("/:id", async (req, res) => {
  const { id } = req.params;
  const producto = await contenedor.getById(id);
  res.json(producto);
});

//POST
app.post("/formulario", (req, res) => {
  const { body } = req;
  console.log(body);
  contenedor.save(body);
  res.json({ success: true, producto: "se ha subido correctamente" });
});

//PUT
routerProductos.put("/:id", async (req, res) => {
  const { id } = req.params;
  const productos = await contenedor.getAll();
  if (id <= productos.length) {
    const { body } = req;
    await contenedor.updateById(id, body.title, body.price);
    res.json({ succes: true, producto: "producto actualizado con exito" });
  } else {
    res.json({ error: true, producto: "producto no encontrado" });
  }
});

//DELETE
routerProductos.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const productos = await contenedor.getAll();
  if (id <= productos.length) {
    const { id } = req.params;
    await contenedor.deleteById(id);
    res.json({ succes: true, producto: "producto eliminado" });
  } else {
    res.json({ error: true, producto: "producto no encontrado" });
  }
});

app.listen(port, () =>
  console.log(`The server is running in: http://localhost:${port}`)
);
