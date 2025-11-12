import { Component, input, OnInit } from '@angular/core';
import { livros } from '../../mocks/mock-livros';
import { LivroComponent } from "../livro/livro.component";
import { GeneroLivro } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  templateUrl: './genero-literario.component.html',
  styleUrls: ['./genero-literario.component.css'],
  imports: [LivroComponent]
})
export class GeneroLiterarioComponent implements OnInit {
  genero = input.required<GeneroLivro>();

  constructor() { }

  ngOnInit() {
  }

}
