/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
const dia_inspec = (dia)=>{
    switch(dia){
        case 1: return "Fim de semana"
        case 2: case 3: case 4: case 5: case 6: return "Dia útil"
        case 7: return "Fim de semana"
        default: return "Dia inválido"
    }
}
console.log(dia_inspec(1))
console.log(dia_inspec(2))
console.log(dia_inspec(3))
console.log(dia_inspec(4))
console.log(dia_inspec(5))
console.log(dia_inspec(6))
console.log(dia_inspec(7))
console.log(dia_inspec(8))
console.log(dia_inspec("abc"))
