/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

const calculadora =(expressao)=>{
    let vet_valores=expressao.split(",")
    switch(vet_valores[1]){
        case '+': return (parseInt(vet_valores[0])+parseInt(vet_valores[2]))
        case '-': return (parseInt(vet_valores[0])-parseInt(vet_valores[2]))
        case '*': return (parseInt(vet_valores[0])*parseInt(vet_valores[2]))
        case '/': return (parseInt(vet_valores[0])/parseInt(vet_valores[2]))
        default: return "Caso inválido"
    }
}
let texto = "2,+,3"
console.log(calculadora(texto))
texto = "2,-,3"
console.log(calculadora(texto))
texto = "2,*,3"
console.log(calculadora(texto))
texto = "2,/,3"
console.log(calculadora(texto))
