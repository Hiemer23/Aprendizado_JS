const aprovados = ['Agata','Aldo','Daniel','Raquel']
aprovados.forEach(function(nome,indice){
    console.log(indice+1," ",nome)
})

//aprovados.forEach(nome=>console.log(nome))

//foreach recebe o nome, o indice e o array
const exibirAprovados = (aprovado,a) =>console.log(a,aprovado)
aprovados.forEach(exibirAprovados)
