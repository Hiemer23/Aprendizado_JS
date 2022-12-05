require('./global')
console.log(global.MinhaApp.saudacao())
console.log(MinhaApp.saudacao())

console.log(MinhaApp.nome)
MinhaApp.nome = 'Eita'
console.log(MinhaApp.nome)