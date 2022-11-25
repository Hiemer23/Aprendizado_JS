const juros_simples=(CInicial,Juros,Tempo)=>{
    return (CInicial+(CInicial*Juros*Tempo))
}
const juros_composto=(CInicial,Juros,Tempo)=>{
    return (CInicial*Math.pow((1+Juros),Tempo))
}
console.log("O valor do juros simples é de: "+juros_simples(600,0.03,15))
console.log("O valor do juros composto é de: "+juros_composto(600,0.03,15))
