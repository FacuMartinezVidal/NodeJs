const socket = io();
socket.on('modProducts', (productos) => {
  let table = document.getElementById('padre');
  let html = `            <tr>
  <th>#</th>
  <th>Nombre</th>
  <th>Precio</th>
  <th>Foto</th>
</tr>`;
  productos.forEach((item) => {
    html += `<tr>
    <td>
      ${item.id}
    </td>
    <td>
      ${item.title}
    </td>
    <td>
      ${item.price}
    </td>
    <td>
      <img src=${item.url} class="product-img"/>
    </td>
  </tr>`;
  });
  table.innerHTML = html;
});

function enviarForm() {
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const url = document.getElementById('url');
  socket.emit('product', { name: name, title: title, url: url });
}
