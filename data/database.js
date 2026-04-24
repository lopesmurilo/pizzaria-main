let categorias = [
    { id: 1, nome: 'Pizzas' },
    { id: 2, nome: 'Bebidas' },

];

let produtos = [
    {
        categoriaId: 1,
        nome: 'Calabresa Artesanal',
        descricao: "Calabresa fatiada, cebola roxa, azeitonas pretas, mussarela e um toque de orégano.",
        preco: 72.00,
        imagem: 'https://cantinagiovannifreddo.com.br/wp-content/uploads/2023/09/PIZZA-DE-CALABRESA.webp'
    },
    {
        categoriaId: 1,
        nome: 'Margherita Especial',
        descricao: "Molho de tomate pelati, mussarela de búfala, manjericão fresco e azeite extravirgem.",
        preco: 65.00,
        imagem: 'https://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167.jpg'
    },
    {
        categoriaId: 2,
        nome: 'Vinho Tinto da Casa',
        descricao: "Garrafa de 750ml, perfeito para harmonizar com sua pizza.",
        preco: 89.90,
        imagem: 'https://cdn.awsli.com.br/600x700/1775/1775051/produto/272495235/vinho-casa-rodrigues-tinto-suave-embalagem-12x1-lt-preco-unitario-r1716-baa8a87d-dbqexlb0xr.jpg'
    },
]

module.exports = { categorias, produtos };