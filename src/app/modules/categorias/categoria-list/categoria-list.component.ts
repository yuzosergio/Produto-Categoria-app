import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../shared/categoria.service';
import { Categoria } from 'src/app/model/categoria.model';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})

export class CategoriaListComponent implements OnInit {

  allCategoria: Categoria[];

  constructor(
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit() {
    this.getAllCategoria();
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe(
      (data: Categoria[]) => {
        this.allCategoria = data;
      }
    );
  }

  deleteCategoria(id: number) {
    console.log(id);

    this.categoriaService.deleteCategoria(id).subscribe(
      (data: Categoria) => {
        this.getAllCategoria();
      }
    );
  }

  edit(cat) {
    this.categoriaService.currentCategoria = Object.assign({}, cat)
  }
  
}
