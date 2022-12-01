/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo)
e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo.
Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja,
considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo
não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva,
não considerando se numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 50, 100) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 3, 150) // retornará false
estaEntre(3, 3, 150, true) // retornará true
*/

const estaEntre = (n1,min,max,inclusivo = false)=>{
    if(n1>min && n1<max){
        return console.log(true)
    }
    if(n1==min || n1==max){
        return console.log(inclusivo)
    }
}

estaEntre(1,1,10,false)