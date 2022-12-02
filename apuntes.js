//variables en JavaScript
//let se asgina y se puede cambiar el valor o modificarlo, pero no se puede asignar varias veces dentro de una misma funcion
//var se puede declarar mas de una vez en una funcion, no es una variable global
//const no se puede reasignar (no lo podes igual a otra cosa completamente) pero es mutable (se puede modificar) por lo que se le puede cambiar el valor

//Tipos de datos en JavaScript (la mayoria de lenguajes)
//primitivos-->String
//          -->Number
//          -->Boolean
//          -->Null
//          -->Undefined
//objetos-->predefindos en JS[Date(fechas),RegExp(expresiones regulares), Erro(datos de error)]
//       -->definidos por el programador (funciones, clases)\
//       -->arrays
//       --objetos especiales (globales, prototipo, otros)
// typeof x para saber el tipo de dato que es

//ECMAScript 6 fue una gran actualizacion para js, en donde sus mayores innovaciones fueron las nuevas declaraciones de variables (let y const), la introduccion a clases y los template strings

//return --> para que no se tome atributos que yo no le pedi, que no tome decisiones o tome el control.

//funciones en JavaScript

//funcion normal
// function sumar(a,b){
//     const resultado= a+b;
//     return resultado;
// }

//funcion arrow
//const sumar = (a, b) => a+b;    // ()=> es la funcion  //lo que esta despues de la flecha es lo que quieras que haga, mas las llaves de la funcion normal y el return incluido
// const sumar = (a, b) => {
//     const resultado = a + b;
//     return resultado;
// };

//funcion de alto orden, una funcion llama a otra
// function pasaMinusculas(nombre,funcExterna){
//     nombre = nombre.toLowerCase();
//     funcExterna(nombre);
// }
// pasaMinusculas('GUILLE', (nombre) => console.log('hola '+ nombre));

//Closure es la combinacion de una funcion agrupada (encerrada) con referencias a su estado circundante (scope cercano)
// function x(){
//     function y(){

//     }
// }

//Template string
//antes
// let numero1 = 10;
// let numero2 = 30;
// console.log(
//     "El primer numero" +
//     numero1 +
//     " y  ademas tengo otro numero que es " +
//     numero2
// )
//ahora
// console.log(
//     `El primer numero ${numero1}y ademas tengo otro numero que es ${numero2}`
// );

