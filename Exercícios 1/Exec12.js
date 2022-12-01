/*12) Faça um algoritmo que calcule o fatorial de um número.*/

const fatorial = (num)=>{
    if(num == 0) return 1
    else{
        let valor=1
        for(let i=1;i<=num;i++){
            valor*=i
        }
        return valor
    }
}

console.log(fatorial(5))
