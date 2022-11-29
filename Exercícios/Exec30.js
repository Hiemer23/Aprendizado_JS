/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/
const verifica = (vet) => {
    let maior = vet[0]
    let menor = vet[0]
    for (i in vet) {
        maior < vet[i] ? maior = vet[i] : false
        menor > vet[i] ? menor = vet[i] : false
    }
    return console.log("O maior valor do vetor é: " + maior + "\nO menor valor do vetor é: " + menor)
}
vetor1 = []
for (let i = 0; i < 10; i++) {
    vetor1.push(Math.floor(Math.random() * 100))
}
console.log(vetor1)
verifica(vetor1)
