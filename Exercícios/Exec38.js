/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const impar = (min = 0, max = 100) => {
    min > max ? [min, max] = [max, min] : false
    for (let i = min; i <= max; i++) {
        i % 2 != 0 ? console.log(i) : false
    }
    //console.log(min, max)
}
impar(12)
console.log("-------------------------")
impar(3,12)
