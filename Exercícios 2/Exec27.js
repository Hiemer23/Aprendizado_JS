/*Desenvolva uma função que recebe um objeto como parâmetro e
retorne um outro objeto que corresponde ao objeto recebido
como parâmetro, porém com as posições das chaves e valores 
invertidas, conforme exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/
const inverter = (objeto)=>{
    const objetoInvertido = {}
    let val = Object.entries(objeto).forEach((parametro) => objetoInvertido[parametro[1]]=parametro[0])
    let parametros = Object.values(objeto)
    console.log(objetoInvertido)
}
inverter({ a: 1, b: 2, c: 3})