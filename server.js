const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.json({ mensagem: 'Bem-Vindo a API da Pizzaria' });
});

const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');

app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);

app.use((req, res, next) => {
    res.status(404).json({ mensagem: "Rota não encontrada na API da Pizzaria!" });
});

app.use(errorHandler);

const PORTA = 3000;

// O app.listen serve para rodar localmente na sua máquina
app.listen(PORTA, () => {
    console.log('');
    console.log('🚀 ================================');
    console.log(`🚀 Servidor a correr!`);
    console.log(`🚀 Aceda a: http://localhost:${PORTA}`);
    console.log('🚀 ================================');
    console.log('');
    console.log('📋 Rotas disponíveis:');
    console.log(`   GET    /api/categorias`);
    console.log(`   POST   /api/categorias`);
    console.log(`   GET    /api/produtos`);
    console.log(`   GET    /api/produtos?categoriaId=1`);
});

// ESTA É A LINHA MÁGICA PARA A VERCEL FUNCIONAR CORRETAMENTE!
module.exports = app;