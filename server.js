const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Definir a pasta pública para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// isso aqui roda na url :) em uma porta kkk
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});