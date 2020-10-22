const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World');
});

const mensagens = ['essa é uma mensagem', 'essa é outra mensagem'];

app.get('/mensagem', (req, res) => {
    res.send(mensagens);
});

app.post('/mensagem', (req, res) => {
    const texto = req.body.texto;
    mensagens.push(texto);

    res.send(req.body);
});
app.listen(port, () => {
    console.log('App rodando em http://localhost:' + port);
});