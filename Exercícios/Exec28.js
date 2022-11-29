//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
const par_e_impar = (vet = []) => {
    let par = 0
    let impar = 0
    for (i in (vet)) {
        (parseInt(vet[i])%2==0)?par++:impar++
    }
return console.log("Total de números no vetor: " + vet.length + "\nTotal de números pares: " + par + "\nTotal de números ímpares: " + impar)
}
let vetor1 = []
for (let i = 0; i < 10; i++) {
    vetor1.push(Math.floor(Math.random() * 100))
}
console.log(vetor1)
par_e_impar(vetor1)
