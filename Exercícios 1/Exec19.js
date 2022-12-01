/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/
const cardapio = (pedido)=>{
    let vet = pedido.split(",")
    switch(vet[0]){
        case "100": return vet[1]*3.0
        case "200": return vet[1]*4.0
        case "300": return vet[1]*5.50
        case "400": return vet[1]*7.50
        case "500": return vet[1]*3.50
        case "600": return vet[1]*2.80
        default:return "Item não existe"
    }
}
console.log(cardapio("100,3"))
console.log(cardapio("200,3"))
console.log(cardapio("300,3"))
console.log(cardapio("400,3"))
