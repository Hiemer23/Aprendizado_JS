/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros*/
const media = (vet=[])=>{
    let media=0
    for(i in vet){
        media+=vet[i]
    }
    return console.log("O valor da média do vetor é de : "+(media/vet.length).toFixed(2))
}
vetor1=[]
for(let i=0;i<10;i++){
    vetor1.push(Math.floor(Math.random()*10))
}
console.log(vetor1)
media(vetor1)
