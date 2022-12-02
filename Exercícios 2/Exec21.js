/*Criar uma função que receba um array de números e retorne o menor número desse array. 

Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15

link de consulta: https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa

*/
const menorNumero = (vet)=>{
    return console.log(Math.min.apply(Math,vet))
}
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15