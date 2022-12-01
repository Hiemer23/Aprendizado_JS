/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/
const conta_vetor = (vet=[])=>{
    let dentro=0
    let fora=0
    for(i in vet){
        (vet[i]>=20 && vet[i]<=40)?dentro++:fora++
    }
    return console.log("O valor total do vetor é: "+vet.length+"\nOs valores dentro do intervalo são: "+dentro+"\nOs valores fora do intervalo são: "+fora)
}
let vetor1 = []
for (let i = 0; i < 10; i++) {
    vetor1.push(Math.floor(Math.random() * 40))
}
console.log(vetor1)
conta_vetor(vetor1)
