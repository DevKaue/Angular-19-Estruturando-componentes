import { Component, OnInit } from '@angular/core';
import { livros } from '../../mocks/mock-livros';
import { LivroComponent } from "../livro/livro.component";

@Component({
  selector: 'app-genero-literario',
  templateUrl: './genero-literario.component.html',
  styleUrls: ['./genero-literario.component.css'],
  imports: [LivroComponent]
})
export class GeneroLiterarioComponent implements OnInit {

  livro = livros[0]

  constructor() { }

  ngOnInit() {
  }

}
