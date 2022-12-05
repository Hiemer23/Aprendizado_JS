const funcionario={
    nome:'Maria',
    salario: 12348.99
}
const clone = {ativo:true,...funcionario}
console.log(funcionario)
console.log(clone)

//usar spread
const grupoA=['João','Pedro',"Glória"]
const grupoB=['Maria',...grupoA,"Fernando"]
console.log(grupoB)