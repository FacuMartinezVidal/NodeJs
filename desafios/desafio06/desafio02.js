const fs = require('fs');
class Contenedor {
  constructor() {
    this.filePath = './productos.json';
    this.otherFilePath = './chat.json';
  }
  getAll = async () => {
    try {
      const archivo = await fs.promises.readFile(this.filePath, 'utf-8');
      const productos = JSON.parse(archivo);
      return productos;
    } catch (e) {
      console.log(e);
    }
  };
  getAllChat = async () => {
    try {
      const archivo = await fs.promises.readFile(this.otherFilePath, 'utf-8');
      const chat = JSON.parse(archivo);
      return chat;
    } catch (e) {
      console.log(e);
    }
  };
  saveChat = async (msg) => {
    try {
      const chat = await this.getAllChat();
      const id = chat.length === 0 ? 1 : chat[chat.length - 1].id + 1;
      chat.id = id;
      chat.push(msg);
      await fs.promises.writeFile(this.otherFilePath, JSON.stringify(chat, null));
    } catch (e) {}
  };
  save = async (producto) => {
    try {
      const productos = await this.getAll();
      const id = productos.length === 0 ? 1 : productos[productos.length - 1].id + 1;
      producto.id = id;
      productos.push(producto);
      await fs.promises.writeFile(this.filePath, JSON.stringify(productos, null));
    } catch (e) {}
  };
  getById = async (id) => {
    try {
      const productos = await this.getAll();
      const productoEncontrado = productos.find((producto) => producto.id == id);

      if (!productoEncontrado) return console.log('El id del pruducto no existe');

      return productoEncontrado;
    } catch (e) {
      console.log(e);
    }
  };

  async deleteById(id) {
    try {
      const productos = await this.getAll();
      const productoEncontrado = productos.find((e) => e.id == id);
      if (!productoEncontrado) return console.log('el id no existe');
      const productosFiltrados = productos.filter((e) => e.id != id);
      await fs.promises.writeFile(this.filePath, JSON.stringify(productosFiltrados, null));
      console.log('producto borrado');
    } catch (e) {
      console.log(e);
    }
  }
  deleteAll = async () => {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify([], null));
      console.log('se borraron todos los productos');
    } catch (e) {
      console.log(e);
    }
  };

  updateById = async (id, title, price) => {
    try {
      const productos = await this.getAll();
      const item = productos.find((prod) => prod.id === Number(id));
      if (item) {
        item.title = title;
        item.price = price;
        await fs.promises.writeFile(this.filePath, JSON.stringify(productos, null, 2));
        return item;
      } else {
        return { error: 'Product not found' };
      }
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = Contenedor;
