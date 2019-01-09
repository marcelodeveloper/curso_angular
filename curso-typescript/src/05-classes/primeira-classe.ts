class Veículo{
    marca:string
    cor:string
    anoFabricacao:number

    acelerar():void{
        console.log('Acelerando o veículo...')
    }

    trocaMarcha():void{
        console.log('Troca de marcha!!')
    }

    parar():void{
        console.log(`Parando o veículo no estacionamento...`)
    }
}

let monza: Veículo = new Veículo();
monza.marca = "Chevrolet"
monza.cor = "Vermelho"
monza.anoFabricacao = 1990

console.log(`Veículo Monza = ${monza.marca}, ${monza.cor}, ${monza.anoFabricacao}`)

monza.acelerar();
monza.trocaMarcha()
monza.acelerar()
monza.parar()

