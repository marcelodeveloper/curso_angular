function concatenarNome(primeiroNome:string, sobrenome:string):string{
    return `${primeiroNome} ${sobrenome}`
}

console.log(concatenarNome('Marcelo','Martins'))

function listarNome(primeiroNome:string,sobrenome:string):void{
    console.log(`Listagem de nome = ${primeiroNome} ${sobrenome}`)
}

listarNome('Marcelo','Martins')