const bask=(a=0,b=0,c=0)=>{
    delta = b*b-(4*a*c)
    if(delta>=0){
        console.log("A primeira raiz é: "+((-b+Math.sqrt(delta))/(2*a)).toFixed(3)+"\nA segunda raiz é: "+((-b-Math.sqrt(delta))/(2*a)).toFixed(3))
    }
    else{
        console.log("Delta negativo!!!")
    }
}

bask(1,5,4)