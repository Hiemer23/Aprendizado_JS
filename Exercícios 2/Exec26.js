/*Desenvolva uma função que receba uma string como parâmetro e
retorne essa string somente com as consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"*/

const removerVogais = (palavra)=>{
    let palavra_nova=""
    for(let i=0;i<palavra.length;i++){
        switch(palavra.charAt(i).toLowerCase()){
            case "a": case "e": case "i": case "o": case "u":
                continue
            default: palavra_nova+=palavra.charAt(i)
        }
    }
    return console.log(palavra_nova)
}
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"*/