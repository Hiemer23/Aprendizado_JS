/*Desenvolva uma função que recebe dois números inteiros não negativos
(maiores ou iguais a zero) e realize a multiplicação deles.
Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

const multiplicar = (n1,n2)=>{
    if(n1>=0 && n2>=0){
        if(n1==0 || n2==0) return console.log(0)
        else{
            let resultado=0
            for(let i=0;i<n2;i++){
                resultado = n1+resultado
            }
            return console.log(resultado)
        }
    }
    return console.log("Valor passado não pode ser menor que zero")
}
multiplicar(0,4)
multiplicar(1,4)
multiplicar(2,4)
multiplicar(3,4)