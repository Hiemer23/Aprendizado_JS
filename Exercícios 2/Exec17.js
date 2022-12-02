/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/
const somarNumeros = (vet) => {
    let soma = 0
    soma = vet.reduce((elemento1, elemento2) => elemento1 + elemento2)
    return console.log(soma)
}
somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15]) 