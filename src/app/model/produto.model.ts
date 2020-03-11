import { Categoria } from './categoria.model';

export class Produto{
    id: number;
    titulo: string;
    preco: number;
    descricao: string;
    categoria: Categoria;
}