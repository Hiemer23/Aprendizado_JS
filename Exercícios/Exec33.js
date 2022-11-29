/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/
vetorInteiro = [5, 6, 8, 9]
vetorString = ["Ana", "Joao", "Ferreira", "Maria"]
vetorDouble = [5.4, 3.2, 6.7, 5.8]

function concatenar1(){
    let vetorResultado = []
    for(i in arguments){
        vetorResultado = vetorResultado.concat(arguments[i])
    }
    return console.log(vetorResultado)
}

console.log(vetorDouble)
console.log(vetorInteiro)
console.log(vetorString)
concatenar1(vetorDouble,vetorString)
