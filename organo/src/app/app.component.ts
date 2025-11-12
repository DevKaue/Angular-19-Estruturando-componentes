import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "../shared/components/cabecalho/cabecalho.component";
import { RodapeComponent } from "../shared/components/rodape/rodape.component";
import { ListaLivrosComponent } from "../shared/components/lista-livros/lista-livros.component";
@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RodapeComponent, ListaLivrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
