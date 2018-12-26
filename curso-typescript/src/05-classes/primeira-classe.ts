class Veiculo{
    marca:string
    cor:string
    anoFabricacao:number
}

let monza: Veiculo = new Veiculo();
monza.marca = "Chevrolet"
monza.cor = "Vermelho"
monza.anoFabricacao = 1990

console.log(`Veiculo Monza = ${monza.marca}, ${monza.cor}, ${monza.anoFabricacao}`)

