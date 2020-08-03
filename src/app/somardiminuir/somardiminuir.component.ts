import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somardiminuir',
  templateUrl: './somardiminuir.component.html',
  styleUrls: ['./somardiminuir.component.scss']
})
export class SomardiminuirComponent implements OnInit {
  valor: number = 0;
  mostrarDiv: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  MostrarDiv(){
    this.mostrarDiv = !this.mostrarDiv;
  }
  aumentar(){
    Number(this.valor++);

  }

  diminuir(){
    Number(this.valor--);

  }
}
