import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoService } from '../shared/produto.service';
import {FormsModule} from '@angular/forms';
import { CategoriaService } from '../shared/categoria.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ProdutoComponent, ProdutoListComponent],
  exports:[ProdutoComponent, ProdutoListComponent],
  providers: [ProdutoService, CategoriaService]
})
export class ProdutosModule { }
