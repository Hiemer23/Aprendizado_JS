const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

const mais_caros = produtos.filter((x) => x.preco >= 15 && x.fragil == true).map(x => x.nome)
console.log(mais_caros)