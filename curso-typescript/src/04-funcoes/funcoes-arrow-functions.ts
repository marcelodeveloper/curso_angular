let arrayArrowFunction = ['Azul', 'Verde', 'Amarelo', 'Vermelho']

console.log(createLine(32))

arrayArrowFunction.forEach(function(nome){
    console.log(`Valor iterado por uma função de callback comum: ${nome}`)
})

console.log(createLine(32))

arrayArrowFunction.forEach((nome:string)=> { 
    console.log(`Valor iterado por uma arrow function: ${nome}`)
})


function createLine(pointNumber:number):string{
    var retorno:string[];
    var valor:string = ''
    let i:number = 0;
    for(i = 0; i <= pointNumber; i++){
        valor += '-'
        //retorno.join('-')
    }
    
    //return retorno.toString()
    return valor
}
