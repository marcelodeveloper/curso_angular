function olaGenerics<T>(args: T): T{
    return args
}

console.log(olaGenerics("Marcelo Martins"))
console.log(olaGenerics<string>("Marcelo Martins"))
console.log(olaGenerics<number>(123))
