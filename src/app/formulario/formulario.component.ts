import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  lstObjPessoa =[];
  objPessoa = {
    Nome: '',
    DataNascimento: '',
    Telefone: '',
    Endereco: ''
  }
  mostrarElementos: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  Salvar (){
    this.lstObjPessoa.push(this.objPessoa);
    this.LimparFormulario()
    this.MostrarElementos()
  }
  LimparFormulario(){
    this.objPessoa = {
      Nome: '',
      DataNascimento: '',
      Telefone: '',
      Endereco: ''
    }
  }

  MostrarElementos(){
    this.mostrarElementos = !this.mostrarElementos;
  }
}
