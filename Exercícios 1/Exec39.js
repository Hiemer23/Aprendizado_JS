/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
const trocar = (vetA, vetB) => {
    if(vetA.length == vetB.length){
        for (let i in vetA) {
            [vetA[i],vetB[i]]=[vetB[i],vetA[i]]
        }
    }
    else return console.log("Não são de tamanhos iguais")
}
vetA = [1, 2, 3, 4, 5]
vetB = [6, 7, 8, 9, 10]
console.log(vetA,vetB)
console.log("--------------------")
trocar(vetA, vetB)
console.log(vetA,vetB)
console.log("--------------------")
