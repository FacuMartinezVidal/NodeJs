//1) Declaro una clase Usuario
class Usuario {
  //2) Agrego los atributos pedidos
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }

  //3) Agrego los metodos pedidos
  getFullName() {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  addMascotas(nuevaMascota) {
    this.mascotas.push(nuevaMascota);
  }

  countMascotas() {
    console.log(this.mascotas.length);
  }

  addBook(nombreLibro, autorLibro) {
    this.libros.push({ nombre: nombreLibro, autor: autorLibro });
  }

  getBookNames() {
    console.log(
      this.libros.map((soloNombresLibros) => soloNombresLibros.nombre)
    );
  }
}

//4) Creo un objeto llamado usuario, con los valores arbitrarios
const usuario = new Usuario("Facundo", "Martinez Vidal");

//5) Invoco todos sus metodos
usuario.getFullName();
//Agrego varias mascotas a metodo de prueba
usuario.addMascotas("Jack");
usuario.addMascotas("Hercules");
usuario.addMascotas("Toto");
usuario.addMascotas("Simon");
usuario.countMascotas();
//Agrego varios libros a metodo de prueba
usuario.addBook("Game of Thrones", "George R.R. Martin");
usuario.addBook("Harry Potter", "J.K Rowiling");
usuario.addBook("Yo Gamer", "Jorge Casanovas");
usuario.addBook("Libro Troll", "Rubius");
usuario.getBookNames();
