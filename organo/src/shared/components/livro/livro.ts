export interface Livro {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: GeneroLivro;
}

export interface GeneroLivro {
  id: string;
  value: string;
  livros: Livro[]
}
