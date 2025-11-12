import { Component, OnInit, input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro = input.required<Livro>();

  constructor() { }

  ngOnInit() {
  }

    alternarFavorito() {
    this.livro().favorito = !this.livro().favorito
  }

}
