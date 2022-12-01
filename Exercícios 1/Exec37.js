/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/
const geometric = (n = 1, a1 = 0, r = 0) => {
    let vet_geometric = []
    for (let i = 0; i < n; i++) {
        vet_geometric.push(a1 * r**i)
    }
    let soma = vet_geometric.reduce((a1,a2)=>a1+a2)
    return console.log((vet_geometric) +"\nO valor da soma Geométrica é de: "+(soma))
}
const aritimetic = (n = 1, a1 = 0, r = 0) => {
    let vet_geometric = []
    for (let i = 0; i < n; i++) {
        vet_geometric.push(a1 + (i*r))
    }
    let soma = vet_geometric.reduce((a1,a2)=>a1+a2)
    return console.log((vet_geometric) +"\nO valor da soma aritimética é de: "+(soma))
}
aritimetic(10, 10, 15)
console.log("--------------------------")
geometric(10, 5, 3)