//Clase (fabrica de objetos)-->una forma de agrupar variables cuando tiene relacion entre si y acoplarlas con funciones (metodos) que tambien tienen relacion con esos valores
// class Persona { //la anotomia o forma del objeto
//     constructor(nombre, edad){ //como construyo personas
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludoCompleto() {
//         console.log(`bueenas, soy ${this.nombre}`)
//     }
// }

//Objeto es la manifestacion o uso de la clase
// const objeto= new Persona('guille',40);
// objeto.nombre
// objeto.edad
// objeto.saludoCompleto();
// objeto.saludoCompleto1();

// console.log(objeto)

//callback siempre es el ultimo parametro
//callback suele recibir dos parametros
//la funcion llama al callback al terminar de ejecutar todas sus operaciones

//trabajar las promesas con metodo catch y then
// promesas(parametro)
//     .catch((eror)=>{
//         console.log('no cumplio con la promesa')
//     })
//     .then((res)=>{
//         console.log('cumplio con la promesa')
//     })

//trabjar con las promesas con los callbacks
// promesas(parametro,(error, res) =>{
//     if (error){
//         console.log('no cumplio con la promesa')
//     }
//     if (res){
//         console.log('cumplio con la promesa')
//     }
// })

//proceso no bloqueante asincronico
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

//su naturaleza es asincronicro
// setTimeout(() =>{
//     console.log('set time out')
// }, 20000)

//cada cierto tiempo ejecuta el programa
// setInterval(() =>{
//     console.log('set interval')
// },2000)

//Manejo de Archivos en JS

//fs (file system) es un sistema de archivos de node\
// import fs from 'fs' para importarlo (despues de modulos)
// const fs = require ('fs'); //para importarlo (previa al modulo, generalmente se usa mas que la de arriba)
// let dataGuardada;
// try{ //intento hacer esto
//     fs.writeFileSync('./data.txt','hola mundo'); //para escribir un arhivo de manera sincronica ('nombreArchivo+ruta', 'lo que queres poner en el archivo')
//     fs.appendFileSync('./data.txt', 'esto es un agregado'); //es para agregar algo al archivo, si
//     dataGuardada = fs.readFileSync('./data.txt', 'utf-8' ); //formato de texto en la que esta guardado este archivo) //para leer un archivo y capturarlo en una variable
// }catch(e){ //pero si sale mal algo, atrapa el error y deja el programa seguir
//     console.log(e)
// }
// fs.writeFile('./data.txt', 'hola mundo', (error) => { //para escribir un archivo pero de manera asincronica
//     if (error){
//         console.log('no lo pude grabar')
//     }else{
//         console.log('lo pude grabar')
//     }
// });
// async function agregarYGrabar(){ //para usar await tenes que aclarar que la funcion es asincrona poniendole async
//     await fs.promises.writeFile('./data.txt', 'hola mundo').then(()=>{ //el await te asegura que se va ejecutar el proceso de write antes que el proceso de append
//         console.log('salio bien')
//     }).catch((e)=>{
//         console.log('salio mal')
//     })
//     await fs.promises.appendFile('./data.txt', 'agrego algo')
//         .then(()=>{
//             console.log('salio bien')
//         })
//         .catch((e)=>{
//             console.log('salio mal')
//         })
// }

//Node.js --> es un entorno/motor/enviroment de javascript, esta escrito en C++, utiliza el motor V8 que es el mismo que usa chrome
//Browser --> tambien es entorno de javascript

// const productos = [
//     { id:1, nombre:'Escuadra', precio:323.45 },
//     { id:2, nombre:'Calculadora', precio:234.56 },
//     { id:3, nombre:'Globo Terráqueo', precio:45.67 },
//     { id:4, nombre:'Paleta Pintura', precio:456.78 },
//     { id:5, nombre:'Reloj', precio:67.89 },
//     { id:6, nombre:'Agenda', precio:78.90 }
// ];

// const aux =[];
// productos.forEach(element => {
//     aux.push(element.precio)
// });

// const mayor = Math.min(...aux);
// const menor = Math.max(...aux);

// const totalProductos = productos.reduce((acc, e) => acc + e.precio, 0); //reccore el array (e), y luego utiliza una variable acumuludora donde guarda el precio
// const promedio = Math.round (totalProductos / productos.length)
// console.log(promedio)
// const resultado = {a:null, b:null, c:null, d:null, e:null, f:null}

// resultado['a']=mayor;

// console.log(resultado)

//Node--> trae modulos nativos para facilitar cosas a la hora de programar en JS

//modulos nativos --> fs(filesystem)
//npm --> lugar para descargar librerias de node (administrador de librerias / package manager)
//npm init -y para crear el package.json
//package.json es la descripcion minima de como es mi proyecto
//package.json --> dentro de scripts, colocas comandos de de ejecucion.
//.gitignore --> todo lo que quiero que no se suba a mi repositorio
// npm install -D  para instalar dependencia de desarrollo que luego no se sube a produccion
// npm instal para instalar una dependencia

//creacion de un servidor web
//nodemon --> nos ayuda en el desarrollo relanzado la ejecucion de Node.js en el caso de que algun archivo de nuestro proyecto cambie (instalacion recomendada)
//nodemon --> si lo instalas global: nodemon proyecto.js
//nodemon --> si lo instalas local es: npx nodemon proyecto.js
//nodemon --> o sino lo agregas en el script start directo como: nodemon index.js sin problemas
//nodemon --> lo ideal es hacer un script para que no haya confusiones y que se escriba como se escribe de manera global.
//servidor http --> todas las paginas web utiliza este protocolo

//creacion de servidor de manera nativa (se usa solamente para aprender)
// const http = require('http'); //modulo nativo para poder crear servidores, es un objeto que tiene metodos o una funcion
// const PORT = 8080; //se pone en mayuscula ya que es una constante que no puede cambiar
// const server = http.createServer( //creamos el servidor y lo guardamos en una variable
//     (req, res) => {
//         res.end("hola mundo");
// });
//generalmente los servidores escuchan las peticiones, esta esperando a escuchar peticiones
// server.listen(PORT, () => { //para backend se utiliza el puerto 8080/8000, los server no funcionan sin puerto
//     console.log(`Servidor Http escuchando en el puerto http://localhost:${PORT}`);
// });

//creacion de servidor con express
// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000; //si no servidor en la nube, que utilice un servidor local

// app.get('/', (req, res) => { //este es cuando entre a la ruta home
//     res.send('hello world');
// });
// app.get('/matias', (req, res) => { //en el priemer parametro del get colocas la ruta a la que queres llegar
//     res.json({id:103, name: 'juani'})
// });
// app.get('/alumnos', (req, res) => { //este es cuando entre a la ruta home
//     res.json(
//         {id:100, name: 'facundo'},
//         {id:101, name: 'lautaro'},
//         {id:102, name: 'nino'}
//     )
// });
// app.listen(port, () => {
//     console.log(`example app listening on port https://localhost:${port}`);
// });

//deploy --> cuando queres publicar tu servidor el cual trabajaste previamente de manera local (subirla a la nube)
//glitch --> sitio donde podes subir tu servidor a la nube

//API --> como hago yo para trabajar con este software
//APIrestful --> nos referimos a aplicaciones que operan en forma de servicios web, respondiendo consultas a otros sistemas a traves de internet. Dichas aplicaciones lo hacen respetando algunas reglas y convenciones
//reglas y convenciones (APIrestful) --> se usa el protocolo HTTP/S
//protocolo HTTP --> es un protocolo que se utiliza a la hora de intercambiar datos a traves de internet.
//protocolo HTTP --> existen clientes que realizan solictud de transmision de datos, y un servidor que atiende peticiones
//protocolo HTTP --> existen varios tipos de peticiones: POST/GET/PUT/DELETE, con frecuencia se equiparan operaciones CRUD (create, read, update y de)
//HTTP: Codigos de estado --> 1xx(informativo): la peticion fue recibida, y continua su procesamiento, 2xx(exito): la peticion fue recibida con exito, comprendida y procesada, 3xx(redirecccion): mas acciones son requeridas para completar la peticion, 4xx(error del cliente): la peticion tiene algun error, y no puede ser procesada, 5xx(error del servidor): el servidor fallo al intentar procesar una peticion aparentemente valida
//API REST --> es un tipo de api que no dispone de interfaz grafica
//API REST --> se utiliza exclusivamente para la comuniacion entre sistemas mediante protocolo https
//API REST --> interfaz uniforme

//ejemplo de una APIrest

//const express = require("express");
//const app = express();
//const port = process.env.PORT || 8080;
// let usuarios = [
//   { id: 100, nombre: "manuel", edad: 18 },
//   { id: 101, nombre: "carlos", edad: 32 },
//   { id: 102, nombre: "raul", edad: 28 },
//   { id: 103, nombre: "juana", edad: 23 },
// ];
//app.use(express.json()); //aclarar por defecto que no vamos a comunicar en formate json
//app.use(express.urlencoded({ extended: true })); //permitir que no me manden solamente strings
//GET CON QUERY TIPO SEARCH (OJO QUE ES EL MISMO!)
// app.get("/api/usuarios", (req, res) => {
//buscar por filtros para eso utilizo ?key=query
//   const { query } = req;
//   if (query.nombre) {
//     const usuarioFiltrado = usuarios.filter(
//       (usuario) => usuario.nombre == nombre
//     );
//     return res.json(res.json({ success: true, usuario: usuarioFiltrado }));
//   }
//   res.json(usuarios);
// });
//POST CON BODY (SIN ID!!)
// app.post("/api/usuarios", (req, res) => {
//para postear, requiere un body(objeto)
//   const { body } = req;
//   usuarios.push(body);
//   res.json("ok");
// });
//GET CON ID IDENTIFICADOR EN LA URL TIPO PARAMS
// app.get("/:id", (req, res) => {
//para obtener un usuario en especifico
//   const { id } = req.params;
//   const usuarioEncontrado = usuarios.find((usuario) => usuario.id == id); //capturo el id
//   if (usuarioEncontrado) {
//     res.json({ success: true, usuario: usuarioEncontrado });
//   } else {
//     res.json({ error: true, msg: "usuario no encontrado" });
//   }
// });
//PUT CON ID PARAMS SIEMPRE y BODY!
// app.put("/:id", (req, res) => {
//   const { id } = req.params; //capturo el id
//   const { body } = req; //capturo el body
//   const indiceEncontrado = usuarios.findIndex((usuario) => usuario.id == id);
//   if (indiceEncontrado >= 0) {
//     usuarios[indiceEncontrado] = body;
//     res.json({ success: true, usuario: usuarios[indiceEncontrado] });
//   } else {
//     res.json({ error: true, msg: "no encontrado" });
//   }
// });
//DELETE CON ID PARAMS SIEMPRE
// app.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   usuarios = usuarios.filter((usuario) => usuario.id != id);
//   res.json(usuarios);
// });
// app.listen(port, () => {
//   console.log(`example app listening on port https://localhost:${port}`);
// });
//Postman --> con el navegador solo puedo utilizar get, por lo que esta aplicacion nos permite interactuar y realizar otras accciones como put, post, etc
//Alternativa --> es otra alternativa al postman que esta incluida en el visual code es thunderclient

//clase Router --> se usa cuando se desea crear un objeto enrutador para manejar solicitudes
//Router de expres --> nos permite crear multiples 'mini aplicaciones' para que se puede asignar un espacio de nombre al api publico, autenticacion y otras rutas en sistemas de enrutamiento separados
//Routing --> se refiere a como los endpoints de las aplicaciones responden a request del cliente
// const express = require("express");
// const { Router } = require("express");
// const multer = require("multer");
// const app = express();
// const port = process.env.PORT || 8080;
// const { Router } = express; //saco el router de la libreria express
// const routerUsuarios = Router(); //lo guardo en una variable
// app.use(express.json()); //aclarar por defecto que no vamos a comunicar en formate json
// app.use(express.urlencoded({ extended: true }));
//archivos estaticos, existen dos opciones
// app.use("/public", express.static("public"));  //los que entren a mi aplicacion y esten pidiendo algo de public, le expreso cual es la carpeta estatica
// app.use("/public", express.static(__dirname + "/public")); //__dirname --> te especifica donde esta corriendo (D:\routes) el archivo que estoy parado, mas recomendable usar esta
// app.listen(port, () => {
//la linea que 'enciende' al servidor
//   console.log(`example app listening on port https://localhost:${port}`);
// });
// app.use("/api/usuarios", routerUsuarios);
// app.get("/formulario", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

//configuracion del multer
// const storage = multer.diskStorage({
//aca le decimos a multer que guarde en diskStorage (disco)
// destination: (req, file, cb) => {
//donde lo guarda
//   cb(null, "uploads");
// },
// filename: (req, file, cb) => {
//   cb(
//     null,
// file.fieldname + //nombre del campo
// "-" +
// Date.now() + //fecha
// "." +
// file.originalname.split(".").pop() //extension que tenga
//     );
//   },
// });
// const upload = multer({ storage: storage });

// app.post("/uploadfile", upload.single("myFile"), (req, res) => {
//   const file = req.file;
//   if (!file) {
//     res.send({ error: true });
//   } else {
//     res.send({ success: true });
//   }
// });

// let usuarios = [
//   { id: 100, nombre: "manuel", edad: 18 },
//   { id: 101, nombre: "carlos", edad: 32 },
//   { id: 102, nombre: "raul", edad: 28 },
//   { id: 103, nombre: "juana", edad: 23 },
// ];

// routerUsuarios.use((req, res, next) => {
//   console.log(" estan en al ruta /api/usuarios");
//   next(); //segui corriendo, a todas las funciones middleware se les coloca el next();
// });
// routerUsuarios.get("/", (req, res) => {
//   console.log("entrego listado de usuarios");
//solo quiero trabajar en la seccion de usuarios y no la app en general
//   const { query } = req;
//   if (query.nombre) {
//     const usuarioFiltrado = usuarios.filter(
//       (usuario) => usuario.nombre == nombre
//     );
//     return res.json(res.json({ success: true, usuario: usuarioFiltrado }));
//   }
//   res.json(usuarios);
// });
// POST CON BODY (SIN ID!!)
// routerUsuarios.post("/", (req, res) => {
//   const { body } = req;
//   usuarios.push(body);
//   res.json("ok");
// });
// GET CON ID IDENTIFICADOR EN LA URL TIPO PARAMS
// routerUsuarios.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const usuarioEncontrado = usuarios.find((usuario) => usuario.id == id); //capturo el id
//   if (usuarioEncontrado) {
//     res.json({ success: true, usuario: usuarioEncontrado });
//   } else {
//     res.json({ error: true, msg: "usuario no encontrado" });
//   }
// });
// PUT CON ID PARAMS SIEMPRE y BODY!
// routerUsuarios.put("/:id", (req, res) => {
//   const { id } = req.params; //capturo el id
//   const { body } = req; //capturo el body
//   const indiceEncontrado = usuarios.findIndex((usuario) => usuario.id == id);
//   if (indiceEncontrado >= 0) {
//     usuarios[indiceEncontrado] = body;
//     res.json({ success: true, usuario: usuarios[indiceEncontrado] });
//   } else {
//     res.json({ error: true, msg: "no encontrado" });
//   }
// });
// DELETE CON ID PARAMS SIEMPRE
// routerUsuarios.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   usuarios = usuarios.filter((usuario) => usuario.id != id);
//   res.json(usuarios);
// });

//miidleware --> es o son funciones que corren entre medio de un request y la respuesta del servidor, las app.use son por ejemplo middleware

//multer --> es una libreria que nos ayuda a subir archivos (npm i multer)

//motor de plantillas --> organizacion de un software en vista (front end), controllador(expres), data/database/etc(backend)
//ventajas --> tenemos garantia de que no habra HTML mal formado, podemos separar nuestro equipo en dos, reutilizar seciones de codigo, podemos separar, optmizar y organizar nuestro codigo
//desventajas de un usarlo --> riesgo de hacer HTML mal formado, dificil de documentar, sera incomodo trabajar con caracteres especiales
//git config --global alias.ca '!git add -A && git commit -m'
//https://github.com/guillejf/ejs

//Websocket (Socket) --> las conexiones son bidirccional entre el servidor y el cliente, se accede de la forma mas rapida a los datos
//Websocket (Socket) --> permite comunicacion directo y tiempo real
//Websocket (Socket) --> el servidor puede activarse por si mismo y poner toda la informacion a disposicion del cliente, sin que tenga que pedirselo. Si dispone de nueva informacion, se lo comunica al cliente, sin nesecidad de recibir una solicitud especifica para ello
//Websocket --> no se utiliza para todas las aplicaciones, se usa mas que nada para apliaciones que nesecitan de manera importante la actualizacion en tiempo real (juegos, chats, valores de la bolsa, etc.)

//Socket.IO --> libreria para hacer sockets y sockets de tiempo real
//Soporte de reconexion automatica --> a menos que se le indique lo contrario, un cliente desconectado intentara siempre volver a conectarse, hasta que el servidor vuelva a estar disponible (ej. llamada de celular)
{
  /* <form onsubmit="return false">
        <label for="msg">Mensaje</label><br>
        <input type="text" id="msg"><br>
        <button type="submit" id="enviar">Enviar</button>
</form> */
}

//FRONT END
// const socket = io();
// let nombre = prompt('Como es tu nombre')
// socket.on("connect", () => {
// 	console.log(`${socket.id} entro a la sala de chat`);
// });

// socket.emit("msg",  nombre);

// socket.on("chat", (data) => {
// 	let msgChat = "";
// 	data.forEach(({nombre, msg}) => {
//         msgChat += `${nombre} : ${msg}` + "<br>"
//     });
//     document.querySelector("#chat").innerHTML = msgChat;
// })

// let enviar = document.querySelector("#enviar");

// enviar.addEventListener("click", () => {
// 	let msg = document.querySelector("#msg").value;
// 	socket.emit("msgChat", { nombre, msg });
// });

//BACKEND
// const express = require("express");
// const app = express();
// const port = process.env.PORT || 8080;

//IMPLEMENTACION
// const httpServer = require("http").createServer(app);
// const io = require("socket.io")(httpServer);

// httpServer.listen(port, () => console.log("SERVER ON"));

// app.use(express.json());
// app.use(express.static(__dirname + "/public"));
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
// 	res.sendFile("index.html", { root: __dirname });
// });

/* SOCKETS */
// const chat = [];

// io.on("connect", (socket) => {
// 	let nombre;
// 	socket.on("msg", (data) => {
// 		nombre = data;
// 	});

// 	socket.on("msgChat", (data) => {
// 		chat.push({ ...data, nombre });

//     io.sockets.emit("chat", chat);
// 	});
// });

//transpilar--> convertir sintaxis avanzado de javascript, en este caso, y transformar en sintaxis base o vainilla.
//compilador --> es un programa que se encarga de interpretar codigo en lenguajes no compilados y pasarlo a lenguaje maquina para que la computadora lo pueda ejecutar
//Babel --> es un transpilador ubicado en una libreria que transpila un codigo de javascript con sintaxis avanzada
//Babel --> para utilizarlo debemos instalar tres dependencia npm install @babel/core @babel/cli @babel/preset-env
//Babel --> para que el watcher este listo agregamos el siguiente script "build": "babel ./origen.js -o ./destino.js -w"
//Typescript --> ./node_modules/.bin/tsc --init son las configuraciones que tiene typescript y nos ayuda a configurarlo, es un archivo tsconfig.json
//tsconfig.json--> module --> para configurar la importacion de cosas
//tsconfig.json--> target --> el nivel de lenguaje de salida  (ES5)
//tsconfig.json--> rootDrir --> donde va estar el codigo
//tsconfig.json--> outDir --> donde va a ser el destino con todo el codigo ya transpilado

//WebPack --> Module Bundler o empaquetador de modulos, que genera un solo archivo (archivo unico) con todos los modulos que necesita la aplicacion para funcionar
//Webpack --> permite encapsular todos los archivos JS en un unico archivo
//Wepack --> para instalarlo: npm install webpack webpack-cli y dentro de los scripts crear el siguiente: "build": "webpack ./a1.js ./a2.js ./a3.js" y "dev": "webpack ./a1.js ./a2.js ./a3.js -w --mode=development"

//PRIMERA ENTREGA
// ctrl + l
// ctrl enter
// ctrl d
// ctrl f2
// end of line home of line
// alt+mover la fleche
// ctrl k
// alt click


//base de datos --> es un repositorio persistente que nos permite almacenar gran numero de informacion de una forma organizada para su futura consulta, realizacion de busquedas, nuevo ingreso de datos y muchas otras operaciones.

//servidor --> es un contenedor que puede alojar un gran numero de bases de datos y ofrece los servicios para conectarlas a los clientes.

//base de datos --> mediante los clientes podemos interactuar con las bases de datos y estos pueden estar implementados en modo consola, aplicacion grafica, express, etc


//SQL -> Structured Query Language, es un tipo de lenguaje vinculado con la gestion de base de datos de caracter relacional y poder realizar operaciones CRUD (Create Read Update Delete)
