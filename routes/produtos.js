const express = require('express');
const router = express.Router();

let db = require('../data/database');

// Rota para procurar produtos (com ou sem filtro de categoria)
router.get('/', (req, res) => {
    const categoriaId = req.query.categoriaId;
    
    if (categoriaId) {
        // O parseInt garante que o texto da URL é convertido em número para comparar com a base de dados
        const produtosFiltrados = db.produtos.filter(p => p.categoriaId === parseInt(categoriaId));
        return res.json(produtosFiltrados);
    }
    
    // Se não passar categoriaId, devolve todos os produtos
    res.json(db.produtos);
});

// Rota para adicionar um novo produto
router.post('/', (req, res) => {
    const novoProduto = {
        id: db.produtos.length > 0 ? Math.max(...db.produtos.map(p => p.id)) + 1 : 1,
        categoriaId: req.body.categoriaId,
        nome: req.body.nome,
        preco: req.body.preco,
        imagem: req.body.imagem,
    };
    db.produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Rota para atualizar um produto existente
router.put('/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const index = db.produtos.findIndex(p => p.id === produtoId);
    
    if (index !== -1) {
        db.produtos[index] = {
            id: produtoId, 
            ...req.body
        };
        res.json(db.produtos[index]);
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado" });
    }
});

// Rota para apagar um produto
router.delete('/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    db.produtos = db.produtos.filter(p => p.id !== produtoId);
    res.json({ mensagem: "Produto removido com sucesso" });
});

module.exports = router;