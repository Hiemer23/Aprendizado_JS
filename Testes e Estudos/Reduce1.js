const alunos = [
    {nome: 'Joao', nota:7.3, bolsista:false},
    {nome: 'Mari', nota:9.2, bolsista:true},
    {nome: 'Pedro', nota:9.8, bolsista:false},
    {nome: 'Ana', nota:8.7, bolsista:true},
]
const resultado = alunos.map(a=>a.nota).reduce((x,y)=>x+y)
const resultado2 = alunos.map(a=>a.nota).reduce((x,y)=>x+y,10)
console.log(resultado)
console.log(resultado2)