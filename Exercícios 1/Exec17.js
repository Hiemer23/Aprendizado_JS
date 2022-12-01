/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/
const aumento = (plano,salario)=>{
    switch(plano.toLowerCase()){
        case 'a': return (salario*1.1).toFixed(2)
        case 'b': return (salario*1.15).toFixed(2)
        case 'c': return (salario*1.20).toFixed(2)
        default: return "Caso não especificado"
    }
}
console.log(aumento('A',100))
console.log(aumento('b',100))
console.log(aumento('c',100))
console.log(aumento('d',100))
