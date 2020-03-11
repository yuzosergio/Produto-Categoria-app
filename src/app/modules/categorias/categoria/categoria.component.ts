import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../shared/categoria.service';
import { Categoria } from 'src/app/model/categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {

  constructor(
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
  }

  createAndUpdate(currentCategoria: Categoria) {
    console.log(currentCategoria);
    if (currentCategoria.id != null) {
      console.log('update');
      this.updateCategoria(currentCategoria);

    } else {
      console.log('create');
      this.createCategoria(currentCategoria);
    }
  }

  createCategoria(cat: Categoria) {
    this.categoriaService.createCategoria(cat).subscribe();
  }
  updateCategoria(cat: Categoria) {
    this.categoriaService.updateCategoria(cat).subscribe();
  }
  clear() {
    this.categoriaService.currentCategoria = {
      id: null,
      descricao: '',
    }
  }
  
}
