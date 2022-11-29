/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/
const palavras = (s1, s2) => {
    let contem_letra = false
    for (let i = 0; i < s1.length; i++) {
        contem_letra = false
        for (let j = 0; j < s2.length; j++) {
            let carac1 = s1.charAt(i).toLowerCase()
            let carac2 = s2.charAt(j).toLowerCase()
            if (carac1 == carac2) {
                contem_letra = true
                break
            }
        }
        if (contem_letra == false) break
    }
    if (contem_letra) {
        for (let i = 0; i < s2.length; i++) {
            contem_letra = false
            for (let j = 0; j < s1.length; j++) {
                if (s2.charAt(i).toLowerCase() == s1.charAt(j).toLowerCase()) {
                    contem_letra = true
                    break
                }
            }
            if (contem_letra == false) break
        }
    }
    return console.log(contem_letra)
}
let ss1 = "aBxDenxjhsi"
let ss2 = "aBxDhenssbBsij"
console.log(ss1)
console.log(ss2)
palavras(ss1, ss2)
