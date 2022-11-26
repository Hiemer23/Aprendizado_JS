/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

const numero_extenso=(num)=>{
    switch(num){
        case 1: return("Um")
        case 2: return("Dois")
        case 3: return("Três")
        case 4: return("Quatro")
        case 5: return("Cinco")
        case 6: return("Seis")
        case 7: return("Sete")
        case 8: return("Oito")
        case 9: return("Nove")
        case 0: return("Zero")
        default: return "Opção indisponível"
    }
}
console.log(numero_extenso(0))
console.log(numero_extenso(1))
console.log(numero_extenso(2))
console.log(numero_extenso(3))
console.log(numero_extenso(4))
console.log(numero_extenso(5))
console.log(numero_extenso(6))
console.log(numero_extenso(7))
console.log(numero_extenso(8))
console.log(numero_extenso(9))
console.log(numero_extenso(0))
console.log(numero_extenso("abc"))
