/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/
function f1(vet,valor=0){
    let vetor2=[]
    for(i in vet){
        vetor2[i]=vet[i]*valor
    }
    return console.log(vetor2)
}
function f2(vet,valor=0){
    let vetor2=[]
    if(valor>5){
        for(i in vet){
            vetor2[i]=vet[i]*valor
        }
    }
    return console.log(vetor2)
}

vetor1 = [1,2,3,4,5,6,7,8,9,10]
console.log(vetor1)
f1(vetor1,2)
console.log(" ------------------ ")
f2(vetor1,6)
console.log(" ------------------ ")
console.log(vetor1)
