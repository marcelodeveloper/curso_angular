function impressaoParametros(...parametros:string[]):string{
return parametros.join(' ')
}

console.log(impressaoParametros('Azul','Amarelo','Verde','Vermelho'))
console.log(impressaoParametros('Marcelo Martins'))