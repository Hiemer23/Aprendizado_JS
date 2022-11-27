/*20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1*/

const banco = (valor)=>{
    let cedulas=[0,0,0,0,0]
    let argumento =""
    let valor_cedula
    while(valor!=0){
        if(valor>=100){
            cedulas[0]++
            valor-=100
        }
        else if(valor>=50){
            cedulas[1]++
            valor-=50
        }
        else if(valor>=10){
            cedulas[2]++
            valor-=10
        }
        else if(valor>=5){
            cedulas[3]++
            valor-=5
        }
        else{
            cedulas[4]++
            valor-=1
        }
    }
    for(i in cedulas){
        if(cedulas[i]!=0){
            switch(parseInt(i)){
                case 0: valor_cedula=100.00
                    break
                case 1: valor_cedula=50.00
                    break
                case 2: valor_cedula=10.00
                    break
                case 3: valor_cedula=5.00
                    break
                case 4: valor_cedula=1.00
                    break
            }
            argumento += "\nA quantidade de cédulas de R$"+valor_cedula+" foi de "+cedulas[i]
        }
    }
    return(argumento)
}

console.log(banco(148))
