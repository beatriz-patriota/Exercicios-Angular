import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  mostrarDiv: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  MostrarDiv(){
    this.mostrarDiv = !this.mostrarDiv;
  }
  calcular(){
    this.resultado = Number(this.valor1) + Number(this.valor2);
  }
}
