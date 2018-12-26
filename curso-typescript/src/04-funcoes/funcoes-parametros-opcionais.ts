function imprimirNomeCompletoComPeso(nome: string, sobrenome:string, peso?: number):string{
    if(peso){
        return `Nome completo: ${nome} ${sobrenome}. Peso atual: ${peso}`
    } else {
        return `Nome completo: ${nome} ${sobrenome}. Peso atual: não informado`
    }
}

console.log(imprimirNomeCompletoComPeso('Marcelo','Martins'))
console.log(imprimirNomeCompletoComPeso('Marcelo','Martins',83))