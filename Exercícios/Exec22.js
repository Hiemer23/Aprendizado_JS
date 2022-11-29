/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const juros = (mes,valor)=>{
    if(mes>1 && mes<12){
        atraso = mes - 1
        return (valor * (Math.pow(1 + 0.05,atraso))).toFixed(2)
    }
    return "Valor invalido"
}

console.log(juros(2,50))
console.log(juros(3,50))
console.log(juros(4,50))
console.log(juros(6,50))
