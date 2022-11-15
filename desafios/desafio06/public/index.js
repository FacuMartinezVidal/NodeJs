const socket = io();
socket.on('Products', (productos) => {
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

socket.on('historial', (msgList) => {
  let padre = document.getElementById('chat');
  console.log(msgList);
  let html = ` `;
  msgList.forEach((item) => {
    html += `<p> ${item.email} [${item.fecha}] : ${item.msg}</p>`;
  });
  padre.innerHTML = html;
});

function enviarForm() {
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const url = document.getElementById('url').value;
  socket.emit('product', { title: title, price: price, url: url });
}
function enviarMsg() {
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;
  const fechaActual = Date.now();
  const fecha = new Date(fechaActual);
  const fechaFormat = fecha.toLocaleString();
  socket.emit('info-msg', { email: email, msg: msg, fecha: fechaFormat });
}
