const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const Contenedor = require('./desafio02');
const contenedor = new Contenedor();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

httpServer.listen(port, () => console.log('server on http://localhost:' + port));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
