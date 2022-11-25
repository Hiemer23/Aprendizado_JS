/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/ 

const frutas = (fruta)=>{
    switch(fruta.toUpperCase()){
        case "MAÇÃ": return "Não vendemos esta fruta aqui"
        case "KIWI": return "Estamos com escassez de kiwis"
        case "MELANCIA": return "Aqui está, são 3 reais o quilo"
        default: return "Não entendemos seu pedido"
    }
}

console.log(frutas("mAçã"))
console.log(frutas("Kiwi"))
console.log(frutas("Melancia"))
console.log(frutas("drive"))
