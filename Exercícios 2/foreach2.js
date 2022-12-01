const aprovados = ['Agata','Aldo','Daniel','Raquel']

Array.prototype.foreach2 = function(callback){
    for (let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

aprovados.foreach2(function(nome,indice){
    console.log(indice+1," ",nome)
})

//aprovados.forEach(nome=>console.log(nome))

//foreach recebe o nome, o indice e o array
const exibirAprovados = (aprovado,a) =>console.log(a,aprovado)
aprovados.foreach2(exibirAprovados)
