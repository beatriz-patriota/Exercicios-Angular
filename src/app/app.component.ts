import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  opcao: string = '';
  mostrarElementos(opcao){
    this.opcao = opcao;
    }


}
