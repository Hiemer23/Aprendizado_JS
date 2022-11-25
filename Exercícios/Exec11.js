/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

const ano_bissexto=(ano)=>{
    if(ano%400==0) return "-É ano bissexto"
    else if(ano%100==0) return "-Não é ano bissexto"
    else if(ano%4==0 )return "-É ano bissexto"
    else return "-Não é ano bissexto"
}

ano = 0
console.log("O ano "+ano+ano_bissexto(ano))
ano = 4
console.log("O ano "+ano+ano_bissexto(ano))
ano = 8
console.log("O ano "+ano+ano_bissexto(ano))
ano = 100
console.log("O ano "+ano+ano_bissexto(ano))
ano = 400
console.log("O ano "+ano+ano_bissexto(ano))
ano = 2018
console.log("O ano "+ano+ano_bissexto(ano))
ano = 2024
console.log("O ano "+ano+ano_bissexto(ano))
