/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/
const crescimento = (altura_1, altura_2, crescimento_1, crescimento_2) => {
    if (altura_1 == altura_2) {
        if (crescimento_1 == crescimento_2) return console.log("As crianças sempre terão a mesm altura")
        else if (crescimento_1 > crescimento_2) return console.log("A criança nº1 irá ultrapassar a criança nº2 daqui a 1 ano")
        else return console.log("A criança nº2 irá ultrapassar a criança nº1 daqui a 1 ano")
    }
    else if (altura_1 > altura_2) {
        if (crescimento_1 >= crescimento_2) return console.log("A criança nº1 é a mais alta e a criança nº2 não conseguirá ultrapasá-la")
        else {
            let anos = 1
            while ((altura_1 + crescimento_1 * anos) > altura_2 + crescimento_2 * anos) {
                anos++
            }
            return console.log("A criança nº1 é a mais alta e a criança nº2 irá ultrapasá-la daqui a: " + (anos + 1) + " anos")
        }
    }
    else {
        if (crescimento_1 <= crescimento_2) return console.log("A criança nº2 é a mais alta e a criança nº1 não conseguirá ultrapasá-la")
        else {
            let anos = 1
            while ((altura_1 + crescimento_1 * anos) > altura_2 + crescimento_2 * anos) {
                anos++
            }
            return console.log("A criança nº2 é a mais alta e a criança nº1 irá ultrapasá-la daqui a: " + (anos + 1) + " anos")
        }
    }
}
crescimento(163, 165, 4, 3)
