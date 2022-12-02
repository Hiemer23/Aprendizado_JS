/*Elabore uma função que recebe um objeto com estudantes e suas notas.
As notas de cada estudante estarão num array, conforme exemplo abaixo.
Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor
desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
*/
const recerberMelhorEstudante = (objeto) => {
    let objeto_novo = {}
    const soma = array => array.reduce((x, y) => x + y)
    const media = array => soma(array) / array.length
    objeto_novo = Object.entries(objeto).map((ob) => {
        return { nome: ob[0], media: media(ob[1]) }
    })
    console.log(objeto_novo)
    objeto_novo = objeto_novo.sort((x, y) => (y.media - x.media))
    console.log(objeto_novo[0])
}
recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }