import { Component } from '@angular/core';
import { Carro } from 'src/modelos/Carro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public carros : Carro[];

  constructor() {
    this.carros = [
       {nome: 'Corvette', preco: '250000'},
       {nome: 'Opala', preco: '10000'},
       {nome: 'Opala', preco: '10000'},
       {nome: 'Opala', preco: '10000'},
       {nome: 'Opala', preco: '10000'},
       {nome: 'Opala', preco: '10000'},
       {nome: 'Opala', preco: '10000'}
    ];
  }

}
