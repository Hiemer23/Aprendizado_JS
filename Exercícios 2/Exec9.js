/*Escreva uma função que receba dois parâmetros.
O primeiro parâmetro é o elemento que repetirá,
enquanto que o segundo será o número de vezes que haverá repetição.
Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]*/

const repetir = (inf,vezes)=>{
    let vet=[]
    for(let i =0;i<vezes;i++){
        vet.push(inf)
    }
    return console.log(vet)
}

repetir("código",2)
repetir(7,3)