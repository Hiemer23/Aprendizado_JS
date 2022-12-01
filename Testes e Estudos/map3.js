const num1 = [1, 2, 3, 4, 5]
let num2
let num3
//for com propósito, 
//serve para mudar o array e receber um novo

Array.prototype.map2 = function(callback){
    let a2 =[]
    for(let i=0;i<this.length;i++){
        a2.push (callback(this[i],i,this))
    }
    return a2
}


num2 = num1.map2((num) => num * 2)
console.log("Original:\n", num1)
console.log(num2)
num3 = num1.map2(function (num) {
    return num * 3
})
console.log(num3)
const soma10 = n => n + 10
const triplo = n => n * 3
const paraDinheiro = n=> "R$" + parseFloat(n).toFixed(2).replace(".",",")
resultado = num1.map2(soma10).map2(triplo).map2(paraDinheiro)
console.log(resultado)

const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de Lapis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]
let carrinho2 = carrinho.map2(JSON.parse)
console.log(carrinho2)
let carrinho3 = carrinho2.map2(e => e.preco)
console.log(carrinho3)