const fs = require('fs');
class Chat {
  constructor() {
    this.filePath = './chat.json';
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
  save = async (producto) => {
    try {
      const productos = await this.getAll();
      const id = productos.length === 0 ? 1 : productos[productos.length - 1].id + 1;
      producto.id = id;
      productos.push(producto);
      await fs.promises.writeFile(this.filePath, JSON.stringify(productos, null));
    } catch (e) {}
  };
}

module.exports = Chat;
