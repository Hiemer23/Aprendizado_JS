const produtos = [
    {nome: 'Notebook',preco: 2499,fragil: true},
    {nome: 'iPad Pro',preco: 4199,fragil: true},
    {nome: 'Copo de Vidro',preco: 12.99,fragil: true},
    {nome: 'Copo de plástico',preco: 18.99,fragil: false}
]

Array.prototype.filter2 = function(callback){
    const a=[]
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)? a.push(this[i]):false
    }
    return a
}

const mais_caros = produtos.filter2((x)=>x.preco<=100)
console.log(mais_caros)