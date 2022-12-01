const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

console.log(produtos)
const mais_caros = produtos.filter((prod) => prod.preco >= 15 && prod.fragil == true).map((prod)=>prod.nome)
console.log(mais_caros)