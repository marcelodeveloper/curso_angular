class Veiculo{
    public nome:string
    marca:string
    cor:string
    anoFabricacao:number

    acelerar():void{
        console.log('Acelerando o veiculo...')
    }

    trocaMarcha():void{
        console.log('Troca de marcha!!')
    }

    parar():void{
        console.log(`Parando o veiculo no estacionamento...`)
    }
}

class Moto extends Veiculo{
    cilindrada: number
    utilizacaoCapacete: boolean = true

    fazerManobrasRadicais():void{
        console.log('Realizando manobras radicais com a motao!')
    }

    acelerar():void{
        super.acelerar()
        console.log('Acelerando a moto...')
    }

    trocaMarcha():void{
        console.log('Troca de marcha!!')
    }

    parar():void{
        console.log(`Parando a moto no estacionamento...`)
    }

}

class Caminhonete extends Veiculo{
    capacidadeCacamba:number = 700
}


let cbr600: Moto = new Moto();
cbr600.nome = 'CBR600'
cbr600.marca = 'Honda'
cbr600.cilindrada = 600
cbr600.acelerar();
cbr600.trocaMarcha();
cbr600.fazerManobrasRadicais();
cbr600.parar();