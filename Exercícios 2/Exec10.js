/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/
const simboloMais = (vezes)=>{
    let mensagem = ""
    if(vezes<=0) return 
    for(let i=0;i<vezes;i++){
        mensagem=mensagem.concat("+")
    }
    return console.log(mensagem)
}
simboloMais(3)
simboloMais(8)
simboloMais(0)