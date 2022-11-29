/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const media = (codigo,n1,n2,n3)=>{
    let notas=[]
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a,b)=>b-a)
    let media = (notas[0]*4+notas[1]*3+notas[2]*3)/10
    console.log("O aluno: "+codigo+"\nTeve as notas:"+notas+'\ne de média obteve:'+(media).toFixed(2))
    if(media>5) console.log("Aprovado")
    else console.log("Reprovado")
}
media(2321,8,2,1)
console.log("---------------------")
media(2322,8,5,1)
console.log("---------------------")
media(2323,3,2,1)
console.log("---------------------")
media(2324,8,8,8)
