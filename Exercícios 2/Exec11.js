/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

const receberPrimeiroEUltimoElemento=(vetor)=>{
    let vet_novo=[]
    vet_novo[0]=vetor[0]
    vet_novo[1] = vetor[vetor.length-1]
    return console.log(vet_novo)
}
vetor1 = ["abc",2,5,"1675"]
receberPrimeiroEUltimoElemento(vetor1)