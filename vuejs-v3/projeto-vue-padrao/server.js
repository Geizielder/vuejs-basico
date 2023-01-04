const express = require('express');

const app = express();
const porta = process.env.PORT || 3000

app.use(express.static(__dirname + '/dist/'))

//responder a requisições feitas para o servidor web por meio da rota usando o verbo http get
app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/.index.html')
});

app.listen(porta, function () {
  console.log('Servidor web rodando com Express');
});