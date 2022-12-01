const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Mari', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

Array.prototype.reduce2 = function (callback, num) {
    let resultado = num || this[0]
    const ValorInicial = num ? 0 : 1
    for (let i = ValorInicial; i < this.length; i++) {
        resultado = callback(resultado, this[i], i, this)
    }
    return resultado
}

const resultado = alunos.map(a => a.nota).reduce2((x, y) => x + y, 10)
const resultado2 = alunos.map(a => a.nota).reduce((x, y) => x + y, 10)
const bolsista = alunos.map(a => a.bolsista).reduce2((x, y) => x && y)
const bolsista2 = alunos.map(a => a.bolsista).reduce2((x, y) => x || y)

console.log(resultado)
console.log(resultado2)
console.log(bolsista)
console.log(bolsista2)