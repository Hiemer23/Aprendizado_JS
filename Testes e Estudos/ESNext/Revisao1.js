//let e const
{
    var a=2
    let b=3
    console.log(b)
}
console.log(a)
//console.log(b)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro\n!`)

//Destructuring
const [l,e,...tras] = "teste"
console.log(l,e,tras)
//const{idade,nome}={nome:"Ana",idade: 9}
const{idade:i,nome:n}={nome:"Ana",idade: 9}
//console.log(idade,nome)
console.log(i,n)