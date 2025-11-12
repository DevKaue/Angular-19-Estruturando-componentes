import { Component, OnInit } from '@angular/core';
import { GeneroLivro, Livro } from '../livro/livro';
import { livros } from '../../mocks/mock-livros';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
  imports: [GeneroLiterarioComponent],
})
export class ListaLivrosComponent implements OnInit {
  generos: GeneroLivro[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  constructor() {}

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.generos = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.livrosPorGenero.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get('tecnicos') ?? [],
      },
    ];

    console.log(this.livrosPorGenero);
  }
}
