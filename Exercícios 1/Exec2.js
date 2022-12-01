const triangulo=(l1,l2,l3)=>{
    if(l1==l2 && l1==l3) console.log("Este triangulo é: Equilatero")
    else if(l1==l2 || l2==l3 || l1==l3) console.log("Este triangulo é: Isoceles")
    else console.log("Este triangulo é: Escaleno")
}
triangulo(1,2,1)