import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "../shared/components/cabecalho/cabecalho.component";
import { RodapeComponent } from "../shared/components/rodape/rodape.component";
import { ListaLivrosComponent } from "../shared/components/lista-livros/lista-livros.component";
import { GeneroLiterarioComponent } from "../shared/components/genero-literario/genero-literario.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, ListaLivrosComponent, GeneroLiterarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
