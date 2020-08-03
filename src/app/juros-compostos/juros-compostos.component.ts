import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.scss']
})
export class JurosCompostosComponent implements OnInit {
  mostrarDiv: boolean = false;
  ValorInicial: number = 0;
  TaxaJuros: string = 0;
  resultadoJuros: number = 0;
  TempoMeses: number = 0;
  resultadoespoente: number = 0;
  constructor() { }

  ngOnInit() {
  }
  MostrarDiv(){
    this.mostrarDiv = !this.mostrarDiv;
  }
  Juros(){
    this.resultadoespoente = Math.pow(( 1 + (Number(this.TaxaJuros) / 100)), Number(this.TempoMeses));
    this.resultadoJuros = Number(this.ValorInicial) * Number(this.resultadoespoente);
    this.resultadoJuros = Number(this.resultadoJuros.toFixed(2));
  }
  ReplaceVirgula(){

    this.TaxaJuros = this.TaxaJuros.replace( ',' , '.');
  }
}
