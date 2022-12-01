const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]
let carrinho2 = carrinho.map(JSON.parse)
console.log(carrinho2)
let carrinho3 = carrinho2.map(e => e.preco)
console.log(carrinho3)