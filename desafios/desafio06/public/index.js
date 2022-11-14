const socket = io();

socket.on('connect', () => {
  console.log('quede conectado!');
});

socket.on('allProducts', (productos) => {
  console.log(productos[0]);
  let padre = document.getElementById('padre');
  html1.innerHTML = `<thead> <tr> <th class="table-primary" scope="col">#</th> <th class="table-primary" scope="col">Nombre</th> <th class="table-primary" scope="col">Precio</th> <th class="table-primary" scope="col">Foto</th></tr> </thead>`;
  productos.forEach((item) => {});
  padre.append(html1);
});
