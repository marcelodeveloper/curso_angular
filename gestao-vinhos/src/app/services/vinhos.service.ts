import { Injectable } from '@angular/core';
import { Vinho } from '../models/vinho'

@Injectable({
  providedIn: 'root'
})
export class VinhosService {

  constructor() { }

  listar(): Array<Vinho> {
    let vinhos = new Array<Vinho>();
    vinhos.push(this.criarVinho(1,'Casillero del Diablo', 'Cabernet Sauvignon', 'Tinto', 'Concha y Toro',2010,'Chile'));
    vinhos.push(this.criarVinho(2,'Casillero del Toro', 'Cabernet Sauvignon', 'Tinto', 'Concha y Toro',2010,'Chile'));
    vinhos.push(this.criarVinho(3,'Niobium', 'Green Grape', 'Branco', 'Bahuaus',2017,'Brazil'));

    return vinhos
  }

  private criarVinho(id:number, nome: string, uva: string, classificacao: string,fabricante: string, anoSafra:number,paisOrigem: string):Vinho{
    let vinho:Vinho = new Vinho()
    vinho.id = id
    vinho.nome = nome
    vinho.uva = uva
    vinho.classificacao = classificacao
    vinho.fabricante = fabricante
    vinho.anoSafra = anoSafra
    vinho.paisOrigem = paisOrigem
    return vinho
  }
}


