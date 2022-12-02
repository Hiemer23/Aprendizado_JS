/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar
criando uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo
parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string
do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
// retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])
// retornará []
*/
const buscarPalavrasSemelhantes = (palavra, texto) => {
    let contem = []
    for (let i in texto) {
        if (texto[i].includes(palavra)) contem.push(texto[i])
    }
    return console.log(contem)
}
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
// retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])
// retornará []
buscarPalavrasSemelhantes("amo", ["amor", "namorada", "camuflagem","amostra"])
// retornará [ 'amor', 'namorada', 'amostra']