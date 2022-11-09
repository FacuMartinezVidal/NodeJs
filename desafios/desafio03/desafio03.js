const fs = require("fs");
const container = require("./desafio02");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.get("/", async (req, res) => {
  res.send(
    "/productos --> para ver todos los productos /productoRandom --> para ver un producto random"
  );
});
app.get("/productos", async (req, res) => {
  const data = new container.Container();
  const productos = await data.getAll();
  res.send(productos);
});
app.get("/productoRandom", async (req, res) => {
  const data = new container.Container();
  const productos = await data.getAll();
  const numRandom = Math.floor(Math.random() * productos.length);
  const productoRandom = productos[numRandom];
  res.send(productoRandom);
});
app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`);
});
