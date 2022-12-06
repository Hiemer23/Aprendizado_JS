//For of funciona bem com objetos

for (let letra of "teste") {
    console.log(letra)
}

const assuntos = ["Map", "Set", "Promise"]

for (let i in assuntos) {
    console.log(i)
}

for (let a of assuntos) {
    console.log(a)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}
for(let assunto of assuntosMap.keys()){
    console.log(assunto)
}
for(let assunto of assuntosMap.values()){
    console.log(assunto)
}
for(let assunto of assuntosMap.entries()){
    console.log(assunto)
}
