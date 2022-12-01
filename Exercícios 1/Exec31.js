/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/
const cont_negativo = (vet = []) => {
    let negativo = 0
    for (i in vet) {
        parseInt(vet[i]) < 0 ? negativo++ : false
    }
    return console.log("O valor total de números negativos é de: " + negativo)
}

vetor1 = []
for (let i = -7; i < 7; i++) {
    vetor1.push(Math.floor(Math.random() * i))
}
console.log(vetor1)
cont_negativo(vetor1)
