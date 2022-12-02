/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
*/

const filtrarNumeros = (vet)=>{
    let vet2 = vet.filter((elemento)=>(typeof(elemento)=="number"))
    return console.log(vet2)
}
vetor1 = ["Javascript", 1, "3", "Web", 20]
vetor2 = [197, 1, 3, "Web", 20]
vetor3 = [194.53, 1, true, false, 20]

filtrarNumeros(vetor1)
filtrarNumeros(vetor2)
filtrarNumeros(vetor3)
