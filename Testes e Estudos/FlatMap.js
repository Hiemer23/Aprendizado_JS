const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]
const getNotadoAluno = a=>a.nota
const getNotasdaTurma = t=>t.alunos.map(getNotadoAluno)

const notas1 = escola.map(getNotasdaTurma)
console.log(notas1)

Array.prototype.flatMap1 = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasdaTurma)
console.log(notas2)