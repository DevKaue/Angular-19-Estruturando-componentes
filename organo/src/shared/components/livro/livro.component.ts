import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf"
}

  constructor() { }

  ngOnInit() {
  }

}
