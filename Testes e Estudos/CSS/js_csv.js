const texto = "1;Bulbasaur;Grass;Poison;False/2;Ivysaur;Grass;Poison;False/3;Venusaur;Grass;Poison;False/4;Charmander;Fire;;False/"
let vet = texto.split("/")
console.log(vet)
let obj = []

for(let pokemon in vet){
    obj[pokemon]=vet[pokemon].split(";")
}

obj.forEach(a=>console.log(a[1]))