/*Desenvolva uma função que recebe dois parâmetros,
um é a quantidade de horas trabalhadas por um funcionário num mês,
e o quanto ele recebe por hora. O retorno da função deve ser a string
"Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"*/

const calcularSalario = (qtd_horas=0,valor_hora=0)=>console.log("Salário igual a R$",qtd_horas*valor_hora)
calcularSalario(150,40.5)
calcularSalario(150,3)
calcularSalario(150,180)