const num1 = [1, 2, 3, 4, 5]
let num2
let num3
//for com propósito, 
//serve para mudar o array e receber um novo

num2 = num1.map((num) => num * 2)
console.log("Original:\n", num1)
console.log(num2)
num3 = num1.map(function (num) {
    return num * 3
})
console.log(num3)
const soma10 = n => n + 10
const triplo = n => n * 3
const paraDinheiro = n=> "R$" + parseFloat(n).toFixed(2).replace(".",",")
resultado = num1.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)