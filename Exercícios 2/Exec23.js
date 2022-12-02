/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela
Considere que todas as palavras só são separadas por um espaço.
Exemplos:
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/
const contarPalavras = (frase)=>{
    let contador = frase.split(" ")
    console.log(contador.length)
}
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5