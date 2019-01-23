import {InMemoryDbService } from 'angular-in-memory-web-api'

export class VinhoApi implements InMemoryDbService {
    createDb(){
        let vinhos = [
            {id: 1, nome: 'Casillero del Diablo', uva: 'Cabernet Sauvignon',classificacao: 'Tinto',fabricante: 'Concha y Toro', anoSafra: 2010, paisOrigem: 'Chile'},
            {id: 2, nome: 'Niobium', uva: 'Green Grape',classificacao: 'Tinto',fabricante: 'Bahuaus', anoSafra: 2010, paisOrigem: 'Brasil'},
            {id: 3, nome: 'Salton Talenjo', uva: 'Cabernet Sauvignon',classificacao: 'Tinto',fabricante: 'Vinícola Salton', anoSafra: 2010, paisOrigem: 'Brasil'},
            {id: 4, nome: 'Salton Desejo', uva: 'Cabernet Sauvignon',classificacao: 'Tinto',fabricante: 'Vinícola Salton', anoSafra: 2010, paisOrigem: 'Brasil'},
            {id: 5, nome: 'Herdeiros del Marques de Riscal', uva: 'Cabernet Sauvignon',classificacao: 'Tinto',fabricante: 'Riscal', anoSafra: 2010, paisOrigem: 'Brasil'}
        ]

        return {vinhos}
    }
}
